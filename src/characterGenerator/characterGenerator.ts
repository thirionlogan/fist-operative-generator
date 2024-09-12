import roles from './roles';
import traits from './traits';
import standardIssueItems from './standardIssueItems';
import Character from './character';

export function createCharacter(): Character {
  const trait1 = traits[Math.floor(Math.random() * traits.length)];
  const trait2 = traits[Math.floor(Math.random() * traits.length)];
  const role = roles[Math.floor(Math.random() * roles.length)];
  const standardIssueItem =
    standardIssueItems[Math.floor(Math.random() * standardIssueItems.length)];

  trait1.modifiers =
    trait1.modifiers !== undefined ? trait1.modifiers : { key: '', value: 0 };
  trait2.modifiers =
    trait2.modifiers !== undefined ? trait2.modifiers : { key: '', value: 0 };

  const maxHP =
    6 +
    (!!trait1.modifiers.key && trait1.modifiers.key == 'maxHP'
      ? trait1?.modifiers?.value ?? 0
      : 0) +
    (!!trait2.modifiers.key && trait2.modifiers.key == 'maxHP'
      ? trait2?.modifiers?.value ?? 0
      : 0);

  const forceful =
    0 +
    (!!trait1.modifiers.key && trait1.modifiers.key == 'forceful'
      ? trait1?.modifiers?.value ?? 0
      : 0) +
    (!!trait2.modifiers.key && trait2.modifiers.key == 'forceful'
      ? trait2?.modifiers?.value ?? 0
      : 0);
  const creative =
    0 +
    (!!trait1.modifiers.key && trait1.modifiers.key == 'creative'
      ? trait1?.modifiers?.value ?? 0
      : 0) +
    (!!trait2.modifiers.key && trait2.modifiers.key == 'creative'
      ? trait2?.modifiers?.value ?? 0
      : 0);
  const tactical =
    0 +
    (!!trait1.modifiers.key && trait1.modifiers.key == 'tactical'
      ? trait1?.modifiers?.value ?? 0
      : 0) +
    (!!trait2.modifiers.key && trait2.modifiers.key == 'tactical'
      ? trait2?.modifiers?.value ?? 0
      : 0);
  const reflexive =
    0 +
    (!!trait1.modifiers.key && trait1.modifiers.key == 'reflexive'
      ? trait1?.modifiers?.value ?? 0
      : 0) +
    (!!trait2.modifiers.key && trait2.modifiers.key == 'reflexive'
      ? trait2?.modifiers?.value ?? 0
      : 0);
  const armor =
    0 +
    (!!trait1.modifiers.key && trait1.modifiers.key == 'armor'
      ? trait1?.modifiers?.value ?? 0
      : 0) +
    (!!trait2.modifiers.key && trait2.modifiers.key == 'armor'
      ? trait2?.modifiers?.value ?? 0
      : 0);

  return {
    role,
    traits: [trait1, trait2],
    standardIssueItem,
    maxHP,
    forceful,
    creative,
    tactical,
    reflexive,
    armor,
  };
}
