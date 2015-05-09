(function(){
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

  var lastItem = function(list){
    return list[list.length - 1];
  }

  var processParagraph = function (pElem) {
    var text = pElem.innerHTML;
    var textItems = text.split(' ');
    var index = 0;
    while (index < textItems.length && lastItem(textItems[index]) != '>' ){index++};
    if(index < textItems.length){
      var newText = [textItems.slice(0, index) + '<b>' + textItems.slice(index, index+1) + '</b>' + textItems.slice(index+1)].join('');
      pElem.innerHTML = newText;
    }
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
          processParagraph(pEls[i]);
        }
      } 
    }
  }

  while (!window.mrd.loaded || !window.mrd.loaded.readability) {}
  console.log("mrdeanna executing")
  mrdeanna();
  console.log("mrdeanna finished")
})();
