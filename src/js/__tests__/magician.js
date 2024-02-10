import Magician from '../magician';

test ('check Magician is created', () => {
  const hero = new Magician('Name');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});
