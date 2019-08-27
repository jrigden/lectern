![GitHub commit activity](https://img.shields.io/github/commit-activity/m/mr-rigden/lectern)


![GitHub All Releases](https://img.shields.io/github/downloads/mr-rigden/lectern/total)



<pre>
  _        ______    _____   _______   ______   _____    _   _ 
 | |      |  ____|  / ____| |__   __| |  ____| |  __ \  | \ | |
 | |      | |__    | |         | |    | |__    | |__) | |  \| |
 | |      |  __|   | |         | |    |  __|   |  _  /  | . ` |
 | |____  | |____  | |____     | |    | |____  | | \ \  | |\  |
 |______| |______|  \_____|    |_|    |______| |_|  \_\ |_| \_|
</pre>

# Lecturn

![GitHub release (latest by date)](https://img.shields.io/github/v/release/mr-rigden/lectern?style=flat-square)  ![GitHub](https://img.shields.io/github/license/mr-rigden/lectern?style=flat-square) ![GitHub All Releases](https://img.shields.io/github/downloads/mr-rigden/lectern/total?style=flat-square)  

***WARNING**: This is a project in in **ALPHA**. You should expect to encounter many broken things and backwards comparability should not be expected. Please break it!*

Lectern is a web based open source presentation solution. No server is required. 

## Demo
* Lectern feature demo


## Installation
Lectern is just HTML, CSS, and javascript. There is no need for a server. Just clone it and start editing.

    git clone https://github.com/mr-rigden/lectern.git


## Navigation
* Navigate to the next slide with the right arrow key or by clicking on the right hand quarter of the screen.
* Navigate to the previous slide with the left arrow key or by clicking on the left hand quarter of the screen.
* Reveal the next hidden item on the current slide with the down arrow or clicking on the lower quarter of the screen. 
* Hide the last revealed item on the current slide with the down up or clicking on the upper quarter of the screen. 


## Customization
The style sheet is very simple. Any changes should be pretty straight forward. Just override the default css. Here are some examples:

Custom background image:

    #container {
	    background-image: url("https://yourserver.com/cat,jpg");
    }

Custom base font:

    html {
    	font-family: canada-type-gibson, sans-serif;
    }

Customize the code font:

    code {
    	font-family: courier-prime, monospace;
    }



## Editing

### Create New Slides
You can add new slide by creating a div with a class of slide.

    <div class="slide"></div>
    
  Then just add whatever html you want. Check for the demo for some ideas!

### Hidden Item
  

### Image Sizes
Image can be sized with rems. 

    <img src="cat.jpg"  style="height:9rem;width:auto;">

Images can also be made by adding the fullscreen class to a slide div. The image in this div will be fullscreen.

    <div class="slide fullscreen"></div>

### Rows
Inside a slide div we can have content in rows. Just make another div with the class row. Each div inside will be an item in the row.

    <div  class="slide">
    	<div class="row">
    		<div>
    			<p>Row1</p>
    		</div>
    		<div>
    			<p>Row 2</p>
    		</div>
    		<div>
    			<p>Row 3</p>
    		</div>
    	<div>
    <div>








## Contributing

1. Fork it (<https://github.com/mr-rigden/lectern/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
6. 
## License
**MIT License**

Copyright (c) 2019 Jason Rigden

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


```


