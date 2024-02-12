export default class Character {
    constructor (name, type) {

    if (name.length < 2 || name.length > 10) {
        throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!allowedTypes.includes(type)) {
        throw new Error('Некорректный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
    }

    levelUp() {
      if (this.health !== 0) {
        this.health = 100;
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
      }
      else {
        throw new Error('Нельзя повысить левел умершего');
      }
    }

    damage(points) {
      if (this.health >= 0) {
          this.health -= points * (1 - this.defence / 100);
      }
      else {
          throw new Error('Нельзя убить умершего');
      }
    }
}
