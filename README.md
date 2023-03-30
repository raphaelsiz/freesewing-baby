# freesewing-baby
An NPM package to generate measurements to create freesewing patterns for babies based on a single measurement
## Usage
### Installation
In your terminal/console (assuming you have node installed):
```console
npm install @freesewing/core@next @freesewing/plugin-bundle@next @freesewing/utils@next
npm install @freesewing/pattern@next freesewing-baby
```
Replace "pattern" with the specific pattern you're trying to make. You may also have to install additional dependencies if the design you're using depends on others. For example, `@freesewing/aaron` requires `@freesewing/brian`. For more on how to generate FreeSewing patterns in node.js, see [the freesewing.dev page howto on node.js](https://freesewing.dev/howtos/environments/nodejs).

Note: when v3 of FreeSewing comes out, remove the `@next`.

In your package.json, make sure you have set `"type": "module"` somewhere.

In your index.js file:
```js
import { Pattern } from '@freesewing/pattern' //again, replace "Pattern" and "pattern" with the specific pattern you want to use. Make sure the pattern inside the brackets is capitalized, as this is a named export.
import {pluginTheme as theme} from '@freesewing/plugin-theme'
import Baby from 'freesewing-baby' //you can name this import whatever you want
```
### Pattern generation
```js
const waistInMillimeters = 440 //if your baby's waist is about 44 centimeters (a bit over 17 inches)
const svg = new Pattern({
    sa: 10, //1 cm seam allowance, you can change this
    measurements: new Baby(waistInMillimeters),
    options: {
        //insert any required options for the pattern here
    }
})
```
With this