import Swordsman from '../swordsman';

test ('check Swordsman is created', () => {
  const hero = new Swordsman('Name');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});
