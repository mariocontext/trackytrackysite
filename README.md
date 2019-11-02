# Designer Rapid Prototyping Tool

## Why

After doing an app project that consisted of 400 high fidelity art boards in Sketch, I wound up asking myself why I was doing things this way. It felt like wasted work, particularly when I had to hand it off to the devs. That inspired me to look for a good html/css solution to rapidly prototype designs that could be be given feedback on various devices and also create something that could be leveraged in the final product.

While Bootstrap and jQuery have been around for a while, but I wanted to use a system where I didn't have to fight the css framework and was more in line with a modern component based approach for app design.

I settled on Gridsome which is built on Vue js and Tailwind which takes a utility first approach to css styling while still being able to choose reusable styles when you want to. Gridsome is all about consuming content from anywhere like [Airtable](https://airtable.com/) or [Netlify](https://www.netlify.com/) so we can have others easily add info. Vue has been described as a modern jQuery because you can drop it into a site or process it as a framework. I prefer the framework model because I can create what are called single file components. These components consist of an html, js and css section in the file.

This seems much clearer to me as a designer than the typical React approaches to styling. You can even scope your css to a particular component and indicate if you want it to be preprocessed using SASS, LESS or something else. Vue also includes animation options and of course logic to loop through items, templated content and add interactivity easily.

Gridsome will auto create links to pages you've created and apply various layouts that you create so you can easily maintain elements like headers, navs and footers.

TLDR; To summarize, Vue for interactive behavior and the component model, Gridsome for data and structure, andTailwind for flexible styling/ presentation.

Finally, it'll generate a static [JAM stack site](https://jamstack.org/) for you to host on places like Netlify for feedback and testing!

## Purpose

I want to help designers to design directly in the medium (html,css, js) that their designs will live in thus leveraging the full visual and interactive power of the medium. Stop creating and maintaining tons of visual design files and trying to fake interactivity and animations that may or may not be executed well by developers anyway. Foster a collaborative partnership with dev teams and utilize each other's strengths when needed.

Allows us to quickly create and scale up from low fidelity to high fidelity prototypes with a flexible and component based model using standard design patterns.

**Note this system is in flux and still evolving**

## Goals

- Create a starting point that is not "throwaway work"
- Support the process from wireframing, basic templates and layouts, to full interactive and high fidelity visual design and prototpying
- Provide a good structure to start any app or website project
- Use the "component" approach to align with modern development and design system requirements
- Use a workflow that allows for design and development experimentation
- Self document feature and UI decisions
- Oriented towards fast, hi fidelity prototyping over a final finished product
- Provide a solid basis for that final product in order to test as soon as possible.

## Tech Stack and reasons for using

- [Vue JS](https://vuejs.org/): Kind of a mashup of Angular and React with its own approach. Single component model clearly seperates html, css and js but still is standalone. Has directives in html for quick jQuery-like interactivity and built in animation hooks.
- [Gridsome](https://gridsome.org/): Opininated structure based on Vue that automatically creates pages for easy page routing, built in layout and theming ability, generates static html pages for easier evaluation and sharing on something like [Netlify](https://netlify.com) Also supports SASS/SCSS, Less, and other preprocessers if that's what you like. Can grab data from almost anywhere. We've mocked up how data can be grabbed from Airtable and Netfliy CMS.
- [Tailwind](https://tailwindcss.com): A css utility framework that encourages Composition over Inheritance. This means not having to fight the framework like in Bootstrap or even Bulma or create special classes for everything. Although you can wrap the classes in a custom class that's used everywhere and use it. For example, .btn { @apply border p-4 rounded } We've defaulted to a low fidelity look inspired by [Paper CSS](https://www.getpapercss.com/docs/) but that is easily changed by removing the sketchy border styling and Neucha font.
- [Materialize](https://materializecss.com/icons.html) We use the icons from Materialize for quick prototyping but you may want to switch to vector icons when in production.
- [VS Code](https://code.visualstudio.com/) / Live Preview Extension: The Live Preview extension allows you to collaborate live on the project with someone else without their needing to setup the project on their own. Recommend the [Vetur extension](https://marketplace.visualstudio.com/items?itemName=octref.vetur) for better Vue file formatting.

## Build Setup

Just want to check it out online and not deal with all the npm setup? [Check out the Codepen](https://codesandbox.io/s/github/mariocontext/gridsomeproto/tree/master/?fontsize=14)

Download or clone this repository.

Go here to view the version of Node you need and some basic installation instructions.
[Gridsome install directions](https://gridsome.org/docs/)

## install dependencies in Terminal

\$ `npm install --global @gridsome/cli`

\$ `npm install` This installs the rest of the package dependencies.

## How to compile and start gridsome

`gridsome develop` to start a local dev server at `http://localhost:8080`

## build to generate static files in a /dist folder

\$ `gridsome build`

## Push to Github master branch to have Netlify pick it up

You could also deploy to Github on a Master branch and configure Netlify to pull directly and build a static site each time the master is updated.

You can also build into your dist folder and drag and drop that folder into a Netlify project on Netlify site.
