import React from 'react';
import { getBrandColor, getTextColor } from '../../theme';

interface FilterButtonProps {
  label: string;
  active: boolean;
  isDark?: boolean;
  onClick: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  active,
  isDark = true,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-sm font-light transition-opacity hover:opacity-70"
      style={
        active
          ? {
              color: getBrandColor(isDark),
              textDecoration: 'underline',
            }
          : {
              color: getTextColor(isDark, 'secondary'),
            }
      }
    >
      {label}
    </button>
  );
};

interface FilterGroupProps {
  filters: string[];
  activeFilter: string;
  isDark?: boolean;
  onFilterChange: (filter: string) => void;
  formatLabel?: (filter: string) => string;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  filters,
  activeFilter,
  isDark = true,
  onFilterChange,
  formatLabel = (f) => f.charAt(0).toUpperCase() + f.slice(1),
}) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          label={formatLabel(filter)}
          active={activeFilter === filter}
          isDark={isDark}
          onClick={() => onFilterChange(filter)}
        />
      ))}
    </div>
  );
};
