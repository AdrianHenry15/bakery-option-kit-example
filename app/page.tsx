"use client"

import React, { useState } from "react"
import Header from "./components/header"
import CakeCustomizer from "./components/cake-customizer"
import CupcakeCustomizer from "./components/cupcake-customizer"
import CookieCustomizer from "./components/cookie-customizer"

function Home() {
  const [selectedCustomizer, setSelectedCustomizer] = useState<
    "cake" | "cupcake" | "cookie"
  >("cake") // Default to cake customizer

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-300 flex flex-col items-center p-8 space-y-12">
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
      </div>
    </div>
  )
}

export default Home
