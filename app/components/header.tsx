import React from "react"

interface IHeaderProps {
  selectedCustomizer: "cake" | "cupcake" | "cookie" | "documentation"
  setSelectedCustomizer: (
    customizer: "cake" | "cupcake" | "cookie" | "documentation"
  ) => void
}

const Header: React.FC<IHeaderProps> = ({
  selectedCustomizer,
  setSelectedCustomizer,
}) => {
  return (
    <header className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-8 px-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-0">
        Customizer
      </h1>
      <nav className="flex flex-wrap justify-center sm:justify-end gap-4">
        <button
          onClick={() => setSelectedCustomizer("cake")}
          className={`px-4 sm:px-6 py-2 text-base sm:text-lg font-medium rounded-xl ${
            selectedCustomizer === "cake"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700"
          } transition-colors duration-300`}>
          Cake
        </button>
        <button
          onClick={() => setSelectedCustomizer("cupcake")}
          className={`px-4 sm:px-6 py-2 text-base sm:text-lg font-medium rounded-xl ${
            selectedCustomizer === "cupcake"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700"
          } transition-colors duration-300`}>
          Cupcake
        </button>
        <button
          onClick={() => setSelectedCustomizer("cookie")}
          className={`px-4 sm:px-6 py-2 text-base sm:text-lg font-medium rounded-xl ${
            selectedCustomizer === "cookie"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700"
          } transition-colors duration-300`}>
          Cookie
        </button>
        <button
          onClick={() => setSelectedCustomizer("documentation")}
          className={`px-4 sm:px-6 py-2 text-base sm:text-lg font-medium rounded-xl ${
            selectedCustomizer === "documentation"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700"
          } transition-colors duration-300`}>
          Documentation
        </button>
      </nav>
    </header>
  )
}

export default Header
