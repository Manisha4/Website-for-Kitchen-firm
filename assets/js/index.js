// Uncomment to initialise WOW.js
new WOW().init();

  var Vid1 = document.getElementById('video1');
  var Vid2 = document.getElementById('video2');
  var Vid3 = document.getElementById('video3');
  var Vid4 = document.getElementById('video4');
  var Vid5 = document.getElementById('video5');
  var Vid6 = document.getElementById('video6');
  var Vid7 = document.getElementById('video7');

// init controller
var controller1 = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#video1", duration: 250})
        
        .addTo(controller1)
        // .addIndicators() // add indicators (requires plugin)
        
        .on("enter", function () {
          Vid1.currentTime = 0;
          Vid1.play();
        })
        .on("leave", function () {
          Vid1.pause();
        })

var controller2 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: "#video2", duration: 250})
        
        .addTo(controller2)
        // .addIndicators() // add indicators (requires plugin)
        
        .on("enter", function () {
          Vid2.currentTime = 0;
          Vid2.play();
        })
        .on("leave", function () {
          Vid2.pause();
        })

var controller3 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: "#video3", duration: 250})
                
        .addTo(controller3)
        // .addIndicators() // add indicators (requires plugin)
                
        .on("enter", function () {
          Vid3.currentTime = 0;
          Vid3.play();
        })
        .on("leave", function () {
          Vid3.pause();
        })

var controller4 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: "#video4", duration: 250})
        
        .addTo(controller4)
        // .addIndicators() // add indicators (requires plugin)
        
        .on("enter", function () {
          Vid4.currentTime = 0;
          Vid4.play();
        })
        .on("leave", function () {
          Vid4.pause();
        })

var controller5 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: "#video5", duration: 250})
        
        .addTo(controller5)
        // .addIndicators() // add indicators (requires plugin)
        
        .on("enter", function () {
          Vid5.currentTime = 0;
          Vid5.play();
        })
        .on("leave", function () {
          Vid5.pause();
        })

var controller6 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: "#video6", duration: 250})
        
        .addTo(controller6)
        // .addIndicators() // add indicators (requires plugin)
        
        .on("enter", function () {
          Vid6.currentTime = 0;
          Vid6.play();
        })
        .on("leave", function () {
          Vid6.pause();
        })
var controller7 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: "#video7", duration: 250})
        
        .addTo(controller7)
        // .addIndicators() // add indicators (requires plugin)
        
        .on("enter", function () {
          Vid7.currentTime = 0;
          Vid7.play();
        })
        .on("leave", function () {
          Vid7.pause();
        })