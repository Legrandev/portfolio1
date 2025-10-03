import { StarryBackground } from "./starry-background"

return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {theme === "dark" && <StarryBackground />}
    {theme === "light" && <div className="fixed inset-0 z-0 bg-white" />}
    <div className="relative z-10">{children}</div>
  </ThemeContext.Provider>
)
