(function (window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
  
    // Attach the speak function to the helloSpeaker object
    helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
    // Expose the helloSpeaker object to the global scope
    window.helloSpeaker = helloSpeaker;
  
  })(window);