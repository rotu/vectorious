import { deepStrictEqual, strictEqual } from 'assert';

import { array } from '../core/array';
import { NDMultiIter } from '.';

describe('(NDMultiIter) constructor', () => {
  it('should work as expected', () => {
    const x = array([0, 1, 2, 3]);
    const y = array([4, 5, 6, 7]);

    const iter = new NDMultiIter(x, y);

    deepStrictEqual(iter.next(), {
      value: [0, 0],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: [1, 1],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: [2, 2],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: [3, 3],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: undefined,
      done: true,
    });
  });

  it('should work as expected in two dimensions', () => {
    const x = array([
      [0, 1],
      [2, 3],
    ]);
    const y = array([
      [4, 5],
      [6, 7],
    ]);

    const iter = new NDMultiIter(x, y);

    deepStrictEqual(iter.next(), {
      value: [0, 0],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: [1, 1],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: [2, 2],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: [3, 3],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: undefined,
      done: true,
    });
  });

  it('should perform broadcasting correctly', () => {
    const x = array([
      [0, 1],
      [2, 3],
    ]);
    const y = array([0]);
    const iter = new NDMultiIter(x, y);
    deepStrictEqual(iter.next(), {
      value: [0, 0],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: [1, 0],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: [2, 0],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: [3, 0],
      done: false,
    });
    deepStrictEqual(iter.next(), {
      value: undefined,
      done: true,
    });
  });

  it('should work in for...of loops', () => {
    const x = array([
      [0, 1],
      [2, 3],
    ]);
    const y = array([
      [4, 5],
      [6, 7],
    ]);

    const iter = new NDMultiIter(x, y);

    let i = 0;
    for (const [xi, yi] of iter) {
      strictEqual(xi, i);
      strictEqual(yi, i++);
    }
  });

  it('should work in do...while loops', () => {
    const x = array([
      [0, 1],
      [2, 3],
    ]);
    const y = array([
      [4, 5],
      [6, 7],
    ]);

    const iter = new NDMultiIter(x, y);

    let i = 0;
    do {
      const next = iter.next();
      strictEqual(next.done, false);
      strictEqual(next.value[0], i);
      strictEqual(next.value[1], i++);
    } while (!iter.done());
  });

  it('should work with mixed input', () => {
    const x = array([
      [0, 1],
      [2, 3],
    ]);
    const y = array([1, 2]);
    const z = array([
      [1, 3],
      [3, 5],
    ]);

    const iter = new NDMultiIter(x, y);

    do {
      const { done, value } = iter.next();
      strictEqual(done, false);
      const [i, j] = value;
      x.data[i] += y.data[j];
    } while (!iter.done());

    deepStrictEqual(z, x);
  });
});
