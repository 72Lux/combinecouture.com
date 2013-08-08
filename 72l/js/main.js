/* Author:
 72Lux
*/

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

function validateDomain(website) {
  var re = /^(?:https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return re.test(website);
};

function hasCharacters(theString) {
  var re = /[a-zA-Z]/;
  return re.test(theString);
}

function isError($element) {
  $element.addClass('error');
}

function noError($element) {
  $element.removeClass('error');
}

$(document).ready(function(){
  $(".required").bind('focusout',function(){
    var _val = $(this).val();
    var _name = $(this).attr('name');
    var $parent = $(this).parents('.control-group');

    if (hasCharacters(_val)) {
      noError($parent);
    }
    else {
      isError($parent);
    }

    if (_name === 'Field22') {
      if (validateEmail(_val)) {
        noError($parent);
      }
      else {
        isError($parent);
      }
    }

    if (_name === 'Field23') {
      if (validateDomain(_val)) {
        noError($parent);
      }
      else {
        isError($parent);
      }
    }

  });

  $('.send').click(function(e){
    e.preventDefault();
    var _valid = true;
    $('.required').each(function(i, val){
      var _val = $(this).val();
      var _name = $(this).attr('name');
      var $parent = $(this).parents('.control-group');

      if (hasCharacters(_val)) {
        noError($parent);
      }
      else {
        isError($parent);
        _valid = false;
      }

      if (_name === 'Field22') {
        if (validateEmail(_val)) {
          noError($parent);
        }
        else {
          isError($parent);
          _valid = false;
        }
      }

      if (_name === 'Field23') {
        if (validateDomain(_val)) {
          noError($parent);
        }
        else {
          isError($parent);
          _valid = false;
        }
      }

    });

    if (_valid) {$("form#contact-form").submit();}
  });

});