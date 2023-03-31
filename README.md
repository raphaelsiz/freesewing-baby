# freesewing-baby
An NPM package to generate measurements to create freesewing patterns for babies based on a single measurement
## Important disclaimer
This package is a work in progress. The baby measurements have not all been verified, and it seems only the top ones work (aka you can generate a Brian and probably anything based on it, but Charlie currently generates a blank SVG). I will be testing the measurements once I can measure the waist of the infant in my life, and I invite others to test them as well so long as they don't expect a guarantee that the garment will fit. If you try it and the garment fits wrong, please submit an [issue](https://github.com/raphaelsiz/freesewing-baby/issues) with as much detail as possible.
# Usage
## Just generating measurements
If you prefer to just generate some measurements to manually add to FreeSewing, here's the easy way to do it.

In your terminal/console (in your node package directory):
```console
npm install freesewing-baby
```
In your index.js file:
```js
import Baby from 'freesewing-baby'
const measurements = new Baby(440) //44 cm waist
console.log(measurements)
```
By default, freesewing-baby assumes you're using millimeters and want millimeters back. To change this, use the second argument to specify what measurements you're passing in and the third to specify what measurements you're wanting back.

For example, if you're using inches and want millimeters back, you could do `Baby(17,"in")`. If you want inches back, you can do `Baby(17,"in","in")`. Both arguments accept "in", "mm", or "cm". In order to request something other than millimeters back, you must pass in all three arguments.
## Uploading measurements
Currently, there is no way to upload measurement sets directly to your account via node, but when v3 comes out, you can use the [API to create a person](https://freesewing.dev/reference/backend/api/people/create). This documentation is also subject to change.
## Generating whole pattern in node.js
### Installation
In your terminal/console (in your node package directory):
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
import { pluginTheme as theme } from '@freesewing/plugin-theme' //theme optional but recommended
import Baby from 'freesewing-baby' //you can name this import whatever you want
```
### Pattern generation
To generate a pattern with the Pattern you imported, put something like this in your index.js, updated with the actual design and seam allowance you want to use and your baby's waist measurement. The package assumes you're using millimeters as your measurement unless you specify.
```js
const waistInMillimeters = 440 //if your baby's waist is about 44 centimeters (a bit over 17 inches)
const svg = new Pattern({
    sa: 10, //1 cm seam allowance, you can change this
    measurements: new Baby(waistInMillimeters),
    options: {
        //insert any required options for the pattern here
    }
}).use(theme).draft().render()
```
If you would rather work in a measurement other than millimeters, you can add a second argument:
```js
measurements : new Baby(17,"in")
```
This only works with "in", "mm", or "cm" as the second argument. If you have a reason that you want a different measurement added, let me know.

> Important note: While there is a third argument to say what measurement type you want back, if you're generating patterns this way the measurements need to be in millimeters. This generates millimeter measurements by default, so just leave the third argument blank!
### Printable PDF or SVG
The above code just returns a string `svg` with the contents of an svg image. In order to actually get a working pattern, you'll first need to save the svg. This will require the fs module or something similar.

First, install fs:
```console
npm install fs
```
```js
import fs from 'fs'
```
Then, you can save an SVG file like so:
```js
fs.writeFile('./path/to/fileYouWant.svg', svg, err => {
  if (err) {
      console.error(err);
  }
  else console.log("File written successfully!")
});
```
Note the console logging and error are not strictly necessary, but can be helpful to determine if something goes wrong.

If you want to turn your pattern into something you can print, use [FreeSewing's tiler tool](https://tiler.freesewing.org/) and upload the SVG you generated. It can convert it to a printable PDF for several different paper sizes.

## Running tests
The package has a couple of inbuilt tests. If you want, you can generate your own Aaron or Brian from them. The Charlie test currently doesn't work, but here's how to do the others:
```js
import Baby, {tests} from 'freesewing-baby'
tests.createAaron(new Baby(500),'./tests/aaron.svg')
tests.createBrian(new Baby(550),'./tests/brian.svg')
```
The second argument is a URL of where you would like the SVG to be stored. The file doesn't have to exist when you run the test, but the directory does. You don't have to have the `tests` folder or anything, just choose a relative *or* absolute file path.