
var width = $('.ticker-text').width(),
    containerwidth = $('.ticker-container').width(),
    left = containerwidth;
$(document).ready(function(e){
	function tick() {
        if(--left < -width){
            left = containerwidth;
        }
        $(".ticker-text").css("margin-left", left + "px");
        setTimeout(tick, 8);
      }
      tick();
});

function preload(){
  sound = loadSound('./sound/newsong.mp3');
}

function setup(){
  var cnv = createCanvas(window.innerWidth,window.innerHeight);
  sound.loop();

  fft = new p5.FFT();
  sound.amp(2);
}

function draw(){
  background(0);

  var spectrum = fft.analyze();
  noStroke();

  for (var i = 0; i< spectrum.length; i+=20){
   // var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(i, height, 5, h*1.3 );
  }
    
    fill("#931f00");
  for (var i = 0; i< spectrum.length; i+=20){
   // var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(i, height, 5, h*.7 );
  }
    fill("#931f00");
  for (var i = 0; i< spectrum.length; i+=20){
   // var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(window.innerWidth-i, i, 5, h*1.3 );
  }
    
    fill("#3342a2");
  for (var i = 10; i< spectrum.length; i+=40){
   // var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(i, height, 5, h*1.3 );
  }
    
     fill("#EDCF09");
  for (var i = 10; i< spectrum.length; i+=40){
   // var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(i, height, 5, h*.8 );
  }
    
    fill("#EDCF09");
  for (var i = 0; i< spectrum.length; i+=40){
   // var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(window.innerWidth-i, i, 5, h*1.3 );
  }
    
     fill("#2c75ba");
  for (var i = 20; i< spectrum.length; i+=60){
   // var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(i, height, 5, h*1.3 );
  }
    fill("#ED0999");
  for (var i = 60; i< spectrum.length; i+=20){
   // var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(i, height, 5, h);
  }
    
     fill("#058d07");
  for (var i = 30; i< spectrum.length; i+=80){
   // var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(i, height, 5, h*1.3 );
  }

    fill("#931f00");
  for (var i = 40; i< spectrum.length; i+=100){
   // var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(i, height, 5, h*1.3 );
  }
 
  endShape();

}


