function Character(name, type) {
  if (typeof name !== 'string') throw new TypeError('name field not type string');
  if (name.length < 2 || name.length > 10) throw new TypeError('the length of the name');

  this.types.forEach((item) => {
    if (type === item.type) {
      this.name = name;
      this.type = type;
      this.attack = item.attack;
      this.defense = item.defense;
      this.health = 100;
      this.level = 1;
    }
  });

  if (Object.keys(this).length === 0) {
    throw new TypeError('is not equal to the types of characters');
  }
}

Character.prototype.types = [
  { type: 'Bowman', attack: 25, defense: 25 },
  { type: 'Swordsman', attack: 40, defense: 10 },
  { type: 'Magician', attack: 10, defense: 40 },
  { type: 'Daemon', attack: 10, defense: 10 },
  { type: 'Undead', attack: 25, defense: 25 },
  { type: 'Zombie', attack: 40, defense: 10 },
];

export default Character;
