import React from 'react';
import { sound } from '../../lib/sound';

interface FilterGroupProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  formatLabel?: (filter: string) => string;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  filters,
  activeFilter,
  onFilterChange,
  formatLabel = (f) => f,
}) => (
  <div className="flex flex-wrap gap-x-5 gap-y-2 kicker">
    {filters.map((filter) => {
      const active = activeFilter === filter;
      return (
        <button
          key={filter}
          onClick={() => {
            sound.click();
            onFilterChange(filter);
          }}
          onMouseEnter={sound.tick}
          aria-pressed={active}
          className={active ? 'text-fg' : 'text-muted hover:text-fg transition-colors'}
        >
          {active ? `[${formatLabel(filter)}]` : formatLabel(filter)}
        </button>
      );
    })}
  </div>
);
