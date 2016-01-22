import assert from 'assert';

import Color from '../src/classes/Color';

describe('Color', () => {
  it('should be instantiated successfully', () => {
    const Green = new Color('#00FF00');
    assert.equal(Green.getGreen(), 1);
  });
});
