var adBlockEnabled = false;
var debug = true;
var testAd = document.createElement('div');
var returnMessage = document.getElementById('messageAdsblocker');
var returnImage = document.getElementById('imageAdsblocker');
var messageOk = document.getElementById('messageOk');
var imageOk = document.getElementById('imageOk');

testAd.innerHTML = '&nbsp;';
testAd.className = 'adsbox';
document.body.appendChild(testAd);
window.setTimeout(function() {
  if (testAd.offsetHeight === 0) {
    adBlockEnabled = true;
  }
  testAd.remove();
  if (debug) 
  	console.log('AdBlock Enabled? ', adBlockEnabled)
  if (adBlockEnabled) {
  	returnMessage.style.display = 'block';
  	returnImage.style.display = 'block';
  } else {
  	messageOk.style.display = 'block';
  	imageOk.style.display = 'block';
  }
}, 100);
