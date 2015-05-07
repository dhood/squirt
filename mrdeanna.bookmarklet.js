(function() {
  var mrd = window.mrd = window.mrd || {};

  document.addEventListener('readability.ready', function () {
    mrd.loaded = {};
    mrd.loaded.readability = true; 
    console.log("Readibility loaded");
  }, false);

  if (!mrd.readability) {
    console.log("mrd.readability didn't exist");
    mrd.readability = document.createElement('script');
    mrd.readability.src = '//dhood.github.io/squirt/readability.js';
    document.body.appendChild(mrd.readability);
  } else {
    console.log("mrd.readability exists");
  }

  if (!mrd.mrdeanna) {
    console.log("mrd.mrdeanna didn't exist");
    mrd.mrdeanna = document.createElement('script');
    mrd.mrdeanna.src = '//dhood.github.io/squirt/mrdeanna.js';
    document.body.appendChild(mrd.mrdeanna);
  } else {
    console.log("mrd.mrdeanna exists");
  }
})();
