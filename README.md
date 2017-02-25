## Try the [demonstation](https://atmoner.github.io/Adblock-detector/)!

![Adblock-detector](https://i.imgur.com/9iLhSGe.png)
![Adblock-detector](https://i.imgur.com/dVcBcPL.png)

## How to use it?  

* Include this content in your footer: adblockDetector.js
```
<script src="adblockDetector.js"></script>
```
* Add this code in your html page:
```
<b id="messageAdsblocker" style="display:none">Ads block is detected!</b>
<b id="messageOk" style="display:none">Ads block is not detected!</b>
```
* (Optional) Use this css:
```
#messageAdsblocker {
  background-color:#F78181;
  border:1px solid #DF0101;
  padding:5px;
  margin-bottom: 30px; 
  /* arrondi */
  -moz-border-radius:7px;
  -webkit-border-radius:7px;
  border-radius:7px;
}
#messageOk {
  background-color:#9FF781;
  border:1px solid #31B404;
  padding:5px;
  margin-bottom: 30px; 
  /* arrondi */
  -moz-border-radius:7px;
  -webkit-border-radius:7px;
  border-radius:7px;
}
```
