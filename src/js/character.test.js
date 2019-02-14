import Character from './character.js';

describe('TEST: Character', () => {
  test('all conditions are ideal', () => {
    const expected = {
      name: 'Васька',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defense: 25,
    };

    expect(new Character('Васька', 'Bowman')).toEqual(expected);
  });

  // ERRORS
  test('not the right type of character', () => {
    const character = () => new Character('Мазай', 'Дед мазай');
    expect(character).toThrow();
  });

  test('name type nuber', () => {
    const character = () => new Character(3234, 'Bowman');
    expect(character).toThrow(Error);
  });
});
