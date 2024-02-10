export default class Character {
    constructor (name, type) {

    if (name.length < 2 || name.length > 10) {
        throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!allowedTypes.includes(type)) {
        throw new Error('Некорректный тип персонажа');
    }

    const attackObj = {
        'Bowman': 25,
        'Swordsman': 40,
        'Magician': 10,
        'Daemon': 10,
        'Undead': 25,
        'Zombie': 40
    };

    const defenceObj = {
        'Bowman': 25,
        'Swordsman': 10,
        'Magician': 40,
        'Daemon': 40,
        'Undead': 25,
        'Zombie': 10
    };

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attackObj[type];
    this.defence = defenceObj[type];
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
