import patternImage from '../../assert/1x/pattern-image.png'
export default function PatternCollection() {
  return (
    <section
      className="grid grid-cols-2 items-start py-20 border-b border-gray-400"
    >
      <h3 className="text-title">PATTERN</h3>
      <img src={patternImage} alt="3d image" />
    </section>
  )
}
