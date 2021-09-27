import React from 'react';

interface Props {
  char: string,
  value: string
}

interface characteristics {
  [key: string]: string[]
}

const characteristics: characteristics = {
  Size: ['A size too small', 'Perfect', 'A size too wide'],
  Width: ['Too narrow', 'Perfect', 'Too wide'],
  Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
  Quality: ['Poor', 'What I expected', 'Perfect'],
  Length: ['Runs Short', 'Perfect', 'Runs Long'],
  Fit: ['Run Tight', 'Perfect', 'Runs Loose']
};

const charDescriptions = (char: string) => {
  if (characteristics[char].length) {
    return <div>
      {characteristics[char].map((description: string) => {
        return <span key={description}>{description}</span>;
      })}
    </div>;
  } else {
    return null;
  }
};

export default function AttributeSlider({ char, value }: Props): JSX.Element {
  return (
    <div className="attributeSlider" key={char}>
      <label htmlFor={char}>{char}</label>
      <input readOnly
        type="range"
        min="0"
        max="100"
        step="1"
        disabled={true}
        value={parseInt(value) * 20}>
      </input>
      {charDescriptions(char)}
    </div>
  );
}