<h1 align="center">AR.js & A-Frame Gestures</h1>

<p align="center"><img width="400" alt="gesture sample" src="https://user-images.githubusercontent.com/21111451/83983551-00accd00-a8f5-11ea-80a6-e075971ba1d2.gif"></p>

Example of using gesture events on AR.js with A-Frame. This work is based on [this example](https://github.com/8thwall/web/blob/master/examples/aframe/manipulate/README.md) from 8th Wall.

Scale and rotate 3D elements from your AR.js scene using `gesture-detector` and `gesture-handler` components.


## Try now!

#### Image Tracking

🚀[Open this sample](https://fcor.github.io/arjs-gestures/image-tracking.html) on your phone and [scan this picture](https://raw.githubusercontent.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex-image-big.jpeg)

#### Marker Tracking

🚀[Open this sample](https://fcor.github.io/arjs-gestures/index.html) on your phone and [scan this marker](https://killcloud.nyc3.digitaloceanspaces.com/assets/Hiro_marker_ARjs.png)

## Installation

Import this file if you want default touch events. Keep reading to learn how to extend it.

```html
<script src="https://raw.githack.com/fcor/arjs-gestures/master/dist/gestures.js"></script>
```

## How it works?

`gesture-detector` listens to regular touch events directly on `a-scene` and emits a custom event indicating how many fingers were involved ("one", "two", "three" or "many") and passing some details of the event, like the position, spread and coordinates where user touched the screen. This component was developed by 8th Wall for their A-Frame based demos and can be found [here](https://github.com/8thwall/web/blob/master/examples/aframe/manipulate/gesture-detector.js).

`gesture-handler` adds listeners for custom gesture events, emitted by `gesture-detector`. This component should be placed on the 3D element we want to control and it automaticaly detects if the marker or image is found or lost to ensure the element could only be manipulated if it's actually visible. This component could be customized via properties. Currently supports pinch to zoom and finger spin for rotating the element.

### Properties

| Property       | Description                             | Default Value |
| -------------- | --------------------------------------- | ------------- |
| enabled        | Whether gesture controls are enabled.   | true          |
| rotationFactor | Factor for controlling rotation         | 5             |
| minScale       | Minimum scale applied to the 3D element | 0.3           |
| maxScale       | Minimum scale applied to the 3D element | 8             |

## Examples

#### Image Tracking

```html
<a-scene
  arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
  embedded
  renderer="logarithmicDepthBuffer: true;"
  vr-mode-ui="enabled: false"
  gesture-detector
  id="scene"
>
  <a-nft
    type="nft"
    url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
    smooth="true"
    smoothCount="10"
    smoothTolerance=".01"
    smoothThreshold="5"
    raycaster="objects: .clickable"
    emitevents="true"
    cursor="fuse: false; rayOrigin: mouse;"
  >
    <a-entity
      gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
      scale="5 5 5"
      position="50 150 0"
      class="clickable"
      gesture-handler="minScale: 0.25; maxScale: 10"
    >
    </a-entity>
  </a-nft>
  <a-entity camera></a-entity>
</a-scene>
```

#### Marker Tracking

```html
<a-scene
  arjs
  embedded
  renderer="logarithmicDepthBuffer: true;"
  vr-mode-ui="enabled: false"
  gesture-detector
  id="scene"
>
  <a-assets>
    <a-asset-item
      id="bowser"
      src="https://cdn.glitch.com/06bd98b4-97ee-4c07-a546-fe39ca205034%2Fbowser.glb"
    >
    </a-asset-item>
  </a-assets>

  <a-marker
    preset="hiro"
    raycaster="objects: .clickable"
    emitevents="true"
    cursor="fuse: false; rayOrigin: mouse;"
    id="markerA"
  >
    <a-entity
      id="bowser-model"
      gltf-model="#bowser"
      position="0 0 0"
      scale="0.05 0.05 0.05"
      class="clickable"
      gesture-handler
    >
    </a-entity>
  </a-marker>
  <a-entity camera></a-entity>
</a-scene>
```

## Credits
Kudos to 8th wall for sharing their A-Frame Manipulate example!

Bowser 3D model was made by [santiago3052008](https://sketchfab.com/santiago3052008) and can be found [here](https://sketchfab.com/3d-models/bowser-fa17f94ae350416f86c35db7c0e129c3)