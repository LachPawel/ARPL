import React from 'react';
import { sound } from '../../lib/sound';

const socials = [
  { label: 'GitHub', url: 'https://github.com/LachPawel' },
  { label: 'YouTube', url: 'https://youtube.com/@arplearn' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/pawelach/' },
];

export const Footer: React.FC = () => (
  <footer className="w-full max-w-5xl mx-auto px-4 sm:px-8 mt-24 sm:mt-32">
    <div className="border-t border-line py-10 flex flex-col sm:flex-row gap-6 sm:items-end justify-between text-sm">
      <div className="space-y-2">
        <a href="mailto:pawel@arpl.dev" className="link" onClick={sound.click}>
          pawel@arpl.dev
        </a>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-fg transition-colors"
              onMouseEnter={sound.tick}
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
      <div className="text-faint text-xs space-y-1 sm:text-right">
        <p className="hidden sm:block">[T] theme · [S] sound</p>
        <p>© {new Date().getFullYear()} ARPL</p>
      </div>
    </div>
  </footer>
);
