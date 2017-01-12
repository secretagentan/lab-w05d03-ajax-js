console.log("May the odds be ever in your favor");

var $button = $('#ready');
var $challenge = $('#challenges');
// var $moar = "<div id='moar'></div>";
// var $nextButton = "<button id='next'>Next</button>";

function handleButton(evt) {
  $.get('/challenges', function(res) {
    var $list = '<ul>';
    res.forEach( function(val) {
      return $list += '<li><a href="/challenges/"' + val.id + '/">' + val.body + '</a></li>';
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
  $challenge.after("<div id='moar'></div>");
  $moar = $('#moar');
  $moar.append("<button id='next'>Next</button>");
  $nextButton = $('#next');
  $moar.on('click', secret);
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
    return $list += '<li><a href="/challenges/' + val.id + '/">' + val.body + '</a></li>';
  })
  $list += '</ul>';
  return $list;
};

// Challenge #7

function secret(evt) {
  var targ = evt.target;
  // console.log('secret');
  // console.log(targ);
  if ( targ === $moar.find('li')[2]) {
    // console.log(targ);
    $.ajax({
      url:'https://mighty-caverns-93139.herokuapp.com/help',
      headers: {
        'x-secret': 'shh',
      },
      type: 'GET',
      success: function(msg) {
         console.log(msg);
         $moar.children().eq(1).append('<li style="color:red"> Psst: ' + msg.message + '</li>');
      }
    })
    $.ajax({
      url: 'https://mighty-caverns-93139.herokuapp.com/solution',
      type: 'POST',
      data: {
        'answer' : 'CORS'
      },
      success: function(msg) {
        console.log(msg);
        $moar.children().eq(2).append('<li style="color:limegreen"> Hey! ' + msg.data.hint + '<br>' + msg.data.message + '</li>');
      },
      error: function(msg) {
        console.log('failure');
      }
    })
  }
}

var decodedSix = window.atob('SW4gPGNvZGU+cHVibGljL21haW4uanM8L2NvZGU+IHVwZGF0ZSA8Y29kZT5yZW5kZXJDaGFsbGVuZ2U8L2NvZGU+IHRvIG91dHB1dCA8Y29kZT4mbHQ7YSBocmVmPSIvY2hhbGxlbmdlcy9baWRdIiZndDtbQ2hhbGxlbmdlXSZsdDsvYSZndDs8L2NvZGU+');
var decodedEight = window.atob('T24gPGNvZGU+c2VydmVyLmpzPC9jb2RlPiwgaGFuZGxlIEdFVCByZXF1ZXN0cyB0byA8Y29kZT4vY2hhbGxlbmdlcy9baWRdPC9jb2RlPiBhbmQgcmV0dXJuIE9OTFkgdGhhdCBjaGFsbGVuZ2UgYXMgSlNPTg==');
var decodedNine = window.atob('UmVhZCB0aHJvdWdoIGh0dHBzOi8vZXhwcmVzc2pzLmNvbS9lbi9ndWlkZS91c2luZy10ZW1wbGF0ZS1lbmdpbmVzLmh0bWw=');
var decodedTen = window.atob('UmVzZWFyY2ggLSB3aGF0IGlzIHRoZSBkZWZhdWx0IGRpcmVjdG9yeSB3aGVyZSBleHByZXNzIGxvb2tzIGZvciB0ZW1wbGF0ZSBmaWxlcz8=');
var decodedEleven = window.atob('SW5zdGFsbCBhbmQgc2F2ZSB0aGUgbW9kdWxlICJlanMi');
var decodedTwelve = window.atob('Q29uZmlndXJlIHRoZSBleHByZXNzIHZpZXcgZW5naW5lIHRvIHVzZSAiZWpzIg==');

console.log(decodedSix);
console.log(decodedEight);
console.log(decodedNine);
console.log(decodedTen);
console.log(decodedEleven);
console.log(decodedTwelve);

try {
  window.atob('hello');
} catch (err) {
  console.log('haha');
};



