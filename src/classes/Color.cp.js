import ColorClass from 'color';

const TYPES = {
  ATTACK: 'ATTACK',
};

const skillsMap = {
  36: {
    name: 'Lightning',
    type: TYPES.ATTACK,
    attack: 38,
    manacost: 30,
  },
};

class Color extends ColorClass {
  constructor() {
    super(...arguments);
  }
  attack() {
    return this.lightness();
  }
  defense() {
    return 100 - this.saturation();
  }
  magicResistance() {
    return this.saturation();
  }
  skills() {
    const hue = this.hue();
    return {
      hue: skillsMap[hue],
    };
  }
}

export default Color;
