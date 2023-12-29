import patternImage from '../../assert/1x/pattern-image.png'
import Title from '../../ui/Title'
export default function PatternCollection() {
  return (
    <div
      className="grid grid-cols-2 items-start py-20 border-b border-gray-400"
    >
      <Title>PATTERN</Title>
      <img src={patternImage} alt="3d image" />
    </div>
  )
}
