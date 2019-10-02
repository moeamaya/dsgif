var Helpers = {
  staggerType: function(char, $src, delay){
    setTimeout(function(){
      $src.append(char)
    }, delay);
  },

  // appends a string to a jQuery objects
  // in a randomized typing like fashion
  typeConsole: function(str, $src){
    var max = 80;
    var min = 0;

    for(var i = 0; i < str.length; i++){
      var delay = Math.floor(Math.random() * (max - min)) + min + (i * max);
      this.staggerType(str[i], $src, delay)
    };
  },

  // input a min and max range in seconds ie (1, 10)
  // returns a random time value in milliseconds
  randomTime: function(min, max){
    return ( Math.random() * (max - min) + min ) * 1000;
  }

};

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* bling.js */

window.$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
}

NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem, i) {
    elem.on(name, fn);
  });
}
