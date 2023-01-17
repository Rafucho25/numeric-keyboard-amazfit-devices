# Numeric keyboard for amazfit devices

A simple numeric keyboard for amazfit band 7, GTS 4, GTS 4 mini and GTS 3.

## How to install

* Download the utils folder at the same level as the page folder.

## How it works

* The constructor accept one parameter: the coordinate "y" of the keyboard this is for example if you want to display something before the keyboard you can. 
* You can use the file example.js(put in the page folder) to see the keyboard in action 

## How to use(example for band 7)

* Add this line to the page you want to display the keyboard:
 ```javascript
import { keyboard_band7 } from '../utils/keyboard' //add or remove ../ depends of your page folder location 
```
* Create an instance:
 ```javascript
const keyboard = new keyboard_band7()
```
* Get text:
 ```javascript
keyboard.text_value
```

* For GTS 4 and gts 3: 
```javascript
import { keyboard_gts3_4 } from '../utils/keyboard' 
```

* For GTS 4 mini: 
```javascript
import { keyboard_gts4_mini } from '../utils/keyboard' 
```

## Screenshot
<h3><img align="center" src="https://user-images.githubusercontent.com/16562078/211363831-de69a143-ae50-448a-95e7-9d684fc634e5.png"> Default</h3>

<h3><img align="center" src="https://user-images.githubusercontent.com/16562078/211368692-db0438c1-9080-4032-9bc3-771c54914adc.png"> Parameter "y" = 100</h3>

## Notes
This is my first project using javascript so maybe there are ways to improve the quality of the code.

Let me know if you have any ideas or recommendations to improve.