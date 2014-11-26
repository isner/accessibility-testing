(function(){

var codes = document.querySelectorAll('code');
[].slice.call(codes).forEach(function (code) {
  code.innerHTML = markup_beauty({
    source: code.innerHTML,
  });
  code.className = ''; // removes 'hidden' class
});

})();