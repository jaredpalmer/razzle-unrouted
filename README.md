# Razzle Unrouted

Sometimes, you don't want to build an SPA.

## The Problem with Single Page Applications...

They take a while. For a single endpoint you need to write an endpoint and then write the data fetch. In contrast, with a good ol' web app, you just get the data and pass it to your template.

## Speaking of templates...

Templates suck. Component rock. React is a great templating language. However, in prior projects like express-engine and express-react-views, they required completely separate client javascript. What does that mean? Well you'd get to use React for templating, but then would need to sprinkle client-side JavaScript wherever you still needed it.

## The Solution

This is an example of how to solve this problem. Using Razzle, this project show s how you could use Preact as a templating language for Express, but then also reuse the same components on the client (without the need for client-side routing). It works by creating a webpack entry for each component in the views directory and using express middleware to inject props.

## Differences from other (p)React apps

* There is no "router." You just use vanilla `<a>` tags.
* You'll need to handle CSRF
* Data is fetched in express controllers (for now).
