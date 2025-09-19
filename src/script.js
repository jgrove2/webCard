// Theme management with smart defaults
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById("theme-toggle");
    this.body = document.body;
    this.themeIcon = document.querySelector(".theme-icon");
    this.init();
  }

  init() {
    // Set initial theme based on user preference or saved theme
    const initialTheme = this.getInitialTheme();
    this.setTheme(initialTheme);
    this.updateIcon(initialTheme);

    // Add click listener for theme toggle
    this.themeToggle.addEventListener("click", () => this.toggleTheme());

    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem("theme")) {
        this.setTheme(e.matches ? "dark" : "light");
        this.updateIcon(e.matches ? "dark" : "light");
      }
    });
  }

  getInitialTheme() {
    // Check for saved theme first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    // Fall back to system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    // Default to light
    return "light";
  }

  setTheme(theme) {
    this.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  toggleTheme() {
    const currentTheme = this.body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    this.setTheme(newTheme);
    this.updateIcon(newTheme);
  }

  updateIcon(theme) {
    if (theme === "light") {
      this.themeIcon.className = "theme-icon fa7-solid--sun";
    } else {
      this.themeIcon.className = "theme-icon f7--moon";
    }
  }
}

// Initialize theme manager when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new ThemeManager();
});
