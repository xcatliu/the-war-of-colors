import assert from 'assert';

import Color from '../src/classes/Color';
import ColorClass from 'color';

describe('Color', () => {
  const color = new Color('#FB5');
  it('should be instantiated successfully', () => {
    assert.deepEqual(color instanceof ColorClass, true);
  });
  it('should has method red() green() blue()', () => {
    assert.equal(color.red(), 255);
    assert.equal(color.green(), 187);
    assert.equal(color.blue(), 85);
  });
  it('should has method hue() saturation() lightness()', () => {
    assert.equal(color.hue(), 36);
    assert.equal(color.saturation(), 100);
    assert.equal(color.lightness(), 67);
  });
  it('should has method attack() defense() magicResistance()', () => {
    assert.equal(color.attack(), 67);
    assert.equal(color.defense(), 0);
    assert.equal(color.magicResistance(), 100);
  });
  it('should has method skills()', () => {
    assert.deepEqual(
      color.skills(),
      { 36: { name: 'Lightning', type: 'ATTACK', attack: 38, manacost: 30 } }
    );
  });
});
