console.log("May the odds be ever in your favor");

var $button = $('#ready');
var $challenge = $('#challenges');
var $moar = "<div id='moar'></div>";
var $nextButton = "<button id='next'>Next</button>";

function handleButton(evt) {
  $.get('/challenges', function(res) {
    var $list = '<ul>';
    res.forEach( function(val) {
      return $list += '<li>' + val.id + ': ' + val.body + '</li>';
    })
    $list += '</ul>';
    $challenge.append($list);
  })
  console.log("clicked");
  createElems();
  $nextButton.click(nextTwo);
}
$button.click(handleButton);

function createElems() {
  $('.wrapper').append("<button id='next'>Next</button>");
  $challenge.after("<div id='moar'></div>");
  $nextButton = $('#next');
  $moar = $('#moar');
}

function nextTwo(evt) {
  $.get('/challenges?next=true', handleRes);
};

function handleRes(res) {
  var resStr = concat(res);
  $moar.append(resStr);
}

function concat(arr) {
  var $list = '<ul>';
  arr.forEach(function(val){
    return $list += '<li>' + val.id + ': ' + val.body + '</li>';
  })
  $list += '</ul>';
  return $list;
};
