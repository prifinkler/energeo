import SourceBreakdown from './SourceBreakdown';

export default function ElementalCard({ element, data, timePeriod, colorMapping }) {
  const elementData = data.elements[element];
  const elementColor = colorMapping[element];

  return (
    <SourceBreakdown
      sources={elementData.sources}
      timePeriod={timePeriod}
      elementColor={elementColor}
      element={element}
    />
  );
}
