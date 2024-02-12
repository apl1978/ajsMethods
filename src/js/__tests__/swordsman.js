import Swordsman from '../swordsman';

test ('check Swordsman is created', () => {
  const hero = new Swordsman('Name', 'Swordsman');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

test('check Swordsman type', () => {
    expect(() => {
    const hero = new Swordsman('nn', 'Swordsmen');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Swordsman min length name', () => {
  expect(() => {
    const hero = new Swordsman('n', 'Swordsman');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Swordsman max length name', () => {
  expect(() => {
    const hero = new Swordsman('nnnnnnnnnnn', 'Swordsman');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Swordsman level up', () => {
  const hero = new Swordsman('nn', 'Swordsman');
  hero.levelUp();
  expect(hero).toEqual({
    name: 'nn',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12
  });
});

test('check Swordsman level up dead hero', () => {
    expect(() => {
    const hero = new Swordsman('nn', 'Swordsman');
    hero.health = 0;
    hero.levelUp();
    }).toThrowError('Нельзя повысить левел умершего');
});

test('check Swordsman damage', () => {
  const hero = new Swordsman('nn', 'Swordsman');
  hero.damage(30);
  expect(hero.health).toBe(73);
});

test('check Swordsman damage dead hero', () => {
    expect(() => {
    const hero = new Swordsman('nn', 'Swordsman');
    hero.health = -1;
    hero.damage(30);
    }).toThrowError('Нельзя убить умершего');
});