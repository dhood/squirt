(function(){
  var mrdeanna = function () {
    //var article = document.getElementsByTagName('article')[0];
    var articleElements = readability.grabArticle();
    console.log("the article is:");
    console.log(articleElements);
    if (articleElements){
      for(var j = 0; j < articleElements.length; j++) {
        var articleElement = articleElements[j];
      var pEls = articleElement.getElementsByTagName("p");
      for(var i = 0; i < pEls.length; i++) {
        if (pEls[i].innerText) {
          var text = pEls[i].innerHTML;
          var newText = ['<b>', text.slice(0, 1), '</b>', text.slice(1)].join('');
          pEls[i].innerHTML = newText;
          console.log("Bolded");
          //console.log(newText);
        } else {
          console.log(false);
        } 
      } 
    }
    }
  }

  while (!window.mrd.loaded || !window.mrd.loaded.readability) {}
  console.log("mrdeanna executing")
  mrdeanna();
  console.log("mrdeanna finished")
})();
