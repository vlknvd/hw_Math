import Character from './Character';

export default class Magician extends Character {
  constructor(attack, distance) {
    super(attack, distance);
    this.type = 'Magician';
  }
}
