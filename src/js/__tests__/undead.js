import Undead from '../undead';

test ('check Undead is created', () => {
  const hero = new Undead('Name');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});
