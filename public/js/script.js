$(document).ready(function () {
  var $body = $('body')
  var $header = $('header')
  var $wordPanel = $('.wordPanel')
  var $colorPanel = $('.colorPanel')
  var $miscPanel = $('.miscPanel')
  var $timerPanel = $('.timer')
  var $scorePanel = $('.score')
  var $startButton = $('.start')
  var $restartButton = $('.restart')

  var colorArr = ['red', 'blue', 'yellow', 'green']
  var wordArr = ['GREEN', 'YELLOW', 'RED', 'BLUE']
  var timerID
  var score
  var seconds
  $restartButton.hide()
  $wordPanel.children().hide()
  $startButton.on('click', startClick)

  // Shuffle the array
  function shuffle (array) {
    var i = 0
    var j = 0
    var temp = null
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }
  // Executes the functions after the "Start" button is clicked
  function startClick () {
    generateWord()
    generateColor()
    timerStart()
    startScore()
    $('.colorPanel').on('click', '.box', matcher)
    $startButton.hide()
    $restartButton.show()
    $wordPanel.show()
    $colorPanel.show()
    $restartButton.on('click', restartClick)
  }
  // Executes the functions after the "Restart" button is clicked
  function restartClick () {
    timerStop()
    $restartButton.hide()
    $startButton.show()
    $wordPanel.children().remove()
    $colorPanel.children().remove()
    $wordPanel.children().hide()
    $colorPanel.children().hide()
  }
  function generateWord () {
    var shuffleWord = shuffle(wordArr)
    $wordPanel.append('<div class="word red">' + shuffleWord[0] + '</div>')
  }
  function generateColor () {
    var shuffleColor = shuffle(colorArr)
    for (var i = 0; i < shuffleColor.length; i++) {
      $colorPanel.append('<div class="box ' + shuffleColor[i] + '"></div>')
    }
  }
  function randomWord () {
    var shuffleWord = shuffle(wordArr)
    var shuffleColor = shuffle(colorArr)
    var $wordChildren = $wordPanel.children()
    $wordChildren.remove()
    $wordPanel.append('<div class="word ' + shuffleColor[0] + '">' + shuffleWord[0] + '</div>')
  }
  function randomColor () {
    var shuffleColor = shuffle(colorArr)
    var $colorChildren = $colorPanel.children()
    for (var i = 0; i < shuffleColor.length; i++) {
      $colorChildren.remove()
      $colorPanel.append('<div class="box ' + shuffleColor[i] + '"></div>')
    }
  }
  function matcher () {
    var $wordChildren = $wordPanel.children()
    if ($(this).css('background-color') === $wordChildren.css('color')) {
      randomWord()
      randomColor()
      addScore()
    }
  }
  function timerCount () {
    seconds -= 1
    $timerPanel.text(seconds + 's')
    if (seconds === 0) {
      alert('TIME UP! Please click "OK" to start a new game. Your score is ' + score + '.')
      location.reload()
    }
  }
  function timerStart () {
    seconds = 30
    $timerPanel.text(seconds + 's')
    timerID = setInterval(timerCount, 1000)
  }
  function timerStop () {
    clearInterval(timerID)
  }
  function startScore () {
    score = 0
    $scorePanel.text(score)
  }
  function addScore () {
    score += 1
    $scorePanel.text(score)
  }
})
