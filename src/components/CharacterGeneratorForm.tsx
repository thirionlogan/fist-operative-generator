import React, { useState } from 'react';
import Character from '../characterGenerator/character';
import { createCharacter } from '../characterGenerator/characterGenerator';

function CharacterGeneratorForm() {
  const [
    {
      role,
      traits,
      standardIssueItem,
      forceful,
      tactical,
      creative,
      reflexive,
      armor,
      maxHP,
    },
    setGeneratedCharacter,
  ] = useState<Character>({
    role: { index: 0, description: '' },
    traits: [],
    standardIssueItem: '',
    maxHP: 6,
    forceful: 0,
    creative: 0,
    tactical: 0,
    reflexive: 0,
    armor: 0,
  });

  const handleGenerateCharacter = () => {
    setGeneratedCharacter(createCharacter());
  };

  return (
    <div>
      <button onClick={handleGenerateCharacter}>
        Generate new FIST operative
      </button>
      <h2>Role:</h2>
      <p>
        {role.index || ''}
        {role.index ? '. ' : ''}
        {role.description}
      </p>
      <h2>Traits:</h2>
      {traits[0]?.index || ''}
      {traits[0]?.index ? '. ' : ''}
      {traits[0]?.description || ''}
      <br />
      <br />
      {traits[1]?.index || ''}
      {traits[1]?.index ? '. ' : ''}
      {traits[1]?.description || ''}
      <h2>Inventory:</h2>
      {standardIssueItem}
      <br />
      {traits[0]?.equipment || ''}
      <br />
      {traits[1]?.equipment || ''}
      <hr />
      <h2>FORCEFUL: {forceful}</h2>
      <h2>TACTICAL: {tactical}</h2>
      <h2>CREATIVE: {creative}</h2>
      <h2>REFLEXIVE: {reflexive}</h2>
      <h2>ARMOR: {armor}</h2>
      <p>Note: not including armor from equipment or situational modifiers</p>
      <h2>War Dice: 0</h2>
      <h2>Max HP: {maxHP}</h2>
    </div>
  );
}

export default CharacterGeneratorForm;
