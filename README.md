![vectorious](https://github.com/mateogianolio/vectorious/raw/master/logo.gif)

[![Backers on Open Collective](https://opencollective.com/vectorious/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/vectorious/sponsors/badge.svg)](#sponsors) ![version](https://img.shields.io/npm/v/vectorious.svg) [![CDNJS](https://img.shields.io/cdnjs/v/vectorious.svg)](https://cdnjs.com/libraries/vectorious) ![travis](https://img.shields.io/travis/mateogianolio/vectorious.svg?style=flat&label=build) [![maintainability](https://api.codeclimate.com/v1/badges/0b4035b94b0e84c5ac55/maintainability)](https://codeclimate.com/github/mateogianolio/vectorious/maintainability) [![test coverage](https://api.codeclimate.com/v1/badges/0b4035b94b0e84c5ac55/test_coverage)](https://codeclimate.com/github/mateogianolio/vectorious/test_coverage) [![greenkeeper](https://badges.greenkeeper.io/mateogianolio/vectorious.svg)](https://greenkeeper.io/)

> A linear algebra library, written in TypeScript and accelerated with C++ bindings to [BLAS](http://www.netlib.org/blas/) and [LAPACK](http://www.netlib.org/lapack/).

### Usage

Follow the installation instructions in [nlapack](https://github.com/nperf/nlapack) and [nblas](https://github.com/nperf/nblas) to get maximum performance.

#### In node.js

```bash
# with C++ bindings
$ npm install vectorious@beta

# or, if you don't want C++ bindings
$ npm install vectorious@beta --no-optional
```

```javascript
import {
  Matrix,
  Vector,
  NDArray,
} from 'vectorious';

const x: Matrix = Matrix.random(2, 2);
/*
Matrix {
  data: Float32Array [
    0.38323071599006653,
    0.9094724655151367,
    0.8513918519020081,
    0.2443944215774536
  ],
  dtype: 'float32',
  length: 4,
  shape: [ 2, 2 ]
}
*/
```

#### In browser

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vectorious/5.5.0/vectorious.min.js"></script>
```

```html
<script>
  var A = new Matrix([[1], [2], [3]]),
      B = new Matrix([[1, 3, 5]]),
      C = A.multiply(B);

  console.log('C:', C.toArray());
  /* C: [
    [1, 3, 5],
    [2, 6, 10],
    [3, 9, 15]
  ] */
</script>
```

### Examples

**Basic**
* [**Solving linear systems of equations**](https://github.com/mateogianolio/vectorious/tree/master/examples/solve.js)
* [**Using low-level BLAS routines**](https://github.com/mateogianolio/vectorious/tree/master/examples/blas.js)

**Machine learning**
* [**Neural network**](https://github.com/mateogianolio/vectorious/tree/master/examples/neural-network.js) (by [@lucidrains](https://github.com/lucidrains))
* [**Logistic regression**](https://github.com/mateogianolio/vectorious/tree/master/examples/logistic-regression.js)

### Documentation

* [**API Documentation**](https://mateogianolio.github.io/vectorious)
* [**Usage guides**](https://github.com/mateogianolio/vectorious/wiki)

### Benchmarks

Run benchmarks with

```bash
$ npm run benchmark
```

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/mateogianolio/vectorious/graphs/contributors"><img src="https://opencollective.com/vectorious/contributors.svg?width=890&button=false" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/vectorious#backer)]

<a href="https://opencollective.com/vectorious#backers" target="_blank"><img src="https://opencollective.com/vectorious/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/vectorious#sponsor)]

<a href="https://opencollective.com/vectorious/sponsor/0/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/1/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/2/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/3/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/4/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/5/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/6/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/7/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/8/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/9/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/9/avatar.svg"></a>


