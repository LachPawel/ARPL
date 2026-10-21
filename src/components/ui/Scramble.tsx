import React, { useCallback, useEffect, useRef, useState } from 'react';
import { sound } from '../../lib/sound';

const GLYPHS = '!<>-_\\/[]{}=+*^?#01ABCDEFX';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface ScrambleProps {
  text: string;
  /** Scramble once when the element scrolls into view */
  onView?: boolean;
  /** Scramble again on hover */
  onHover?: boolean;
  /** Scramble whenever this flips to true, e.g. when a parent row is hovered */
  active?: boolean;
  /** Play a faint chatter while decoding */
  audible?: boolean;
  className?: string;
}

/**
 * Text that decodes itself from random glyphs, left to right.
 * Works best with a monospace font so the width never jumps.
 */
export const Scramble: React.FC<ScrambleProps> = ({
  text,
  onView = false,
  onHover = false,
  active = false,
  audible = false,
  className = '',
}) => {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef<number>();

  const run = useCallback(() => {
    if (prefersReducedMotion()) return;
    cancelAnimationFrame(frame.current!);
    const start = performance.now();
    const duration = Math.min(900, 250 + text.length * 30);

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const settled = Math.floor(progress * text.length);
      let out = text.slice(0, settled);
      for (let i = settled; i < text.length; i++) {
        out += text[i] === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setDisplay(out);
      if (audible && Math.random() < 0.35) sound.chatter();
      if (progress < 1) frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
  }, [text, audible]);

  useEffect(() => {
    setDisplay(text);
    if (!onView || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame.current!);
    };
  }, [text, onView, run]);

  useEffect(() => {
    if (active) run();
  }, [active, run]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={text}
      onMouseEnter={onHover ? run : undefined}
    >
      <span aria-hidden>{display}</span>
    </span>
  );
};
