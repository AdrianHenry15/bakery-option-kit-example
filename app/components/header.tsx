import React from "react"

interface IHeaderProps {
  selectedCustomizer: "cake" | "cupcake" | "cookie"
  setSelectedCustomizer: (customizer: "cake" | "cupcake" | "cookie") => void
}

const Header: React.FC<IHeaderProps> = ({
  selectedCustomizer,
  setSelectedCustomizer,
}) => {
  return (
    <header className="w-full max-w-4xl flex justify-between items-center mb-8">
      <h1 className="text-4xl font-extrabold text-gray-800">Customizer</h1>
      <nav>
        <button
          onClick={() => setSelectedCustomizer("cake")}
          className={`px-6 py-2 text-lg font-medium rounded-xl mr-4 ${
            selectedCustomizer === "cake"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700"
          } transition-colors duration-300`}>
          Cake
        </button>
        <button
          onClick={() => setSelectedCustomizer("cupcake")}
          className={`px-6 py-2 text-lg font-medium rounded-xl mr-4 ${
            selectedCustomizer === "cupcake"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700"
          } transition-colors duration-300`}>
          Cupcake
        </button>
        <button
          onClick={() => setSelectedCustomizer("cookie")}
          className={`px-6 py-2 text-lg font-medium rounded-xl ${
            selectedCustomizer === "cookie"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700"
          } transition-colors duration-300`}>
          Cookie
        </button>
      </nav>
    </header>
  )
}

export default Header
