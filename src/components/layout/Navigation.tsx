import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { sound, toggleSound, useSoundEnabled } from '../../lib/sound';

export const Navigation: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const soundOn = useSoundEnabled();
  const { pathname } = useLocation();

  const path = `~/arpl${pathname === '/' ? '' : pathname}`;
  const item = 'uppercase text-muted hover:text-fg transition-colors';

  return (
    <nav className="sticky top-0 z-40 bg-bg border-b border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.15em]">
        <Link to="/" className="truncate normal-case tracking-normal text-sm" onClick={sound.click}>
          <span className="text-muted">pawel@</span>
          {path}
          <span className="cursor" />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <Link to="/#work" className={`${item} hidden sm:inline`} onMouseEnter={sound.tick} onClick={sound.click}>
            Work
          </Link>
          <Link to="/blog" className={item} onMouseEnter={sound.tick} onClick={sound.click}>
            Blog
          </Link>
          <button
            onClick={toggleSound}
            onMouseEnter={sound.tick}
            className={item}
            aria-pressed={soundOn}
            title="Toggle sound (S)"
          >
            Snd:{soundOn ? 'on' : 'off'}
          </button>
          <button
            onClick={() => {
              sound.swap();
              toggleTheme();
            }}
            onMouseEnter={sound.tick}
            className={item}
            title="Toggle theme (T)"
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};
