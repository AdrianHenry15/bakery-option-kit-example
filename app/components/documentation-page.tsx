"use client"

import { useState } from "react"

const DocumentationPage = () => {
  const [activeSection, setActiveSection] = useState<string>("CakeShape")

  const sections = [
    { id: "cake-shape", title: "CakeShape" },
    { id: "small-treat-size", title: "SmallTreatSize" },
    { id: "small-treat-quantity", title: "SmallTreatQuantity" },
    { id: "bakery-option-type", title: "BakeryOptionType" },
    { id: "small-treat-type", title: "SmallTreatType" },
    { id: "cake-shape-size-type", title: "CakeShapeSizeType" },
    { id: "cake-type", title: "CakeType" },
  ]

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900">Documentation</h2>
          <nav className="mt-6 space-y-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block px-4 py-2 rounded-md text-sm font-medium ${
                  activeSection === section.id
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveSection(section.id)
                  scrollToSection(section.id)
                }}>
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Bakery Types Documentation
          </h1>
        </header>

        {/* Sections */}
        <section id="cake-shape" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">CakeShape</h2>
          <p className="text-gray-600 mt-2">Represents the shape of a cake.</p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              <strong>Type:</strong>
              <code className="ml-2 bg-gray-100 px-2 py-1 rounded">
                {`"round" | "square" | "sheet" | string | string[]`}
              </code>
            </li>
          </ul>
        </section>

        <section id="small-treat-size" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">
            SmallTreatSize
          </h2>
          <p className="text-gray-600 mt-2">
            Specifies the size of small treats like cupcakes or cookies.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              <strong>Type:</strong>
              <code className="ml-2 bg-gray-100 px-2 py-1 rounded">
                {`"mini" | "regular" | "jumbo" | string`}
              </code>
            </li>
          </ul>
        </section>

        <section id="small-treat-quantity" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">
            SmallTreatQuantity
          </h2>
          <p className="text-gray-600 mt-2">
            Enumerates the allowed quantities for small treats.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              <strong>Type:</strong>
              <code className="ml-2 bg-gray-100 px-2 py-1 rounded">
                {`"6" | "12" | "18" | "24" | "30" | "36" | "42" | "48" | "54" |
                "60"`}
              </code>
            </li>
          </ul>
        </section>

        <section id="bakery-option-type" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">
            BakeryOptionType
          </h2>
          <p className="text-gray-600 mt-2">
            Defines the options available for a bakery item.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              <strong>Fields:</strong>
              <ul className="ml-5 space-y-2">
                <li>
                  <strong>flavors:</strong> <code>string | string[]</code> -
                  Primary flavor(s) of the item.
                </li>
                <li>
                  <strong>frostings:</strong> <code>string | string[]</code> -
                  Optional frosting(s) applied.
                </li>
                <li>
                  <strong>toppings:</strong> <code>string | string[]</code> -
                  Optional toppings like sprinkles.
                </li>
                <li>
                  <strong>fillings:</strong> <code>string | string[]</code> -
                  Specific to cakes and cupcakes.
                </li>
                <li>
                  <strong>extras:</strong> <code>string</code> - Additional
                  customizations.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="small-treat-type" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">
            SmallTreatType
          </h2>
          <p className="text-gray-600 mt-2">
            Defines the properties for small bakery treats like cookies or
            cupcakes.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              <strong>Fields:</strong>
              <ul className="ml-5 space-y-2">
                <li>
                  <strong>baking_options:</strong> <code>BakeryOptionType</code>{" "}
                  - Options for flavor, frosting, etc.
                </li>
                <li>
                  <strong>size:</strong> <code>SmallTreatSize</code> - Size of
                  the treat.
                </li>
                <li>
                  <strong>quantity:</strong> <code>SmallTreatQuantity</code> -
                  Quantity of treats.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="cake-shape-size-type" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">
            CakeShapeSizeType
          </h2>
          <p className="text-gray-600 mt-2">
            Defines the shape, size, and serving count of a cake.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              <strong>Fields:</strong>
              <ul className="ml-5 space-y-2">
                <li>
                  <strong>shape:</strong> <code>CakeShape</code> - Shape of the
                  cake.
                </li>
                <li>
                  <strong>size:</strong> <code>string</code> - Size of the cake.
                </li>
                <li>
                  <strong>servings:</strong> <code>string</code> - Number of
                  servings.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="cake-type" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">CakeType</h2>
          <p className="text-gray-600 mt-2">
            Defines the properties for cakes, including baking options, size,
            and quantity.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              <strong>Fields:</strong>
              <ul className="ml-5 space-y-2">
                <li>
                  <strong>baking_options:</strong> <code>BakeryOptionType</code>{" "}
                  - Options for flavor, frosting, etc.
                </li>
                <li>
                  <strong>cake_size:</strong> <code>CakeShapeSizeType</code> -
                  Shape and size details.
                </li>
                <li>
                  <strong>quantity:</strong> <code>number</code> - Optional
                  quantity of cakes.
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default DocumentationPage
