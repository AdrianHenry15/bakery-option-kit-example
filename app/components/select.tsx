// components/Select.tsx
interface ISelectProps {
  label: string
  options: string[]
  value: string | null
  onChange: (value: string) => void
}

const Select = ({ label, options, value, onChange }: ISelectProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-medium mb-2">{label}</h3>
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
