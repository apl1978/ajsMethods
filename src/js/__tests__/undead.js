import Undead from '../undead';

test ('check Undead is created', () => {
  const hero = new Undead('Name', 'Undead');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('check Undead type', () => {
    expect(() => {
    const hero = new Undead('nn', 'Undeed');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Undead min length name', () => {
  expect(() => {
    const hero = new Undead('n', 'Undead');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Undead max length name', () => {
  expect(() => {
    const hero = new Undead('nnnnnnnnnnn', 'Undead');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Undead level up', () => {
  const hero = new Undead('nn', 'Undead');
  hero.levelUp();
  expect(hero).toEqual({
    name: 'nn',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30
  });
});

test('check Undead level up dead hero', () => {
    expect(() => {
    const hero = new Undead('nn', 'Undead');
    hero.health = 0;
    hero.levelUp();
    }).toThrowError('Нельзя повысить левел умершего');
});

test('check Undead damage', () => {
  const hero = new Undead('nn', 'Undead');
  hero.damage(30);
  expect(hero.health).toBe(77.5);
});

test('check Undead damage dead hero', () => {
    expect(() => {
    const hero = new Undead('nn', 'Undead');
    hero.health = -1;
    hero.damage(30);
    }).toThrowError('Нельзя убить умершего');
});