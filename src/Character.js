export default class Character {
  constructor(attack, distance) {
    this.attack = attack;
    this.stoned = false;
    this.distance = distance;
  }

  set stoned(value) {
    this.stonedVal = value;
  }

  get stoned() {
    return this.stonedVal;
  }

  set attack(value) {
    this.attackSet = value;
  }

  get attack() {
    let attackVal = 1 - ((this.distance - 1) / 10);
    const attackVal2 = this.stonedVal ? Math.log2(this.distance) * 5 : 0;
    attackVal = Math.round(this.attackSet * attackVal - attackVal2);
    return attackVal;
  }
}
