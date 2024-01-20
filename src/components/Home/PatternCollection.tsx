import patternImage from '../../assert/1x/pattern-image.png'
import Title from '../ui/Title'
export default function PatternCollection() {
  return (
    <div
      className="collection-layout grid-cols-1 md:grid-cols-2 gap-y-2"
    >
      <Title>PATTERN</Title>
      <img src={patternImage} alt="3d image" />
    </div>
  )
}
