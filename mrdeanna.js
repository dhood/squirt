(function(){
  var article = document.getElementsByTagName('article')[0];
    if (article){
      for(var i = 0; i < article.children.length; i++) {
        if (article.children[i].innerText) {
          var text = article.children[i].innerHTML;
          var newText = ['<b>', text.slice(0, 1), '</b>', text.slice(1)].join('');
          article.children[i].innerHTML = newText;
          console.log("Bolded");
          console.log(newText);
        } else {
          console.log(false);
        } 
      } 
    }
  }
)();
