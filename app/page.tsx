"use client"

import React, { useState } from "react"
import Header from "./components/header"
import CakeCustomizer from "./components/cake-customizer"
import CupcakeCustomizer from "./components/cupcake-customizer"
import CookieCustomizer from "./components/cookie-customizer"
import DocumentationPage from "./components/documentation-page"

function Home() {
  const [selectedCustomizer, setSelectedCustomizer] = useState<
    "cake" | "cupcake" | "cookie" | "documentation"
  >("cake") // Default to cake customizer

  return (
    <>
      {/* Customizer Header */}
      <Header
        selectedCustomizer={selectedCustomizer}
        setSelectedCustomizer={setSelectedCustomizer}
      />

      <div className="w-full max-w-4xl">
        {/* Conditional rendering of customizers */}
        {selectedCustomizer === "cake" && <CakeCustomizer />}
        {selectedCustomizer === "cupcake" && <CupcakeCustomizer />}
        {selectedCustomizer === "cookie" && <CookieCustomizer />}
        {selectedCustomizer === "documentation" && <DocumentationPage />}
      </div>
    </>
  )
}

export default Home
