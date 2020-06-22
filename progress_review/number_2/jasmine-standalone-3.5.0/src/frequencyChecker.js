(function(exports){
    function FrequencyChecker(music){
      this.music = music
    }

    FrequencyChecker.prototype.checkLower = function(){
      //check if the music array is 40 
      //change if not? > call changed if not
      if(this.music[0] < 40){
        return "Frequency below 40"
      } else {
      var checked = this.music 
      return checked;
      }
    }

    exports.FrequencyChecker = FrequencyChecker;
})(this);