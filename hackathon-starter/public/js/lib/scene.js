/* global AFRAME */


var panels = {
  group1: {
    level1:{
      position: "-3 -2 -3",
      rotation: "0 45 0"
    }
  },
  group3:{
    level3:{
      position: "-2 2 -2",
      rotation: "0 -45 0"
    }
  }
}

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    this.setupFadeAnimation();

    el.addEventListener(data.on, function () {
      // Fade out image.
      data.target.emit('set-image-fade');
      // Wait for fade to complete.
      setTimeout(function () {
        // Set image.
        data.target.setAttribute('material', 'src', data.src);
      }, data.dur);
    });
  },

  /**
   * Setup fade-in + fade-out.
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  }
});

// AFRAME.registerComponent('panel', {
//   schema: {
//     color: {default: '#FFF'},
//     size: {type: 'int', default: 5}
//   },
//   init: function () {


//   },
//   update: function () {},
//   tick: function () {},
//   remove: function () {},
//   pause: function () {},
//   play: function () {}
// });