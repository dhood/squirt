(function(){
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

  var mrdeanna = function () {
    var articleElements = readability.grabArticle();
    console.log("the article is:");
    console.log(articleElements);
    if (articleElements){
      var pEls = [];
      for(var j = 0; j < articleElements.length; j++) {
        var articleElement = articleElements[j];
        pEls.push.apply(pEls, articleElement.getElementsByTagName("p"));
      }
      pEls = pEls.filter(onlyUnique);
      for(var i = 0; i < pEls.length; i++) {
        if (pEls[i].innerText) {
          var text = pEls[i].innerHTML;
          var newText = ['<b>', text.slice(0, 1), '</b>', text.slice(1)].join('');
          pEls[i].innerHTML = newText;
        }
      } 
    }
  }

  while (!window.mrd.loaded || !window.mrd.loaded.readability) {}
  console.log("mrdeanna executing")
  mrdeanna();
  console.log("mrdeanna finished")
})();
