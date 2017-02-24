var adBlockEnabled = false;
var testAd = document.createElement('div');
testAd.innerHTML = '&nbsp;';
testAd.className = 'adsbox';
document.body.appendChild(testAd);
window.setTimeout(function() {
  if (testAd.offsetHeight === 0) {
    adBlockEnabled = true;
  }
  testAd.remove();
  console.log('AdBlock Enabled? ', adBlockEnabled)
}, 100);
