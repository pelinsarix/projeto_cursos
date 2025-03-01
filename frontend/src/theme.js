export const lightTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#7928ca",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
    background: "#ffffff",
    backgroundAlt: "#f9fafb",
    backgroundHover: "#f3f4f6",
    text: "#111827",
    textLight: "#6b7280",
    border: "#e5e7eb",
    borderHover: "#d1d5db",
    sidebarHover: "#f3f4f6",
    activeItem: "rgba(0, 112, 243, 0.1)",
    tooltipBg: "#111827",
    tooltipText: "#ffffff",
    cardBg: "#ffffff",
  },
  shadows: {
    small: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    large: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  breakpoints: {
    mobile: "640px",
    tablet: "768px",
    desktop: "1024px",
  },
};

export const darkTheme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
    background: "#18181b",
    backgroundAlt: "#27272a",
    backgroundHover: "#3f3f46",
    text: "#f9fafb",
    textLight: "#a1a1aa",
    border: "#3f3f46",
    borderHover: "#52525b",
    sidebarHover: "#27272a",
    activeItem: "rgba(59, 130, 246, 0.15)",
    tooltipBg: "#f3f4f6",
    tooltipText: "#111827",
    cardBg: "#27272a",
  },
  shadows: {
    small: "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",
    medium: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
    large: "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
  },
  breakpoints: {
    mobile: "640px",
    tablet: "768px",
    desktop: "1024px",
  },
};

// Definir o tema padrão
export const theme = lightTheme;
