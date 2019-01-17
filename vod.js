

$("#btnGenerate").click(function () {

  getVerse();

});


function getVerse() {

    //--- Get a random number based on the total 
    //--- number of words available.
    var randomNumber = getNumber();
  
    //--- Get a word from the word list based on the above 
    //--- random number.
    var verse = verses[randomNumber];
    var wholeVerse = verse.split("~");
  
    //--- Set these values in the interface so we don't always 
    //--- have to mess with calculating them.

    $("#lblChapter").html(wholeVerse[0]);
    $("#lblVerse").html(wholeVerse[1]);
    return verse;
  
  }


  function getNumber() {
    var minNumber = 1;
    var maxNumber = 915;
    var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
    return randomNumber;
  }

