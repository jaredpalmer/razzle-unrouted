# Razzle Unrouted

Sometimes, you don't want to build an SPA.

## The Problem with Single Page Applications...

They take a while. For a single view you need to write an API endpoint and then write the data fetch on the client. In contrast, with a good ol' web app, like a 2007-style web app, you just get the data and pass it to your template. memba?

## Speaking of templates...

Templates suck. Components kick ass. As it turns out, React is a great templating language. However, in prior projects like express-engine and express-react-views, they required completely separate client-side JavaScript. What does that mean? Well you'd get to use React for templating, but then would need to sprinkle client-side JavaScript wherever you still needed it. So like modals and buttons and other stuff wouldn't work, because that code was never going to be run in the browser.

## The Solution

This is an example of how to solve this problem. Using Razzle, this project shows how **you could use Preact as a templating language for Express, but then also reuse the same components on the client (without the need for client-side routing)**. It works by creating a webpack entry for each component in the views directory and using express middleware to inject props.

## Differences from other (p)React apps

* There is no "router." You just use vanilla `<a>` tags
* You'll need to handle CSRF
* You'll need cookies and sessions for authentication
* Data is fetched in express controllers (for now)
* You can ship your idea 2-3x faster than you would with an SPA.
