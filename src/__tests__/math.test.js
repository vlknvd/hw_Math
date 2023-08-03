import Daemon from '../Daemon';
import Magician from '../Magician';

test('stoned = false', () => {
  const mage = new Magician(10, 2);
  expect(mage.attack).toBe(9);
});

test('stoned = true', () => {
  const daem = new Daemon(null, 2);
  daem.attack = 100;
  daem.stoned = true;
  expect(daem.attack).toBe(85);
});
