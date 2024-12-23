export const handleSelect = (
  type: string,
  value: string,
  setters: Record<string, React.Dispatch<React.SetStateAction<string | null>>>
) => {
  switch (type) {
    case "flavor":
      setters.setFlavor(value)
      break
    case "frosting":
      setters.setFrosting(value)
      break
    case "topping":
      setters.setTopping(value)
      break
    case "filling":
      setters.setFilling(value)
      break
    default:
      break
  }
}
