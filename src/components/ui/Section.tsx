import React, { ReactNode } from 'react';
import { Scramble } from './Scramble';

interface SectionProps {
  id?: string;
  title: string;
  /** Optional element on the right side of the header rule */
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, aside, children, className = '' }) => (
  <section id={id} className={`scroll-mt-20 pt-16 sm:pt-24 ${className}`}>
    <header className="flex items-baseline justify-between gap-4 border-b border-fg pb-4 mb-8">
      <h2 className="kicker font-semibold">
        <Scramble text={title} onView />
      </h2>
      {aside && <div className="kicker text-muted">{aside}</div>}
    </header>
    {children}
  </section>
);

/** Small uppercase label with a pattern swatch, like a legend entry */
export const Swatch: React.FC<{ pattern: Pattern; className?: string }> = ({ pattern, className = '' }) => (
  <span
    aria-hidden
    className={`inline-block w-5 h-5 shrink-0 border border-faint pat-${pattern} ${className}`}
  />
);

export type Pattern = 'solid' | 'dots' | 'lines' | 'gray' | 'dashed';
