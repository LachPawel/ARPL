import React, { useEffect, useRef, useState } from 'react';
import { isSoundOn } from '../../lib/sound';
import { workItems } from '../../data/work';
import { blogPosts } from '../../data/posts';

const SESSION_KEY = 'booted';
export const BOOT_EVENT = 'arpl:boot';

// Dot leaders padded to one width so the values line up
const row = (label: string, value: string) => `${label} ${'.'.repeat(20 - label.length)} ${value}`;

const lines = [
  row('loading work', `${workItems.length} ok`),
  row('loading writing', `${blogPosts.length} ok`),
  row('audio', 'ready'),
];

const alreadyBooted = () => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    return false;
  }
};

/**
 * Terminal-style intro shown once per session while sound is on.
 * Browsers only allow audio after a click or key press, so entering
 * the site through this screen is what turns the sound on.
 */
export const BootScreen: React.FC = () => {
  const [open, setOpen] = useState(() => isSoundOn() && !alreadyBooted());
  const [shown, setShown] = useState(0);
  const button = useRef<HTMLButtonElement>(null);

  // Reveal the lines one by one
  useEffect(() => {
    if (!open) return;
    const instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (instant) {
      setShown(lines.length + 1);
      return;
    }
    const timers = Array.from({ length: lines.length + 1 }, (_, i) =>
      setTimeout(() => setShown(i + 1), 250 + i * 220)
    );
    return () => timers.forEach(clearTimeout);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    button.current?.focus();
    document.body.style.overflow = 'hidden';

    const enter = (e: Event) => {
      // Keep shortcut keys (T, S) from also firing on the page underneath
      e.stopPropagation();
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // storage blocked, the screen shows again next visit
      }
      setOpen(false);
      window.dispatchEvent(new Event(BOOT_EVENT));
    };

    window.addEventListener('click', enter, true);
    window.addEventListener('keydown', enter, true);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('click', enter, true);
      window.removeEventListener('keydown', enter, true);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div role="dialog" aria-label="Enter site" className="fixed inset-0 z-50 bg-bg flex items-center px-4 sm:px-8">
      <div className="w-full max-w-5xl mx-auto text-sm sm:text-base space-y-2">
        <p className="text-muted mb-6">pawel@~/arpl</p>
        {lines.slice(0, shown).map((line) => (
          <p key={line} className="whitespace-pre">
            <span className="text-faint">&gt; </span>
            {line}
          </p>
        ))}
        {shown > lines.length && (
          <div className="pt-8">
            <button ref={button} className="kicker cursor">
              [ press any key or click to enter ]
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
