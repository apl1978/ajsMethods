import Zombie from '../zombie';

test ('check Zombie is created', () => {
  const hero = new Zombie('Name', 'Zombie');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

test('check Zombie type', () => {
    expect(() => {
    const hero = new Zombie('nn', 'Zoombie');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Zombie min length name', () => {
  expect(() => {
    const hero = new Zombie('n', 'Zombie');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Zombie max length name', () => {
  expect(() => {
    const hero = new Zombie('nnnnnnnnnnn', 'Zombie');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Zombie level up', () => {
  const hero = new Zombie('nn', 'Zombie');
  hero.levelUp();
  expect(hero).toEqual({
    name: 'nn',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12
  });
});

test('check Zombie level up dead hero', () => {
    expect(() => {
    const hero = new Zombie('nn', 'Zombie');
    hero.health = 0;
    hero.levelUp();
    }).toThrowError('Нельзя повысить левел умершего');
});

test('check Zombie damage', () => {
  const hero = new Zombie('nn', 'Zombie');
  hero.damage(30);
  expect(hero.health).toBe(73);
});

test('check Zombie damage dead hero', () => {
    expect(() => {
    const hero = new Zombie('nn', 'Zombie');
    hero.health = -1;
    hero.damage(30);
    }).toThrowError('Нельзя убить умершего');
});