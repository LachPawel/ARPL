/**
 * ARPL Portfolio - Design System & Style Guide
 * 
 * This file contains all design tokens used throughout the application.
 * It ensures consistency in colors, typography, spacing, and other design elements.
 */

// ============================================
// COLORS
// ============================================

export const colors = {
  // Brand Colors
  brand: {
    primary: '#BADA55', // Signature green
    primaryHover: '#a8c84a',
    primaryDark: '#96b63f',
  },

  // Background Colors
  background: {
    dark: '#1e1e1e',
    darkSecondary: '#1f1f1f',
    light: '#ffffff',
    lightSecondary: '#f5f5f5',
  },

  // Text Colors
  text: {
    dark: {
      primary: '#ffffff',
      secondary: '#888888',
      tertiary: '#666666',
      muted: '#555555',
    },
    light: {
      primary: '#000000',
      secondary: '#666666',
      tertiary: '#707070',
      muted: '#999999',
    },
  },

  // Border Colors
  border: {
    dark: '#333333',
    light: '#e0e0e0',
  },

  // State Colors
  state: {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
  },

  // Category/Type Colors (for tags and badges)
  category: {
    ai: '#BADA55',
    robotics: '#7986cb',
    blockchain: '#ba68c8',
    backend: '#64b5f6',
    mobile: '#81c784',
    featured: '#BADA55',
  },
} as const;

// ============================================
// TYPOGRAPHY
// ============================================

export const typography = {
  // Font Families
  fontFamily: {
    base: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  },

  // Font Sizes
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },

  // Font Weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line Heights
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// ============================================
// SPACING
// ============================================

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  '5xl': '8rem',   // 128px
} as const;

// ============================================
// BREAKPOINTS
// ============================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================
// TRANSITIONS
// ============================================

export const transitions = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  timing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const;

// ============================================
// SHADOWS
// ============================================

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

// ============================================
// BORDER RADIUS
// ============================================

export const borderRadius = {
  none: '0',
  sm: '0.125rem',  // 2px
  base: '0.25rem', // 4px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  full: '9999px',
} as const;

// ============================================
// Z-INDEX
// ============================================

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const;

// ============================================
// ANIMATION VARIANTS (for Framer Motion)
// ============================================

export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
} as const;

// ============================================
// LAYOUT
// ============================================

export const layout = {
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    content: '1536px',
  },
  containerPadding: {
    mobile: '1rem',
    tablet: '1.5rem',
    desktop: '2rem',
  },
} as const;

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get theme-specific value based on current theme mode
 */
export const getThemeValue = <T>(isDark: boolean, darkValue: T, lightValue: T): T => {
  return isDark ? darkValue : lightValue;
};

/**
 * Get background color based on theme and variant
 */
export const getBackground = (isDark: boolean, variant: 'primary' | 'secondary' = 'primary') => {
  if (variant === 'secondary') {
    return isDark ? colors.background.darkSecondary : colors.background.lightSecondary;
  }
  return isDark ? colors.background.dark : colors.background.light;
};

/**
 * Get text color based on theme and variant
 */
export const getTextColor = (
  isDark: boolean,
  variant: 'primary' | 'secondary' | 'tertiary' | 'muted' = 'primary'
) => {
  return isDark ? colors.text.dark[variant] : colors.text.light[variant];
};

/**
 * Get border color based on theme
 */
export const getBorderColor = (isDark: boolean) => {
  return isDark ? colors.border.dark : colors.border.light;
};

/**
 * Generate hover styles for interactive elements
 */
export const getHoverStyles = (isDark: boolean) => ({
  color: isDark ? colors.text.dark.primary : colors.text.light.primary,
  transition: `all ${transitions.duration.base} ${transitions.timing.easeInOut}`,
});

// ============================================
// EXPORT DEFAULT THEME
// ============================================

export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  transitions,
  shadows,
  borderRadius,
  zIndex,
  animations,
  layout,
} as const;

export default theme;
