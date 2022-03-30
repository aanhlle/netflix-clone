# A simple Netflix-clone using React, Redux, and React Router

One of my homeworks when learning front-end is to make a Movie List app, which uses the API from the MovieDB and render a list of movies. The project is kinda interesting but I think why not leverage it to a new level? And Netflix clone comes to life.

## Approach

For the first phase I only have 4 days (32~35 working hours) to release. That's a bit extreme considering a normal sprint in agile project would span at least 2 weeks. However, we can define our goals simpler and think realistically about what we can achieve in a 4-day-sprint would help reduce the headache.

Why 4 days? Well that's the deadline for my homework 😅. Also I think it's reachable and a great way to fight procrastination when we clearly define what to do and how much time we do it.

### So, only 4 days left to deploy. What should I do in the first phase?

Making the initial UX/UI layout should be my main focus, before any logic comes in let just create something we can see. In my opinion it's also good too see your app shaping its form as soon as possible. It's like a sketch for your project.

Next things would be adding simple logics (app states, get/query for movie). Also, I should factor some time to read docs for tools like Redux, React Router, and the MovieDB API. I've had some experience with them before but surely I will need to revisit the docs when coding... And I think that's it for 32 hours coding in Phase 1.

I would try to perfect my app later in Phase 2.

You can see the detail for Phase 1 as below
[First Phase](#phase-1)

## To-dos list

0. Initialize project scope, creating Readme ✅
1. Think about the approach and make a detailed phase ✅
2. Create a storybook (optional do later)
3. High level design (optional do later)
4. Phase 1 implement _in progress_

## Working application

_deploy url will appear here_

## Storybook

### What is Storybook

Storybook is an open source tool for building UI components and pages in isolation.
It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

### Netflix Clone Storybook

## High level design

### Application architecture

### Simple data interaction flow

## Features and Road-map

### Phase 1

React application and simple API requests a.k.a the homework deadline phase

> June 13 - 27, 2020

-   [x] Proven, scalable, and easy to understand project structure
-   [x] Simple drag and drop kanban board
-   [x] Add/update issue
-   [x] Search/filtering issues
-   [x] Add comments

> While working with this application, I have the opportunity to revisit some of the interesting topics:

-   TailwindCSS configuration
-   CSS styling and layout. CSS/HTML is easily taken lightly in web development for beginners. However I think it's really an important area to master if you really want to be a good and efficient front-end developer. Understanding how CSS works will make working with CSS from try-and-error approach lean towards think-and-implement one.
-   Deploy React application to Netlify

### Phase 2

> TBD

## Time spending

Probably using Waka time report plugin in Vscode to track my time spending. For the first phase it shouldn't go beyond 32 coding hours as I need to meet my submit deadline.

## What's currently missing?

There are missing features from the live demo which should exist in a real product.

### Proper authentication system 🔐

### Accessibility ♿

Not all components have properly defined [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), visual focus indicators, etc.

## Setting up development environment 🛠

-   `git clone https://github.com/aanhlle/netflix-clone.git`
-   `cd netflix-clone`
-   `npm start` for react web application
-   The app should run on `http://localhost:3000/`

### Unit/Integration tests 🧪

I skipped writing test for this project. Might do it later when I learn more about testing.

## Compatibility

Will test on the Chrome, iPhone and Android to make sure things not break 🤦‍♂️

## Author: Anh Le ✍️

-   A young and passionate developer.
-   Contact for opportunity @ [LinkedIn](https://www.linkedin.com/in/levietanh1112/)

## Contributing

If you have any ideas, just [open an issue][issues] and tell me what you think.

If you'd like to contribute, please fork the repository and make changes as you'd like. [Pull requests][pull] are warmly welcome.

## Credits

For the approach to project:
[trungk18/jira-clone-angular][trungk18]

I referenced these projects below to learn about coding structure and might reuse part of HTML/CSS.
(Please note that I try to do all the Javascript coding logic on my own, because I consider this a valuable learning opportunity)
[Th3Wall/Fakeflix][th3wall]

## License

Feel free to use my code on your project.

[MIT](https://opensource.org/licenses/MIT)
