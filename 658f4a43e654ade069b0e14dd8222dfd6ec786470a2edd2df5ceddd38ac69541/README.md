# Dat Zine Library

It's a zine library for the Chorus!

# Installing

First, set up the App:
```
git clone https://gitlab.com/zachmandeville/dat-zine-library.git
cd dat-zine-library
npm install
npm run build
npm start
```
Then add it to yr BeakerBrowser:

```
- Open Beaker
- Click the Hamburger Icon in the top Right
- choose Create New > From Folder
- select dat-zine-library
- Click the link in the top right to view it!
```

# Usage
 
To add a new dat zine:
- right click and then 'view files'
- click on the 'zines' folder
- Click 'New'
- add a txt file named after your zine that looks like this: 
 
```
title: name of zine
----
url: dat:/ads;lkfajdsgklajglkah3j2kljakhdh32j.sha256
```
Click save and you should be good.  If not, lemme know!

# Background

I get really excited about the creative world offered Dat, and Beaker Browser.  They (along with Scuttlebutt), are pointing to the place that comes after the web.  We call that place The Chorus.  This is a tool made exclusively for the Chorus.

With Dat, anyone can have _abundant_ websites.  since there are no server costs, you don't have to think about one central home for your stuff, and you don't have to adjust all the things you make to fit within the limits of the platform or site you are on.  Instead, if you wanna make a new thing...you just make a new dat site.  This is _really cool_.

I realized that dat sites can be just like zines.  You can make one about whatever you like, fill it with what is important to you at that moment, and then give it out to whoever you want.  There is no hierarchy to who can make or read a dat site, and there are no rules for how they should look or what they should be about.  

So if I want a world filled with dat zines, I thought i should try to build a zine library to hold my favorites in.  And thus: THIS!

# WHAT IS THIS?

It's a tool for you to hold the zines that are important to you, so that others can find them more easily. 

Once you start using this site, it will be _your_ personal library.  You can share it with others who can then fork it and build up their libraries too.  Then you can share libraries like a good ol' fashioned web ring.

It also is intended to help build a practice of making dat zines, and a method  to signal to other cool solarpunks that you wanna share the zine you just made.  

# HOW DO I USE THIS? WHAT DO YOU MEAN?

## First: Make a Zine

To start, you wanna make or find a dat zine.  This can be any sort of dat archive that includes a `distro` folder.  This folder holds the information you want to make sure is included whenever someone adds yr zine to their library.  So inside the distro folder is the cover of your zine and an info.txt file.  That file looks something like this:

```
title: Fun Baking Time Zine
----
authors:
  - Zach
  - Angelica
----
materials: HTML, CSS, Choo
----
sharing: Share and fork and modify as you see fit, but please attribute any of these words back to me.
----
notes: We made this zine as a rainy day project.  It ended up taking a week, but it was a rainy week too so it all worked out.

```
The cover can be any sorta .jpg, .png, or .gif

## Add the Zine to yr Library!

Now, go to your dat-zine-library site, view the files, and navigate yourself to the zine folder.  In that folder you'll add a new .txt file called `the-name-of-the-zine.txt`

That file should look like so:

```
// filename is fun-baking-time-zine.txt
title: Fun Baking Time Zine
----
url: dat:/238r23uotu98329591295j23813j123j.sha256
----
notes:
Zach and Angelica gave me this zine the last time we hung out cos I wanted to know how to make Angelica's cinnamon chocolate cookies.
```

Then just press save and yr done!

The dat site will now include this new entry, your notes about it, the cover image, and the relevant info taken from that info.txt file!





