import React from "react"

interface ICustomizerSectionProps {
  title: string
  items: string[]
}

const CustomizerSection = (props: ICustomizerSectionProps) => {
  const { title, items } = props
  return (
    <section className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Select Your {title}
      </h2>
      <ul className="grid grid-cols-2 gap-6">
        {items.map((item, index) => (
          <li
            key={index}
            className="border-2 py-4 px-6 rounded-xl text-center text-black cursor-pointer transition transform hover:scale-105 hover:bg-indigo-100 hover:text-indigo-600">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CustomizerSection
