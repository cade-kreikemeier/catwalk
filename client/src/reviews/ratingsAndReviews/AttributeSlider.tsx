import React from 'react';

interface Props {
  char: string,
  value: string
}

export default function AttributeSlider({ char, value }: Props): JSX.Element {
  return (
    <div key={char}>
      <label htmlFor={char}>{char}</label>
      <input readOnly
        type="range"
        min="0"
        max="100"
        step="1"
        disabled={true}
        value={parseInt(value) * 20}>
      </input>
    </div>
  );
}