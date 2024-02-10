import Zombie from '../zombie';

test ('check Zombie is created', () => {
  const hero = new Zombie('Name');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});
