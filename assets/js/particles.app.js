/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('multilinks-project', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('multilinks-project',
   {
      "particles": {
         "number": {
            "value": 60,
            "density": {
               "enable": true,
               "value_area": 1600
            }
         },
         "color": {
            "value": "#2C3E50"
         },
         "shape": {
            "type": "circle",
            "stroke": {
               "width": 0,
               "color": "#000000"
            },
            "polygon": {
               "nb_sides": 5
            },
            "image": {
               "src": "../img/multilinks/mds_logo.svg",
               "width": 100,
               "height": 100
            }
         },
         "opacity": {
            "value": 0.9,
            "random": false,
            "anim": {
               "enable": false,
               "speed": 1,
               "opacity_min": 0.1,
               "sync": false
            }
         },
         "size": {
            "value": 3,
            "random": true,
            "anim": {
               "enable": false,
               "speed": 40,
               "size_min": 0.1,
               "sync": false
            }
         },
         "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#18bc9c",
            "opacity": 0.4,
            "width": 1
         },
         "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
               "enable": false,
               "rotateX": 600,
               "rotateY": 1200
            }
         }
      },
      "interactivity": {
         "detect_on": "canvas",
         "events": {
            "onhover": {
               "enable": true,
               "mode": "grab"
            },
            "onclick": {
               "enable": true,
               "mode": "push"
            },
            "resize": true
         },
         "modes": {
            "grab": {
               "distance": 400,
               "line_linked": {
                  "opacity": 0.2796926671163688
               }
            },
            "bubble": {
               "distance": 400,
               "size": 40,
               "duration": 2,
               "opacity": 8,
               "speed": 3
            },
            "repulse": {
               "distance": 200,
               "duration": 0.4
            },
            "push": {
               "particles_nb": 4
            },
            "remove": {
               "particles_nb": 2
            }
         }
      },
      "retina_detect": true
   }
);