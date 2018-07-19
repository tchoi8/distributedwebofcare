# Binding

This folder holds all the pure javascript functions that, like the binding thread and glue of a well-made chapbook, keep this whole thing together.

You likely don't need to touch this folder, but if you want to hack at it then here's some tips! (also, please make sure to read the 'hacking' section on the main readme for useful tips!)

# This Folder

The folder contents are laid out as:

- **assembleZine.js**: The main body of code, that runs a bunch of tools upon the page loading.  It is here you'll find the code to gather up the different .txt files and turn them objects that can be read by each page.
- **textNavigation**: This handles the logic for moving back and forth between pages when using the arrow buttons, or the arrow keys.  The other half of this can be found in `paper/text.js`

## About the Code

This whole zine is written using [choo](https://choo.io), a cute little framework for making apps and zines.  choo has a notion of the zine's 'state', and different parts of the zine emitting signals to change the state.  It is the state that determines what page we are on (state.index), and even what the pages are (state.paragraphs).  This is why you'll see different mentions of state and emitters in each page.

## Caveat
I wrote it using choo because I am trying to learn it...so the code might be a bit fragile.  If you haven't coded much and wanna mess with this code, and accidentally break the functioning of the zine...It's okay! The fault likely lies more with me than you.


If you are curious to hack on this, but don't know choo, the [website](https://choo.io) is super pleasant, and has a great opening tutorial.

And if you _do_ know choo I am always keen to hear helpful, plainspoken tips on how to use it better!
