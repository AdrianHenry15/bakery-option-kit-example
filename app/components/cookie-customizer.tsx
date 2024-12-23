"use client"

import { useState } from "react"

import {
  COOKIE_FLAVORS,
  COOKIE_FROSTINGS,
  COOKIE_TOPPINGS,
} from "baking-options-kit"
import Select from "./select"
import { handleSelect } from "../lib/select-handler"

// Cupcake Customizer component
const CookieCustomizer = () => {
  const [flavor, setFlavor] = useState<string | null>(null)
  const [frosting, setFrosting] = useState<string | null>(null)
  const [topping, setTopping] = useState<string | null>(null)
  const [filling, setFilling] = useState<string | null>(null)

  const setters = { setFlavor, setFrosting, setTopping, setFilling }

  return (
    <div className="max-w-4xl mx-auto p-6 text-black bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Customize Your Cookie
      </h2>

      <div className="space-y-6">
        <Select
          label="Flavor"
          options={COOKIE_FLAVORS}
          value={flavor}
          onChange={(value) => handleSelect("flavor", value, setters)}
        />
        <Select
          label="Frosting"
          options={COOKIE_FROSTINGS}
          value={frosting}
          onChange={(value) => handleSelect("frosting", value, setters)}
        />
        <Select
          label="Topping"
          options={COOKIE_TOPPINGS}
          value={topping}
          onChange={(value) => handleSelect("topping", value, setters)}
        />
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Your Custom Cookie:</h3>
        <div className="space-y-2">
          <p>
            <strong>Flavor:</strong> {flavor || "None selected"}
          </p>
          <p>
            <strong>Frosting:</strong> {frosting || "None selected"}
          </p>
          <p>
            <strong>Topping:</strong> {topping || "None selected"}
          </p>
          <p>
            <strong>Filling:</strong> {filling || "None selected"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CookieCustomizer
