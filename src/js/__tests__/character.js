import Character from '../character';

test.each([
  ['n', 'Bowman'],
  ['n', 'Swordsman'],
  ['n', 'Magician'],
  ['n', 'Daemon'],
  ['n', 'Undead'],
  ['n', 'Zombie'],
])(
  ('check Character min length name for %s'),
   (name, type) => {
    expect(() => {
    const hero = new Character(name, type);
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');

});

test.each([
  ['nnnnnnnnnnn', 'Bowman'],
  ['nnnnnnnnnnn', 'Swordsman'],
  ['nnnnnnnnnnn', 'Magician'],
  ['nnnnnnnnnnn', 'Daemon'],
  ['nnnnnnnnnnn', 'Undead'],
  ['nnnnnnnnnnn', 'Zombie'],
])(
  ('check Character max length name for %s'),
   (name, type) => {
    expect(() => {
    const hero = new Character(name, type);
    }).toThrowError('Длина имени должна быть от 2 до 10 символов');

});

