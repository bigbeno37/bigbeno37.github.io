# gulp-boilerplate
A boilerplate for gulp featuring all of your favourite NPM packages:
* Uglify
* Browsersync
* Stylus
* Minify CSS
* Minify HTML
* Jade
* Gulp Plumber
* Sourcemaps
* PostCSS

On top of this, Gulp Boilerplate also comes preinstalled with fully integrated Stylus packages such as Lost, Rupture, and Nib, and additionally features the best aspects of both Skeleton CSS and Boy, all in one single package. This boilerplate is also made with GitHub Pages in mind, so if you're developing a splash page for your next big plugin, Gulp Boilerplate is here to help. One upload to the 'gh-pages' branch of your repo, and it will be automatically configured.

## Directory Structure
While easily customisable, Gulp Boilerplate comes preinstalled with a prebuilt directory structure in mind. Essentially, all 'final' files go into 'dist' under their correct subfolder, and all 'working' files go into 'src' under their correct subfolder as well. 

## How do I use this?
Open up a terminal, navigate to the directory you downloaded / cloned this repo to and type in 'npm install', and then 'gulp'. After this, all files will be compressed and sent to their respective folders, and BrowserSync will automatically open up a new window using 'index.html'. Simple, right?

## Why Stylus and not Sass?
It's a bit of a lengthy topic, and I'll give you my 100% non-bullshit take on it: because Stylus is easier to write CSS with. Oh, and also the fact that all CSS plugins in this Boilerplate are Stylus plugins. Sorry guys!

## Why Jade and not regular HTML?
There's one big reason for this; the ability to include external jade files into a singular jade file and then have that jade file compile into a regular html file. So, basically how CSS preprocessors do it, but with HTML. What this allows is for components of your pages (especially single page applications) to be split up into multiple different jade files, so that you don't have to endlessly scroll down one massive index.html page to make a change to an element.

Also, Jade makes HTML a breeze. In fact, I've even included a basic HTML coditional mixin to make the HTML conditionals (For instance, <--[if lt IE8]>) more intuitive to write. I've included some examples of this in the src/index.jade file for you to check out.

## Notice about C9.io support
If you aren't planning on using c9.io as your development environment, take a look at lines 22 and 23 of `gulpfile.js`

## License
Gulp Boilerplate is licensed under The Unlicense license. Basically, so long as you don't hold me liable for anything you do with this, do whatever you want with this.
