import express from 'express';
import { h } from 'preact';
import render from 'preact-render-to-string';
/** @jsx h */

import Home from './views/home';
import About from './views/about';
import Something from './views/something';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use((req, res, next) => {
    res.render = (Comp, name, props) => {
      const markup = render(<Comp {...props} />);
      res.status(200).send(
        `<!doctype html>
      <html lang="">
      <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta char-set='utf-8' />
          <title>${props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${
            assets[name].css
              ? `<link rel="stylesheet" href="${assets[name].css}">`
              : ''
          }
          ${
            process.env.NODE_ENV === 'production'
              ? `<script src="${assets[name].js}" defer></script>`
              : `<script src="${assets[name].js}" defer crossorigin></script>`
          }
      </head>
      <body>
          ${markup}
          <script>window.__DATA__ = ${JSON.stringify(props)};</script>
      </body>
  </html>`
      );
    };
    next();
  })
  .get('/', (req, res) => {
    res.render(Home, 'home', {
      title: 'home',
    });
  })
  .get('/about', (req, res) => {
    res.render(About, 'about', {
      title: 'about',
    });
  })
  .get('/something', (req, res) => {
    res.render(Something, 'something/index', {
      title: 'something about',
    });
  });

export default server;
