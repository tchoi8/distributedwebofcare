---
layout: post
title: "Skillshares: Peers in Practice"
tags: [text, tutorial]
published: false

# To set og:image:
# image: ...
---

# Cabal
## Joining a distributed (private) chat room!

![]({{ site.base-url }}/media/dat/cabal.png)


- Callil, DWC fellow 

Start with a catch phrase, such as : "Have you ever felt like you need a more private chat room? Have you ever felt like the internet is listening to your conversation, and suggesting product adverstiements? We may have an alternative, private chat room. It requires a bit of set up, but it's worth explorting!"

One of the options available is [Cabal](https://github.com/cabal-club/cabal), which is a messaging client for the terminal that is like a lightweight, DIY, Punk slack! To get started chatting on the distributed web, you'll need to use Dat. We are going to walk through setting up

But first, what is Dat? And how does this work?

[Dat](https://datproject.org/) is a peer to peer data sharing protocol that allows people to collectively distribute and access data. Cabal is an example of a open source, distributed app with no central servers and distributed model of ownership.

In Cabal, a simple database file is initially created and shared to store chat messages. When a new user joins a cabal, they make a copy of this database file on their machine and become peers of this data through the Dat network. When a new message is shared to the network (the swarm) all the peers that are online will make a copy of that record in the database on their local machine. Each person in the Cabal helps keep the data online and shares the responsibility for hosting the chat.

This is in stark contrast to many messaging services which require advertisements or paid plans to maintain the database of message and persistant availability. Recently, Slack's AWS instances went down cutting off thousands of teams from access to their main communication tool. Slack's free option also limits teams to 10,000 messages - this puts messaging data behind paywall. A peer to peer chat app like Cabal alleviates both of these pain points by eliminating a single point of failure (as long as one peer is online, the chat is up) and puts the ownership & responsibility of hosting in the hands of every participant in the community. 

In principle this would mean that the users are free from the burden of finding central hosting and retain ownership over their community's data. It's important to point out that there are a lot of complexities around privacy and owndership which Cabal doesn't yet fully address. For instance, the current database model allows anyone to modify the chat history, and there is no way to kick or ban misbehaving users. For an extremely large chat, although unlikley right now, the data might grow very large over time taking up space on your machine or take some time to sync from the peer network. There are other valid concerns about the security risks of using distributed systems. For now, let's consider the possibilities and risks objectively, and explore what's possible. 

If each person owns the network, what changes about the financial model needed to maintain a network? For instance, do we really want advertisement driven social networks? What dynamics would change when the users own the data? Also how does a community enforce code of conducts and best behaviors without central control? Maybe we can think about how we might solve some of the social and intentity issues present in these spaces through building examples of healthy and creative distributed communities together.

Let's get started...

[insert image of a computer person asking a question]

_Already have npm installed? Type this in your terminal to join our chatroom._

`npm install -g npx && npx cabal --key dat://e0413ba557a81fa2d07f2969eb8e0e689ebf670a2c73d59637f9e192f1ae3704`

Otherwise...

## Install node version manager by pasting this code into your terminal

If you use macosx, you can open terminal from the finder, click the magnifying glass, and type finder. 
A small box will pop open. This is your door to the inner workings of the computer.  

And copy and paste this code.

```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash```

![]({{ site.base-url }}/media/dat/cabal.png)

This will install node version manager on your machine, we have found that this is important to ensure that npm works with the least amount of problems on your machine.

Follow the instructions when the script completes and restart your terminal session.

## Install node on your machine


- What is node? 

- We need node because 


Run this script to install node.

`nvm install node`

You should see something like this in your terminal

`
Downloading and installing node v10.6.0...
Downloading https://nodejs.org/dist/v10.6.0/node-v10.6.0-darwin-x64.tar.xz...
######################################################################## 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v10.6.0 (npm v6.1.0)
`

Now you can test whether you have npm installed correctly by typing `npm -v` and you should see something like `6.1.0` returned in your console.

## Make a directory

_Already know how to do this? Make a directory and cd into it to install cabal then [go to the install instructions](#4)_

We now need to decide on a place to store our cabal chat app. You might choose to make a folder called `p2p` or `dat` inside of which we will put cabal. To do this, you'll need to understand a bit about navigating your computer's file structure through the terminal. We can use `cd` (change directory) and `mkdir` (make directory) to do this.

[ illustration of a person going into a folder with cd ]

A new terminal session will usually start at `~` which is the root directory of your computer. This is the most zoomed out you can be in this part of your computer. Inside of this directory (folder) there are other folders like your Desktop, Documents or any other folders you'd placed there. If you'd like to get a sense of what's in `~`, type `ls` (which means list) into your terminal and hit enter. You should see a list of directories. This list shows you what you can `cd` into. 

Type `cd Documents` to change directories into your Documents folder. Inside of the Documents folder, we can now make a new directory called Dat by typing:

`mkdir Dat && cd Dat`

This line says _"make a new directory called Dat and change directory to this new directory"_. 

## Install Cabal <a name="4"></a>

We are going to clone the cabal files from github into our new Dat folder - this is like downloading an app, but instead we get a collection of files. To grab the latest from github run:

`git clone https://github.com/cabal-club/cabal.git && cd cabal`

This will install cabal and then open the folder. Next we need to install the dependencies to run the project.

`npm install`

[insert gif of install screen ]

This might take a bit, wait for the progress bar to complete. When it's done, you're ready to start chatting with us!


`node cli.js --key dat://e0413ba557a81fa2d07f2969eb8e0e689ebf670a2c73d59637f9e192f1ae3704`

You'll join the chat with the name `conspirator`. You can see how to change this by typing `/help`.

For instance to change your name, type `/nick your_new_name`. Send us a message in the default channel to say hi!

- write more about How to use chat in Cabal.

- There's a way to make new channels. You type /j newchannel and...

-also, you can jump between the channels by control 

[final graphic of a group of people chatting on distributed web]

final questions

Here are some more questions for us to consider.

How to have a private conversation? you'd need to make your own chat group with cabal. - how to do it? 

What are the features you wish to see in the program? 

- prevent users changing their names to be like someone else, privacy, integrity of information isses
- easier install and access
- phone apps, or SMS based text 


