---
title: "Class for Code Societies at SFPC"

# To set og:image:
# image: http://sfpc.io/static/img/codesocieties/banner.jpg
---
*by Taeyoon Choi*

A class at Code Societies Winter 2019 at the School for Poetic Computation in New York City.  

Distributed Web of Care is an initiative to code to care and code carefully. In this class there will engage in three different activities. First, we will investigate centralized, decentralized, distributed and peer to peer networks. We will analyze the popular technology platforms, focusing on its network infrastructure and terms of services. We will compare them with decentralized alternatives such as [Dat](https://datproject.org) Peer to Peer Protocol and [Scuttlebutt](http://www.scuttlebutt.nz). Second, we will take on performative exercises to explore the feeling of being in a network. We will learn to move around in physical space with strings in order to care, not control, each other. Lastly, we will imagine the kinds of network we want for the future and we will discuss how we can build it with code and code of conduct. We will distribute our code and code of conduct as zines in physical print and data, published with Dat.

Suggested readings 
- [Reboot World](https://newrepublic.com/article/133889/reboot-world) by Paul Ford  
- [Meet Ray Johnson, the Greatest Artist You’ve Never Heard Of](https://www.vanityfair.com/culture/2015/01/ray-johnson-art-pranks) by Rachel Tashjian
- [My website is a shifting house next to a river of knowledge. What could yours be?](https://thecreativeindependent.com/people/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/) by Laurel Schwulst 
- [Dat Zine Library](https://gitlab.com/zachmandeville/dat-zine-library) by Zach Mandeville
- [Distributed Web of Care](https://decentralizedweb.net/distributed-web-of-care/) by Taeyoon Choi
- [Ethics and Archiving the Web](http://distributedweb.care/posts/eaw/) by Distributed Web of Care 
- [At the New York Tech Zine Fair, the Digital and the Tactile Converge](https://hyperallergic.com/474137/at-the-new-york-tech-zine-fair-the-digital-and-the-tactile-converge/) by Megan N. Liberty
- [Low-tech Magazine](https://solar.lowtechmagazine.com/about.html)

In class, we will use terminal, git and Dat. Please familiarize yourself with using the terminal. The class is based on [a  class](https://github.com/tchoi8/distributedwebofcare/tree/codesocieties) from Summer 2018.

# Concepts 

Intersections of Race – Gender – Environment – Disability justice 

- [Code Ecologies](https://github.com/SFPC/codeecologies/tree/master/notes) notes 
- [Artificial Advancements](https://thenewinquiry.com/artificial-advancements/)
- [Computing and Stories](http://sfpc.io/classes/computingandstories/)
- [Diversity at SFPC](https://medium.com/@tchoi8/diversity-at-sfpc-d494d7390375)
- Code of Conduct from [eTextile Spring break](http://etextilespringbreak.org/) 


# Keywords 
- dat create : You are creating your digital archive. 
- dat keys: In case you forget your key, you can get it again.  
- dat share: You will start to seed your archive. 
- dat sync: You can connect to a remote dat, and live sync to it's changes. This also results in you sharing the archive even when the original archive is not available. 

# Step by step 

1. Getting set up
- open up terminal, go to your project directory 
- mkdir datzines
- cd datzines 
- install [npm and node](https://www.npmjs.com/get-npm)
- npm install -g dat  

2. Cloning an archive
- dat clone (Taeyoon's archive unique hash -- revealed in class)
- cd (into the cloned folder)
- ls (show files) 
- dat sync 
- Taeyoon will update the original archive. Students will see their files synchronizing.

3. Making your own archive
- cd .. 
- mkdir yourname_zine
- cd yourname_zine
- create zine. 
- touch inside.txt
- nano inside.txt 


# Dat Zines 

Guidelines for the zines, appropriated from [ASCII Town Workshop](http://designforthe.net/workshops/ascii/index.html) by Mindy Seu. 

- File must be titled yourfirstnamelastname.txt
- no spaces, all lowercase

File must include

Outside: 
(for cover of your zine)

Inside: 
(content of your zine)


## For Outside:

- Width: minimum 20 characters, maximum 50 characters
- Height: minimum 10 lines, maximum 20 lines
- Include a zine cover with your name so your friends know which zine belongs to you.
- In your text file, write “Outside:” (make sure you include the colon) above the house you drew, followed by a hard line break.

## For Inside: 

Below your cover, write “Inside:” followed by a hard line break.

- Monospaced font
- One size (16 pt)
- One weight (no bold, italicized, etc)
- One color (black)
- No links
- No mark-up
- No motion
- There is no width or height restriction for the inside of your zine. Use the negative space creatively. Consider creating movement through scale, placement, and scrolling.

## Publishing 

- dat share, start publishing  
- write your unique key  
- Give the key, written on a piece of paper to a TA or Taeyoon, who will clone it into the main archive
- View dat zines
- Dat clone to Taeyoon's unique hash or use [Beaker Browser](https://beakerbrowser.com/)  

![](http://sfpc.io/static/img/codesocieties/banner.jpg)

### Code Societies 
SFPC’s [Code Societies](http://sfpc.io/codesocieties-winter-19/), is a winter intensive session organized by Melanie Hoff. Code Societies will examine the ideological and corporeal attributes of computation; concentrating on the poetics and politics of culturally embedded software. How do different platforms and processes — including algorithms, data collection, social media, infrastructure, and interface — yield distinct modes of seeing, thinking, feeling, and reinforce existing systems of power? Through a balanced study of critical theory discussion and hands-on coding workshops, students will create small projects that explore and question these ideas. 


[Code Soceties complete syllabus](https://github.com/SFPC/codesocieties-winter-19) 


### Further Reading on P2P Protocols
[Dat Prototcol Guide](https://vtduncan.github.io/how-dat-works/#encryption)
[SSB Protocol Guide](https://ssbc.github.io/scuttlebutt-protocol-guide/)