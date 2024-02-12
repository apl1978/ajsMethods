import Daemon from '../daemon';

test ('check Daemon is created', () => {
  const hero = new Daemon('Name', 'Daemon');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

test('check Daemon type', () => {
    expect(() => {
    const hero = new Daemon('nn', 'Deamon');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Daemon min length name', () => {
  expect(() => {
    const hero = new Daemon('n', 'Daemon');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Daemon max length name', () => {
  expect(() => {
    const hero = new Daemon('nnnnnnnnnnn', 'Daemon');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Daemon level up', () => {
  const hero = new Daemon('nn', 'Daemon');
  hero.levelUp();
  expect(hero).toEqual({
    name: 'nn',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48
  });
});

test('check Daemon level up dead hero', () => {
    expect(() => {
    const hero = new Daemon('nn', 'Daemon');
    hero.health = 0;
    hero.levelUp();
    }).toThrowError('Нельзя повысить левел умершего');
});

test('check Daemon damage', () => {
  const hero = new Daemon('nn', 'Daemon');
  hero.damage(30);
  expect(hero.health).toBe(82);
});

test('check Daemon damage dead hero', () => {
    expect(() => {
    const hero = new Daemon('nn', 'Daemon');
    hero.health = -1;
    hero.damage(30);
    }).toThrowError('Нельзя убить умершего');
});