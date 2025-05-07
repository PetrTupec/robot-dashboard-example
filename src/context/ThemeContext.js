import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
  const [viewMode, setViewMode] = useState("new");

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  const toggleView = () => {
    setViewMode((prev) => (prev === "new" ? "old" : "new"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, viewMode, toggleView }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
