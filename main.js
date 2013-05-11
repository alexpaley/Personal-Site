var hasClassName = function(el, className) {
  return !!~(' ' + el.className + ' ').indexOf(' ' + className + ' ');
};

var toggleClassName = function(el, className) {

  (function toggleText(tagName, position, text) {
    var saved = "create";

    if(!hasClassName(el, className)) {
      el.className += ' ' + className;
      document.getElementsByTagName(tagName, el)[position].innerHTML = text;
      return;
    }

    console.log(el.className);

    el.className = el.className.replace(new RegExp('\\s*' + className + '\\s*'), ' ');
    document.getElementsByTagName(tagName, el)[position].innerHTML = saved;
  })('h3', 3, "my projects");
};

document.getElementById('create').addEventListener('click', function (e) {
  e.preventDefault();
  toggleClassName(document.getElementsByTagName('body')[0], 'transition');
});

// toggle to preserve original text
// store original text
// if class transition is on the element
//   text = "my projects"
// else
//   text = "create"

// var toggleText = function(el, className, text) {
//   var element = document.getElementsByClassName('create');
// }

// var el = document.getElementsByTagName('h3')[3].innerHTML;

// var element = document.getElementsByTagName('body');
// document.getElementsByTagName('h3', element)[3].innerHTML;