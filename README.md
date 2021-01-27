# My Functions
## Shortcuts
### Shortcuts
```
shortcut('q',function(){...}); -- ctrl + q
shortcut('shift+f',()=>{...}); -- ctrl + shift + f
```
**Features:**
  - No matter case, spaces and order;
  - Use with `CTRL + Key`
  - Use with `CTRL + SHIFT + Key`

## Styling
### Add styles to element or to outer <style>
```
css('#item',{"height":100, "width":"50%"}); -- height: 100px; width: 50%;  // Automatically convert number to num+"px" if it's not string
css('.item',{...})  -- styling the first el with class ".item"
css,('.item',{...},true) -- outer styles. Moves to <style> tag at the end of the page
```
**Features:**
  - Automatically convert number to num+"px" if it's not string
  - Styling the first el by selector
  - Styling all elements by selector
  - Styles to outer <style> tag at the end of the page
  
  ## DOM
  ### Create DOM elements
```
//RETURNS <div class="newclass" some-attr=true><b class="bold">Hello world!</b></div>
dom("div",{class:"newclass","some-attr":true},"<b class="bold">Hello world!</b>");
//The same result, but with nested element
dom("div",{class:"newclass","some-attr":true},dom("b",{class:"bold"},"Hello world!"))
//Multiple nested elements
dom(...,...,["<img src="image.png">",addEl(...),...])
```
**Features:**
  - Create DOM element with attributes and innerHTML
  - Nested elements by using same function
  - Multiple nested elements
 
 ## Copy From
 ### Copy code from block and insert instead of script. Script automatically deletes after finished
 ```
//inner HTML
<div class="qwerty"><span>Hello world!</span></div>
<script>copyFrom(".qwerty")</script> 
//RESULT: <span>Hello world!</span>

//outer HTML
<div class="qwerty"><span>Hello world!</span></div>
<script>copyFrom(".qwerty",true)</script>
//RESULT: <div class="qwerty"><span>Hello world!</span></div>
 ```
 
 ## Trigger on view
 > `inView(elementSelector, function(){});`
 ### Trigger function when element in view
 ```
 inView("#test",function(){alert("hello world!")});
 ```
 
 ## SubMatrix
 > `arr.subMatrix(startX,startY,amountX,amountY)`
 ### Cut submatrix from matrix
 ```
 arr = [
		['q','w','e','r'],
		['t','y','u','i'],
		['o','p','a,','s'],
	];
	//get from row 1, column 0, length by rows 2, length by cols 2:
	console.log(arr.subMatrix(1,0,2,2));
  //RESULT: [['t','y'],['o','p']]
 ```
