import React from "react"
import {
  CakeShapeSizes,
  CAKE_FLAVORS,
  CAKE_FROSTINGS,
  CAKE_TOPPINGS,
  CAKE_FILLINGS,
} from "baking-options-kit"

function CakeCustomizer() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-300 flex flex-col justify-start items-center p-8 space-y-12">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        Bakery Options Cake Kit
      </h1>

      <section className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Choose Your Cake Shape and Size
        </h2>
        <ul className="space-y-6">
          {CakeShapeSizes.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b-2 py-4">
              <span className="text-lg font-medium text-gray-800">{`${item.shape} - ${item.size}`}</span>
              <span className="text-sm text-gray-500">
                Servings: {item.servings}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Select Your Cake Flavor
        </h2>
        <ul className="grid grid-cols-2 gap-6">
          {CAKE_FLAVORS.map((flavor, index) => (
            <li
              key={index}
              className="border-2 py-4 px-6 rounded-xl text-center cursor-pointer transition transform hover:scale-105 hover:bg-indigo-100 hover:text-indigo-600">
              {flavor}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Choose Your Frosting
        </h2>
        <ul className="grid grid-cols-2 gap-6">
          {CAKE_FROSTINGS.map((frosting, index) => (
            <li
              key={index}
              className="border-2 py-4 px-6 rounded-xl text-center cursor-pointer transition transform hover:scale-105 hover:bg-indigo-100 hover:text-indigo-600">
              {frosting}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Pick Your Toppings
        </h2>
        <ul className="grid grid-cols-2 gap-6">
          {CAKE_TOPPINGS.map((topping, index) => (
            <li
              key={index}
              className="border-2 py-4 px-6 rounded-xl text-center cursor-pointer transition transform hover:scale-105 hover:bg-indigo-100 hover:text-indigo-600">
              {topping}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Choose Your Filling
        </h2>
        <ul className="grid grid-cols-2 gap-6">
          {CAKE_FILLINGS.map((filling, index) => (
            <li
              key={index}
              className="border-2 py-4 px-6 rounded-xl text-center cursor-pointer transition transform hover:scale-105 hover:bg-indigo-100 hover:text-indigo-600">
              {filling}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default CakeCustomizer
