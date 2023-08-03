import Character from './Character';

export default class Daemon extends Character {
  constructor(attack, distance) {
    super(attack, distance);
    this.type = 'Daemon';
  }
}
