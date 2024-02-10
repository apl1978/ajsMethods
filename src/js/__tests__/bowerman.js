import Bowerman from '../bowerman';

test ('check Bowerman is created', () => {
  const hero = new Bowerman('Name');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});
