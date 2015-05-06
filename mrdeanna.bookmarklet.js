(function() {
  var mrd = window.mrd = window.mrd || {};

  if (!mrd.readability) {
    mrd.readability = document.createElement('script');
    mrd.readability.src = '//dhood.github.io/squirt/readability.js';
    document.body.appendChild(mrd.readability);
  }

  if (!mrd.mrdeanna) {
    mrd.mrdeanna = document.createElement('script');
    mrd.mrdeanna.src = '//dhood.github.io/squirt/mrdeanna.js';
    document.body.appendChild(mrd.mrdeanna);
  }
})();