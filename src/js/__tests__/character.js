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

test('check Character type', () => {
    expect(() => {
    const hero = new Character('nn', 'bowmen');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Character level up', () => {
  const hero = new Character('nn', 'Bowman');
  hero.levelUp();
  expect(hero).toEqual({
    name: 'nn',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30
  });
});

test('check Character level up dead hero', () => {
    expect(() => {
    const hero = new Character('nn', 'Bowman');
    hero.health = 0;
    hero.levelUp();
    }).toThrowError('Нельзя повысить левел умершего');
});

test('check Character damage', () => {
  const hero = new Character('nn', 'Bowman');
  hero.damage(30);
  expect(hero.health).toBe(77.5);
});

test('check Character damage dead hero', () => {
    expect(() => {
    const hero = new Character('nn', 'Bowman');
    hero.health = -1;
    hero.damage(30);
    }).toThrowError('Нельзя убить умершего');
});
