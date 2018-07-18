# readme zine README

**_DID YOU MAKE A COPY AND WANNA MAKE IT YOUR OWN?  CHECK OUT THE CUSTOMIZATION SECTION!_**

This is a zine to hold a short short hard sci-fi story about AI.

# CUSTOMIZATION 

Yr looking at a dat-zine, made in `dat chapbook page style`.

The structure of this zine is set up so you can easily make it your own, and can dive into customization as much as you feel comfortable.  So you can do no coding, a lil coding, or a lot of coding and you can do it all within the comfort of this sweet beaker browser.

**The Basic Steps we Recommend to make this yr own:**

1.) Replace the .txt file with your own.
2.) Replace the distro information with your own info.
3.) Customize the colors-and-fonts stylesheet to add yr own flair.
4.) Send me your Zine!

Before we go into those steps, we should better understand the file structure you see above you so you can navigate it with eeeeeaaase.  

# FILE STRUCTURE!

You are going to hang out mostly in the folders at the top of this repo:

- **aesthetic** // Handles all the styling and assets of yr zine.  You'll likely be editing these quite a bit.
- **binding** // The code that keeps the whole zine together, like the thread that keeps the chap book in one piece. You won't  have to edit this, unless you really wanna hack at this.
- **distro** // This holds all the information for sharing this zine.   You should edit this entirely to make it yr own.
- **paper** // This holds the code that renders the different pages you see.  You likely wont' have to edit this, but you can.  You have to do a bit of setup first tho (see 'HACKING' below).
- **text** // The heart of the zine.  You should edit this entirely.  It's all the words from yr heart.

The files the folders you can largely ignore.  We go over them in the hacking section.

Now! let's customize.

## 1.) Replace the .txt file with your own.

The words of the zine are held within the `text/` folder, and called `something.txt`.  You'll wanna delete the one you find there, and replace it with your own.  You can find more instructions within that folder.

## 2.) Replace the distro information with your own info.

There's two files within `distro/`: info.txt and cover.jpg (or .png or .gif).  Both of these files decide how your zine looks when shared in dat zine libraries.  You'll wanna replace the info.txt file with whatever info feels important (just make sure it contains a title and author).  You'll then replace the cover file with one of your own.  There's more deets in that folder.

## 3.) Customize the colors-and-fonts stylesheet to add yr own flair.

To change the style, you'll wanna checkout the `aesthetic/` folder.  The easiest way to customize is to replace the image within `cover-image/` and then to change the values you find in `stylesheets/colors-and-fonts.css` .  That file is, ideally, an easy way to change the zine without having to do any code.  The code is there in `main.css` if you want it too.

## 4.) Send me your zine!

I wanna see it!  You can send it to me at webmaster@coolguy.website, or on Scuttlebutt where my name is zach! and my public key is:
`@ZqH7Mctu/7DNInxuwl12ECjfrAKUX2tBLq1rOldNhg0=.ed25519`

Also, this readme is entirely yours now--so feel free to edit it up, add yr own email instead of mine, whatever's.  If you think I'd benefit from these changes too, you can send them to me by making a pull request to:

https://gitlab.com/zachmandeville/dat-chapbook-pages-style

# Thank yous!

My thanks to [Jon Kyle](dat://jon-kyle.com/), for creating smarkt, which is how all our text files are written, and for making incredibly inspiring sites that made me wanna make dat zines.

Thanks to [Scuttlebutt](https://scuttlebutt.nz) for being the coolest place on earth, and having awesome devs to learn from/

Thanks to [choo](https://choo.io), for making a complex framework super inviting to use and making you wanna code a bunch.

Thanks to Beaker Browser and Dat and everyone behind it, for building this amazing tool for the chorus.

Thanks to [Petal](https://petalpa.bandcamp.com), [Charmer](https://charmermusic.bandcamp.com), [gobbinjr](https://gobbinjr.bandcamp.com), and [Ean Golden](https://soundcloud.com/ean-golden/gooey-sunset-yoga-mix-1) for making the soundtrack to the creation of this zine.

Thanks to you for reading this!

# HACKING

This zine is all yours, every bit of code is yours to change however you want.  To do this, though, you'll have to do a _small_ amount of setup, and remember a couple of scripts.  Also, you'll have to get into the _c o m m a n d  l i n e_.  If you haven't done this before, you'll only be doing a couple of the same steps (like, you dont' spend much time there), but the command line is where the magic of your computer happens and is a fun place to be.

_Note: I would like to have a command line tutorial here, to help newcomers.  I would like this to not be a garbage one that says shit like 'now you can impress your sysadmin friends' or 'the leet terminal skills you need to be the best dev'.  It should be for all solarpunks.  I think [taming the terminal](https://www.bartbusschots.ie/s/blog/taming-the-terminal/) is great, but a bit long.  If you have any suggestions for this, please place them in the readme and let me know!_

So now the steps

## 1.) copy the zine to yr local directory.

You can do this by clicking the  button in the bottom right of your repo for 'set local directory'. Choose where you want it, and remember that path.

## 2.) Using the command line, navigate to this folder.

It'll be something like `cd ~/Sites/my-zine/`

## 3.) Get the directory set up as a Node repo

This web app was made using Node, an incredible being of language that lets you do magical things with javascript.  So, to hack on this site you'll want to make sure you have node on your computer too.

You can install it here: https://nodejs.org/en/

Node enables coders to create packages of code that help each other accomplish all their tasks. We can grab these packages straight from the command line when we need them, and use collaboration to accomplish our coding dreams.  I used a bunch of these packages to make this app, for example.  

So, to run the code locally(on your machine), you'll want to make sure you have the same packages I do.

You can do this from the command line.  When you are inside the repo type:

`npm install`

This is a command for the helper 'node package manager'.  It will look at all the packages I've listed in the `package.json` file, and install them to yr machine.

## 4.) make the changes to the code you want

You can do this through any text editor, or directly within the beaker browser. 

If you want to see the effect of these changes as you make them, you can run this command from within your directory:

`npm run watch`

You can now open up your dat app in Beaker, click refresh, and see the effect of these changes.  

To stop watching, type `ctrl+c` into yr terminal.

## 5.) Bundle up your code so others can see yr changes too.

We want to use all these helper packages, and these little files of code we've built up, to make the app the best it can be. But we don't want to have to make every site visitor download the same node packages too just to see the page. 

So what  we can do instead is bundle up all the code into one super dense javascript file, that we attach to our website.  So now the vistior is just seeing an index.html page that links to a bundle.js script, which unfurls into this garden of code.

What this all means is that once you've made changes, you'll want to build them up into a new bundle.js file.  You can do so with this command:

`npm run build`

Let it run, and when you see a prompt again it means it's finished and yr good to go!

## NOTE!

These steps are only if you want to change the javascript code, or make changes to the structural layout that underlies this app.  Most customization you could do with just CSS, and that doesn't require all this node stuff.  But there are many apps that are built with node that let you do incredible things, and I intended this zine to be a gentle introduction to some of these node concepts.  So if you wanted to try coding, try here, and if you have questions about that, let me know!

My email is webmaster@coolguy.website!
