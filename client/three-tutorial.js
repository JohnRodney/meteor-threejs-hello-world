$(document).ready(function(){
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();

  var WIDTH = $(window).width();
  var HEIGHT = $(window).height();
  var VIEW_ANGLE = 45,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 10000;
  var loader = new THREE.JSONLoader();
  var Canvas = $('#viewport');
  var renderer = new THREE.WebGLRenderer();
  var camera = new THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR);
  var scene = new THREE.Scene();

  scene.add(camera);
  camera.position.z = 300;
  renderer.setSize(WIDTH, HEIGHT);
  $('#render-target').append(renderer.domElement);

  var geometry   = new THREE.SphereGeometry(0.5, 32, 32);
  var material  = new THREE.MeshPhongMaterial();
  var earthMesh = new THREE.Mesh(geometry, material);
  scene.add(earthMesh);
  material.map    = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg');

  // set up the sphere vars
  var radius = 50,
      segments = 32,
      rings = 32;
  var sphereMaterial =
    new THREE.MeshPhongMaterial(
    {
      wireframe: false
    });

  // create a new mesh with
  // sphere geometry - we will cover
  // the sphereMaterial next!
  var sphere = new THREE.Mesh(

    new THREE.SphereGeometry(
      radius,
      segments,
      rings),

    sphereMaterial);


  // add the sphere to the scene
  scene.add(sphere);
  sphereMaterial.map    = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg');
  sphereMaterial.bumpMap    = THREE.ImageUtils.loadTexture('images/earthbump1k.jpg');
  sphereMaterial.bumpScale = 1;
  sphereMaterial.specularMap    = THREE.ImageUtils.loadTexture('images/earthspec1k.jpg');
  sphereMaterial.specular  = new THREE.Color('grey');
  Meteor.applyTexture = {};
  Meteor.applyTexture.venus = function(){
    sphereMaterial.map = THREE.ImageUtils.loadTexture('images/venusmap.jpg');
    sphereMaterial.bumpMap = THREE.ImageUtils.loadTexture('images/venusbump.jpg');
    sphereMaterial.bumpScale = 1;
    sphereMaterial.specularMap    = THREE.ImageUtils.loadTexture('images/venusspec.jpg');
    sphereMaterial.specular  = new THREE.Color('grey');
    earthMesh.remove(cloudMesh);
  }
  Meteor.applyTexture.earth = function(){
    sphereMaterial.map    = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg');
    sphereMaterial.bumpMap    = THREE.ImageUtils.loadTexture('images/earthbump1k.jpg');
    sphereMaterial.bumpScale = 1;
    sphereMaterial.specularMap    = THREE.ImageUtils.loadTexture('images/earthspec1k.jpg');
    sphereMaterial.specular  = new THREE.Color('grey');
    earthMesh.add(cloudMesh);
  }
  Meteor.applyTexture.jupiter = function(){
    sphereMaterial.map    = THREE.ImageUtils.loadTexture('images/jupitermap.jpg');
    sphereMaterial.bumpMap    = THREE.ImageUtils.loadTexture('images/jupiterbump.jpg');
    sphereMaterial.bumpScale = 1;
    sphereMaterial.specularMap    = THREE.ImageUtils.loadTexture('images/jupiterspec.jpg');
    sphereMaterial.specular  = new THREE.Color('grey');
    earthMesh.remove(cloudMesh);
  }
  Meteor.applyTexture.pluto = function(){
    sphereMaterial.map    = THREE.ImageUtils.loadTexture('images/plutomap1k.jpg');
    sphereMaterial.bumpMap    = THREE.ImageUtils.loadTexture('images/plutobump1k.jpg');
    sphereMaterial.bumpScale = 1;
    sphereMaterial.specularMap    = THREE.ImageUtils.loadTexture('images/plutospec1k.jpg');
    sphereMaterial.specular  = new THREE.Color('grey');
    earthMesh.remove(cloudMesh);
  }
  Meteor.applyTexture.neptune = function(){
    sphereMaterial.map    = THREE.ImageUtils.loadTexture('images/neptunemap.jpg');
    sphereMaterial.bumpMap    = THREE.ImageUtils.loadTexture('images/neptunebump.jpg');
    sphereMaterial.bumpScale = 1;
    sphereMaterial.specularMap    = THREE.ImageUtils.loadTexture('images/neptunespec.jpg');
    sphereMaterial.specular  = new THREE.Color('grey');
    earthMesh.remove(cloudMesh);
  }
  Meteor.applyTexture.uranus = function(){
    sphereMaterial.map    = THREE.ImageUtils.loadTexture('images/uranusmap.jpg');
    sphereMaterial.bumpMap    = THREE.ImageUtils.loadTexture('images/uranusbump.jpg');
    sphereMaterial.bumpScale = 1;
    sphereMaterial.specularMap    = THREE.ImageUtils.loadTexture('images/uranusspec.jpg');
    sphereMaterial.specular  = new THREE.Color('grey');
    earthMesh.remove(cloudMesh);
  }
  Meteor.applyTexture.saturn = function(){
    sphereMaterial.map    = THREE.ImageUtils.loadTexture('images/saturnmap.jpg');
    sphereMaterial.bumpMap    = THREE.ImageUtils.loadTexture('images/saturnbump.jpg');
    sphereMaterial.bumpScale = 1;
    sphereMaterial.specularMap    = THREE.ImageUtils.loadTexture('images/saturnspec.jpg');
    sphereMaterial.specular  = new THREE.Color('grey');
    earthMesh.remove(cloudMesh);
  }
  Meteor.applyTexture.mercury = function(){
    sphereMaterial.map    = THREE.ImageUtils.loadTexture('images/mercurymap.jpg');
    sphereMaterial.bumpMap    = THREE.ImageUtils.loadTexture('images/mercurybump.jpg');
    sphereMaterial.bumpScale = 1;
    sphereMaterial.specularMap    = THREE.ImageUtils.loadTexture('images/mercuryspec.jpg');
    sphereMaterial.specular  = new THREE.Color('grey');
    earthMesh.remove(cloudMesh);
  }
  Meteor.applyTexture.mars = function(){
    sphereMaterial.map    = THREE.ImageUtils.loadTexture('images/marsmap.jpg');
    sphereMaterial.bumpMap    = THREE.ImageUtils.loadTexture('images/marsbump.jpg');
    sphereMaterial.bumpScale = 1;
    sphereMaterial.specularMap    = THREE.ImageUtils.loadTexture('images/marsspec.jpg');
    sphereMaterial.specular  = new THREE.Color('grey');
    earthMesh.remove(cloudMesh);
  }





  var canvasCloud = THREE.ImageUtils.loadTexture('images/earthcloudmap.jpg');
  var geometry   = new THREE.SphereGeometry(radius, segments, rings);
  var material  = new THREE.MeshPhongMaterial({
    map     : THREE.ImageUtils.loadTexture('images/earthcloudmap.png'),
    side        : THREE.DoubleSide,
    opacity     : 0.8,
    transparent : true,
    depthWrite  : false,
  });
  var cloudMesh = new THREE.Mesh(geometry, material);
  earthMesh.add(cloudMesh);

  // create the geometry sphere
  var geometry  = new THREE.SphereGeometry(1000, 32, 32)
  // create the material, using a texture of startfield
  var starTexture = THREE.ImageUtils.loadTexture( 'images/starfield.jpg' );
  starTexture.wrapS = starTexture.wrapT = THREE.RepeatWrapping;
  starTexture.repeat.set( 10, 10 );

  var material  = new THREE.MeshBasicMaterial();
  material.map   = starTexture;
  material.side  = THREE.BackSide;

    // create the mesh based on geometry and material
  var mesh  = new THREE.Mesh(geometry, material)
  scene.add(mesh);
  mesh.position.z = 300;

  // create a point light
  var pointLight =
    new THREE.PointLight(0xFFFFFF);

  // set its position
  pointLight.position.x = 00;
  pointLight.position.y = 50;
  pointLight.position.z = 300;

  // add to the scene
  scene.add(pointLight);


  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  // custom events
  var startX;
  var startY;
  var canvas = document.getElementById('render-target')
  function StartListen(eventname){
    canvas.addEventListener(eventname, function(e){
      e.preventDefault();
      setStartCoords(e);
      toRotate = false;
    });
  }
  function DuringEvent(eventname){
    canvas.addEventListener(eventname, function(e){
      if(!toRotate){
        calculateRotation(e);
      }
    });
  }
  function EndEvent(eventname){
    canvas.addEventListener(eventname, function(e){
      e.preventDefault();
      toRotate = true;
    });
  }
  StartListen('touchstart');
  StartListen('mousedown');
  DuringEvent('touchmove');
  DuringEvent('mousemove');
  EndEvent('mouseup');
  EndEvent('touchend');
  var toRotate = true;
  var down = false;
  function move(){
    var speed = Math.abs(75-sphere.position.y)*.01
    if(!down){
      sphere.position.y += speed;
      if(sphere.position.y > 70){
        down = true;
      }
    }
    else{
      sphere.position.y -= speed;
      if(sphere.position.y < -60){
        down = false;
      }
    }
    cloudMesh.position.y = sphere.position.y;
    if(toRotate){
      rotateX(0.004);
    }
  }
  function setStartCoords(e){
    var x, y;
    if(typeof(e.changedTouches) !== 'undefined'){
      x = e.changedTouches[0].pageX;
      y = e.changedTouches[0].pageY;
    }
    else{
      x = e.clientX;
      y = e.clientY;
    }
    startX = x;
    startY = y;
  }

  function calculateRotation(e){
    var x, y;
    if(typeof(e.changedTouches) !== 'undefined'){
      x = e.changedTouches[0].pageX;
      y = e.changedTouches[0].pageY;
    }
    else{
      x = e.clientX;
      y = e.clientY;
    }
    rotateX((x-(startX))*.0001);
    rotateY((y-(startY))*.0001);
  }
  function rotateX(val){
    sphere.rotation.y  += val;
    cloudMesh.rotation.y  = sphere.rotation.y;
  }
  function rotateY(val){
    sphere.rotation.x  += val;
    cloudMesh.rotation.x  = sphere.rotation.x;
  }

  // usage:
  // instead of setInterval(render, 16) ....

  (function animloop(){
    requestAnimFrame(animloop);
    move();
    renderer.render(scene, camera);
  })();
// place the rAF *before* the render() to assure as close to
// 60fps with the setTimeout fallback.
  var visible = false;
  Meteor.forNerds = function(){
    var pg = $('#page');
    var message = "";
    if(visible){
      pg.hide();
      message = "for nerds";
    }
    else{
      pg.show();
      message = "hide";
    }
    $('#header .btn').html(message);
    visible = !visible;
  }
});
