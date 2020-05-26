/* global AFRAME, THREE */

AFRAME.registerComponent("finger-spin", {
  schema: {
    factor: { default: 5 }
  },

  init: function() {
    this.handleEvent = this.handleEvent.bind(this);

    this.isVisible = false;

    this.el.sceneEl.addEventListener("onefingermove", this.handleEvent);

    this.el.sceneEl.addEventListener("markerFound", e => {
      this.isVisible = true;
    });

    this.el.sceneEl.addEventListener("markerLost", e => {
      this.isVisible = false;
    });
  },

  remove: function() {
    this.el.sceneEl.removeEventListener("onefingermove", this.handleEvent);
  },

  handleEvent: function(event) {
    if (this.isVisible) {
      this.el.object3D.rotation.y +=
        event.detail.positionChange.x * this.data.factor;
      this.el.object3D.rotation.x +=
        event.detail.positionChange.y * this.data.factor;
    }
  }
});
