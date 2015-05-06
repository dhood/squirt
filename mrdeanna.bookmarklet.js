(function() {
  var mrd = window.mrd = window.mrd || {};

  document.addEventListener('readability.ready', function () {
    mrd.loaded = {};
    mrd.loaded.readability = true;
  }, false);

  if (!mrd.readability) {
    mrd.readability = document.createElement('script');
    mrd.readability.src = '//dhood.github.io/squirt/readability.js';
    document.body.appendChild(mrd.readability);
  } else {
    console.log("mrd.readability exists");
  }

  if (!mrd.mrdeanna) {
    mrd.mrdeanna = document.createElement('script');
    mrd.mrdeanna.src = '//dhood.github.io/squirt/mrdeanna.js';
    document.body.appendChild(mrd.mrdeanna);
  } else {
    console.log("mrd.mrdeanna exists");
  }
})();