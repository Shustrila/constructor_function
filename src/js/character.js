function Character(name, type) {
  this.types.forEach((item) => {
    if (type === item.type && typeof name === 'string' && name.length > 2 && name.length < 10) {
      this.name = name;
      this.type = type;
      this.attack = item.attack;
      this.defense = item.defense;
      this.health = 100;
      this.level = 1;
    }
  });

  if (Object.keys(this).length === 0) {
    throw new Error('object empty');
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
