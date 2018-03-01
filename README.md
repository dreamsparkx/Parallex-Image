# Parallex-Image
Parallex Image is a port of [atvImg library](https://github.com/drewwilson/atvImg "atvImg library") in react. It gives you Apple TV 3D parallex effect.

## Install
`npm install parallex-image --save`

## API
**Data**
- `layers`: This is required. The images will be stacked on top of each other and the last element will be at the top.
- `isStatic`: This is optional. When you pass `true`, it disables the parallex effect, and shows the flattened image (`staticFallback`) instead.
- `staticFallback`: This is optional. Pass the flattened image that contains all the layers.

## Example

``` javascript
import ParallexImage from 'parallex-image';

<ParallexImage
  layers={[
    '/assets/images/back.png',
    '/assets/images/front.png',
  ]}
  staticFallback="/assets/images/icon-flattened.png"
  isStatic={false}
  style={{ flex: 0.21, height: 100, textAlign: 'center' }}
/>
```

## License

[MIT](http://spdx.org/licenses/MIT.html "MIT")