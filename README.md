# jeyo-distans

![NPM version](http://img.shields.io/npm/v/jeyo-distans.svg) ![Build Status](http://img.shields.io/travis/leny/jeyo-distans.svg) ![Dependency Status](https://david-dm.org/leny/jeyo-distans.svg) ![Downloads counter](http://img.shields.io/npm/dm/jeyo-distans.svg)

> Get distance between two geographic coordinates

* * *

## Getting Started

### From **browsers** and **node**.

**jeyo-distans** use the [umd](https://github.com/umdjs/umd) implementation to be usable from anywhere (client, server, ...).

Install the module with: `npm install jeyo-distans`

Use it with: `jeyoDistans = require( "jeyo-distans" );`

## Documentation

The **jeyo-distans** module exposts an unique function : 

    jeyoDistans( positionOne, positionTwo )
    
* `positionOne`
* `positionTwo`

The two arguments represents geographic coordinates formated as :

* an `Array`, where the first member is a `Number` representing the **latitude** of the position, and the second member is a `Number` representing the **longitude** Of the position.
* an `Object`, where the `latitude` or `lat` property is a `Number` representing the **latitude** of the position, and the `longitude` or `lng` property is a `Number` representing the **longitude** of the position.

Te returns value is a `Number`, representing the distance between the two positions, in **kilometers** (with `3` decimal numbers).

## Examples

See *tests*.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* **0.1.0**: Initial release (*08/06/14*)
* **0.2.0**: Initial release (*10/06/14*)

## TODO

* Choose returns unit

## License

Copyright (c) 2014 Leny  
Licensed under the MIT license.
