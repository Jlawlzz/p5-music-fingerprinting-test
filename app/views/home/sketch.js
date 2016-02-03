<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/244482111&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

<script type="text/javascript">

function setup(){
  sound = new p5.AudioIn();
  fft = new p5.FFT();
  amp = new p5.Amplitude();
  sound.amp(.6);
  timer = 0;
  botPeak = 0;
  botHighPeak = 0;
  midPeak = 0;
  midHighPeak = 0;
  highPeak = 0;
}

var myVar = setInterval(myTimer, 1000);
var array = []

function myTimer() {
  $.ajax({
          type: 'POST',
          url: '/songs',
          data: { frequencies: array }
      });
  console.log(array);
}

function draw(){
  var spectrum = fft.analyze();
  var botFreq = fft.getEnergy(30, 40);
  var botHighFreq = fft.getEnergy(40, 80);
  var midFreq = fft.getEnergy(80, 120);
  var midHighFreq = fft.getEnergy(120, 180);
  var highFreq = fft.getEnergy(180, 300);
  //
  for (var i = 0; i< spectrum.length; i++){
    timer++
  }

  if (botPeak < botFreq){
      botPeak = botFreq;

      array = [botPeak, botHighPeak, midPeak, midHighPeak]
      // console.log(array);

  }

  if (botHighPeak < botHighFreq){
      botHighPeak = botHighFreq;

      array = [botPeak, botHighPeak, midPeak, midHighPeak, highPeak]
      // console.log(array);
  }

  if (midPeak < midFreq){
      midPeak = midFreq;

      array = [botPeak, botHighPeak, midPeak, midHighPeak, highPeak]
      // console.log(array);
  }

  if (midHighPeak < midHighFreq){
      midHighPeak = midHighFreq;

      array = [botPeak, botHighPeak, midPeak, midHighPeak, highPeak]
      // console.log(array);
  }

  if (highPeak < highFreq){
      highPeak = highFreq;

      array = [botPeak, botHighPeak, midPeak, midHighPeak, highPeak]
      // console.log(array);
  }

  endShape();
}

</script>
