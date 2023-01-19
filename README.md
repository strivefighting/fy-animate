# fy-animate

[![NPM version](https://badgen.net/npm/v/fy-animate)](https://www.npmjs.com/package/fy-animate)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/fy-animate)](https://www.npmjs.com/package/fy-animate)
[![License](https://badgen.net/npm/license/fy-animate)](https://www.npmjs.com/package/fy-animate)

A simple patch animation running in the browser

Install with [npm](https://www.npmjs.com/), or [Yarn](https://yarnpkg.com/):

```bash
# via npm
npm install fy-animate --save

# or Yarn (note that it will automatically save the package to your `dependencies` in `package.json`)
yarn add fy-animate
```

## Usage

```typescript
    import Animate from 'fy-animate';
    const div = document.querySelector('div');
    const animate1 = new Animate(div);
    // const animate2 = new Animate(div);

    animate1.start('left', 500, 2000, 'linear');
    // animate2.start('top', 400, 2000, 'easeInOut');

```
## Params
| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| propertyName | String | ✓ | DOMRect(Attributes included in `Element.getBoundingClientRect()`) |
| endPos | Number | ✓ | Target location |
| duration | Number | ✓ | Total duration of animation |
| easing | String/Function | ✓ | Easing function.Or a string from `['linear', 'easeIn', 'easeOut', 'easeInOut', 'strongEaseIn', 'strongEaseOut', 'sineaseIn', 'sineaseOut']`|
| unit | String |  | Unit of propertyName with the default value: 'px' |

## Example

To see an example of the code running, follow these steps:

1. Clone the repo, `https://github.com/strivefighting/fy-animate.git`
1. `cd examples`
1. `npm install`
1. `npm run dev`
1. Open [http://localhost:8080](http://localhost:8080)

The code of the example is in [`fy-animate`](https://github.com/strivefighting/fy-animate/blob/master/examples).