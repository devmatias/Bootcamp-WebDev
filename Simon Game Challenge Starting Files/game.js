const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let isStarted = false;
let isWrong = false;

const getButtons = $(".btn");

getButtons.on("click", (event) => {
  const userChosenColour = $(event.target).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  if (!isWrong) {
    playSound(userChosenColour);
  }
  isWrong = false;
});

const nextSequence = () => {
  userClickedPattern = [];
  level += 1;
  $("#level-title").text(`Level ${level}`);
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  console.log(gamePattern);
};

const playSound = (name) => {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
};

const animatePress = (currentColour) => {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(() => {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
};

$(document).on("keydown", (event) => {
  if (!isStarted) {
    $("#level-title").text(`Level 0`);
    nextSequence();
    isStarted = true;
  }
});

const checkAnswer = (currentLevel) => {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    isWrong = true;
    playSound('wrong')
    $("#level-title").text(`Game Over, Press Any Key to Restart`);
    $('body').addClass('game-over');
    setTimeout(() => {
        $('body').removeClass('game-over');
    }, 200);
    startOver();
  }
};

const startOver = () => {
    isStarted = false;
    gamePattern = [];
    level = 0;

}