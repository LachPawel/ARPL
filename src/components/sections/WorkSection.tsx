import React, { useEffect, useState } from 'react';
import { Section, Swatch, Scramble } from '../ui';
import { workItems, kindPattern, hostOf, WorkKind, WorkItem } from '../../data/work';
import { sound } from '../../lib/sound';

const PAGE = 8;
const kinds: WorkKind[] = ['hackathon', 'project', 'content'];
const plural: Record<WorkKind, string> = { hackathon: 'Hackathons', project: 'Projects', content: 'Content' };
const pad = (n: number) => String(n).padStart(2, '0');

type Filter = 'all' | WorkKind;

export const WorkSection: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [jumpTo, setJumpTo] = useState<number | null>(null);
  const [preview, setPreview] = useState<{ src: string; x: number; y: number } | null>(null);

  const matches = (item: WorkItem) => filter === 'all' || item.kind === filter;
  const filtered = workItems.filter(matches);
  const visible = showAll ? filtered : filtered.slice(0, PAGE);

  // Scroll to a row picked from the bar once it has rendered
  useEffect(() => {
    if (jumpTo === null) return;
    document.getElementById(`work-${jumpTo}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setJumpTo(null);
  }, [jumpTo]);

  const pickFilter = (next: Filter) => {
    sound.click();
    setFilter(filter === next ? 'all' : next);
    setShowAll(false);
  };

  const jump = (index: number) => {
    sound.click();
    if (!matches(workItems[index])) setFilter('all');
    setShowAll(true);
    setJumpTo(index);
  };

  const hover = (index: number | null) => {
    if (index !== null) sound.tick();
    setHovered(index);
  };

  const readout = hovered !== null ? workItems[hovered] : null;

  return (
    <>
      <Section id="glance" title="At a glance">
        {/* One segment per entry, patterned by kind */}
        <div className="flex h-16 sm:h-20 gap-px sm:gap-[3px] border border-fg p-[3px]" onMouseLeave={() => hover(null)}>
          {workItems.map((item, i) => (
            <button
              key={item.title}
              aria-label={item.title}
              onClick={() => jump(i)}
              onMouseEnter={() => hover(i)}
              onFocus={() => hover(i)}
              className={`flex-1 min-w-0 transition-opacity duration-200 pat-${kindPattern[item.kind]} ${
                matches(item) ? '' : 'opacity-20'
              } ${hovered === i ? 'outline outline-1 outline-offset-2 outline-fg' : ''}`}
            />
          ))}
        </div>

        <div className="mt-3 flex justify-between gap-4 text-sm tabular-nums">
          <p className="truncate">
            <span className="text-muted">&gt; </span>
            {readout ? (
              <>
                {pad(hovered! + 1)} <span className="font-semibold">{readout.title}</span>
                <span className="text-muted"> · {readout.kind}</span>
              </>
            ) : (
              <span className="text-faint">hover a block, click to jump</span>
            )}
          </p>
          <p className="text-faint shrink-0">{workItems.length}</p>
        </div>

        {/* Legend doubles as the filter */}
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {kinds.map((kind) => (
            <button
              key={kind}
              onClick={() => pickFilter(kind)}
              onMouseEnter={sound.tick}
              aria-pressed={filter === kind}
              className={`flex items-center gap-3 transition-opacity ${
                filter === 'all' || filter === kind ? '' : 'opacity-40 hover:opacity-80'
              }`}
            >
              <Swatch pattern={kindPattern[kind]} />
              <span className={filter === kind ? 'underline underline-offset-4' : ''}>{plural[kind]}</span>
              <span className="text-faint text-sm">{workItems.filter((w) => w.kind === kind).length}</span>
            </button>
          ))}
        </div>
      </Section>

      <Section
        id="work"
        title="The work"
        aside={`${visible.length} of ${filtered.length}`}
      >
        <ol>
          {visible.map((item, n) => {
            const index = workItems.indexOf(item);
            return (
              <li
                key={item.title}
                id={`work-${index}`}
                onMouseEnter={() => hover(index)}
                onMouseLeave={() => {
                  hover(null);
                  setPreview(null);
                }}
                onPointerMove={(e) => {
                  if (item.image && e.pointerType === 'mouse') setPreview({ src: item.image, x: e.clientX, y: e.clientY });
                }}
                className="scroll-mt-24 grid sm:grid-cols-[160px_1fr] gap-x-8 gap-y-3 py-8 border-b border-line first:pt-2 rise"
                style={{ animationDelay: `${Math.min(n, PAGE) * 40}ms` }}
              >
                <div className="flex sm:block items-baseline gap-3">
                  <p className="text-xl font-semibold tabular-nums">{pad(index + 1)}</p>
                  <p className="text-sm text-muted">{item.language ?? item.tag}</p>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-3 kicker">
                    <Swatch pattern={kindPattern[item.kind]} />
                    <span className="font-semibold">{item.kind}</span>
                    {item.language && <span className="text-muted">· {item.tag}</span>}
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-bold">
                    <Scramble text={item.title} active={hovered === index} />
                  </h3>

                  {item.description && <p className="mt-3 text-muted leading-relaxed">{item.description}</p>}

                  {item.achievements && (
                    <ul className="mt-4 space-y-1.5">
                      {item.achievements.map((a) => (
                        <li key={a} className="flex gap-3">
                          <span aria-hidden>•</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.link && (
                    <div className="mt-5 grid grid-cols-[72px_1fr] sm:grid-cols-[110px_1fr] gap-4 text-sm">
                      <span className="kicker text-faint pt-0.5">Link</span>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link truncate"
                        onClick={sound.click}
                      >
                        {hostOf(item.link)} ↗
                      </a>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        {!showAll && filtered.length > PAGE && (
          <button
            onClick={() => {
              sound.click();
              setShowAll(true);
            }}
            onMouseEnter={sound.tick}
            className="mt-8 kicker text-muted hover:text-fg transition-colors"
          >
            [ + {filtered.length - PAGE} more ]
          </button>
        )}
      </Section>

      {preview && (
        <img
          src={preview.src}
          alt=""
          aria-hidden
          className="hidden md:block fixed z-50 w-56 aspect-video object-cover pointer-events-none border border-fg grayscale contrast-125"
          style={{ left: preview.x + 24, top: preview.y - 70 }}
        />
      )}
    </>
  );
};
