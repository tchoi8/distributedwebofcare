# P A P E R

This folder holds the code that determines how your words are presented to the visitor, much like the paper on which you'd print the words in a zine.  In other words, it's not the 'style' of your site, but the layout and structure...essentially the HTML.

# Folder Structure

- **cover.js**:  The first page of your zine
- **text.js**: The innards of your zine.  Each inner page is identically laid out.
- **colophon.js**:  The last page, that holds both the info about the words and the info about the publication and sharing (so a mix of author's note and traditional publisher's colophon).  

# Hacking on HTML that is also Javascript.

These pages are, primarily, to create the HTML but it does so entirely through javascript.  That's cos I made the site with [choo](https://choo.io).  So you don't actually need to mess with the javascript, just look for the parts that _look_ like html and adjust that.

The things in brackets `${like this}` are most often references to particular aspects of the app (like the current paragraph yr on, or the title or what-have you.  You can move them around all you like, but it's best to keep them in the code and looking the way they do. And feel free to add more html, but changing the code _around_ the html could make the rest of the app work weird.  You can see why I used Choo in the `binding/` readme, but essentially it's cos I'm trying to get better at everything.  If you have any tips on this (specific to coding) send em' my way!

Also, to do the hacking on it, you'll need to set up the app a lil' bit to put it in a 'dev mode' for you.  This is outlined in the HACKING section of the main README, and it's only a couple steps!  

Also, as I think of it, if you have any loving, well-intentioned tips about _anything_ in life, send them my way.  I'm trying to improve myself across the board!








