import Daemon from '../daemon';

test ('check Daemon is created', () => {
  const hero = new Daemon('Name');
  expect(hero).toEqual({
    name: 'Name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});
