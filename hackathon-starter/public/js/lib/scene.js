/* global AFRAME */


function panelGroup(panels){
  this.panels = panels;
}

function panel(position, rotation){
  this.position = position;
  this.rotation = rotation;
}
function tuple(x,y,z){
  return [x,y,z]
}

var panels = [
  new panel(new tuple(-3,-2,-3), new tuple(0,45,0)),
  new panel(new tuple(-3,0,-3), new tuple(0,45,0)),
  new panel(new tuple(-3,2,-3), new tuple(0,45,0)),
  new panel(new tuple(0,-2,-3), new tuple(0,45,0)),
  new panel(new tuple(0,0,-3), new tuple(0,45,0)),
  new panel(new tuple(0,-2,-3), new tuple(0,45,0)),
  new panel(new tuple(3,2,-3), new tuple(0,45,0)),
  new panel(new tuple(3,0,-3), new tuple(0,45,0)),
  new panel(new tuple(3,2,-3), new tuple(0,45,0))
]

var scene = {
  'panelGroups': [
    new panelGroup([panels[0],panels[1],panels[2]]),
    new panelGroup([panels[3],panels[4],panels[5]]),
    new panelGroup([panels[6],panels[7],panels[8]])
  ]
}

var init =function(){
  console.log(scene);
  console.log(panels[0].rotation)
}();



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