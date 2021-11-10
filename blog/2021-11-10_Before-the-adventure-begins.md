---
authors: keneanung
---
# Before the Adventure Begins #

What is the goal of this blog? Why the Nexus client? What's the plan for the adventure? I'll try to answer these questions with this blog post
before we begin the journey.

<!--truncate-->

## The goal of this blog ##

This blog is a stream of consciousness documentation of my work with scripts for the Iron Realms Nexus client. The scripting community looks a little like the Wild West of Old: Each to their own, mapped in broad strokes, and everything goes. Much knowledge is either word-of-mouth or tribal. There also seems to be a lack of publicly available complex scripts that can be used and dissected for learning purposes. I hope to foster a more active community by describing my path to solve issues I encounter in my programs. Additionally, I'd like to supply the community with tools to come up with their solutions.

## I'm already invested in another MUD client, so why do Nexus? ##

Nexus is a browser-based MUD client written in JavaScript by Iron Realms entertainment. New players usually use this client for their first steps in the games. A reason for its wide use among established players is its availability: As a browser-based program, it's usable on almost any device and platform.

My bashing script for Achaea, on the other hand, is only available for Mudlet, which I wrote and published when I was still playing the game myself. It takes much repetitiveness out of the hunting (bashing) in the game. Instead, the player can concentrate on other things like planning their next roleplay or interacting with others. The script also makes hunting a little safer by trying to anticipate too much danger and running away.

After the initial release of the script, I created a port for Nexus and hoped somebody would pick it up. Sadly this was not the case, and many changes to the game left the script in an almost unusable state. I have been getting many requests lately to update the script. The frequency piqued my interest, and as I currently have some free capacity and renewed curiosity for JavaScript development, the cogs in my head started spinning.

## What's the plan? ##

Good planning is already half the journey, they say. But in fact, no plan survives the first clash of enemy lines.
So what planning is there to do? Right, plan what you know you want now and expand as you go, just as an agile mind would do.

The scripting interface of Nexus is serviceable for smaller scripts and people new to coding. But as a professional developer, I'm missing some features in no particular order:

- Syntax highlighting
- Testability
- Linting
- Source control
- Release management
- Allowing multiple parties to contribute
- Type safety

There might be more items, but this list persuaded me to ditch the scripting abilities of the client itself and use the tools I'm familiar with. These include GitHub or collaboration, release management and source control. TypeScript is a great way to ensure type safety in JavaScript and avoid errors that way. JavaScript has tools with huge communities for testability and linting. However, they work outside of the browser.

Using all these tools in conjunction would need a lot of configuration and boilerplate code. If I wanted other people to learn from my setup and re-use it, I needed a way to share it easily. Enter GitHub template repository. A template repository allows a user to clone a repository without a shared history between the two. I spent five days setting up all the tools I wanted to use and glueing them together. The result is at [the Nexus script template repository](https://github.com/keneanung/iron-realms-nexus-script-template).

## Conclusion ##

With that out of the way, I feel well prepared to start my journey on the Nexus planet. Who knows where my journey leads me.
