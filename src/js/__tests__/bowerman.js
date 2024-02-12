import Bowerman from '../bowerman';

test ('check Bowerman is created', () => {
  const hero = new Bowerman('Name', 'Bowman');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('check Bowerman type', () => {
    expect(() => {
    const hero = new Bowerman('nn', 'bowmen');
    }).toThrowError('Некорректный тип персонажа');
});

test('check Bowerman min length name', () => {
  expect(() => {
    const hero = new Bowerman('n', 'Bowman');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Bowerman max length name', () => {
  expect(() => {
    const hero = new Bowerman('nnnnnnnnnnn', 'Bowman');
  }).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('check Bowerman level up', () => {
  const hero = new Bowerman('nn', 'Bowman');
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

test('check Bowerman level up dead hero', () => {
    expect(() => {
    const hero = new Bowerman('nn', 'Bowman');
    hero.health = 0;
    hero.levelUp();
    }).toThrowError('Нельзя повысить левел умершего');
});

test('check Bowerman damage', () => {
  const hero = new Bowerman('nn', 'Bowman');
  hero.damage(30);
  expect(hero.health).toBe(77.5);
});

test('check Bowerman damage dead hero', () => {
    expect(() => {
    const hero = new Bowerman('nn', 'Bowman');
    hero.health = -1;
    hero.damage(30);
    }).toThrowError('Нельзя убить умершего');
});