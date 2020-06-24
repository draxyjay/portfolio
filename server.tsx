import {
    React,
    ReactDOMServer,
  } from './deps.ts';
  
  import App from "./app.tsx";
  
  const jsBundle = "/main.js";
  
  export const js =
  `import React from "https://dev.jspm.io/react@16.13.1";
   import ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";
   const App = ${App};
   ReactDOM.hydrate(React.createElement(App), document.getElementById('app'));`;  
  
  
  export const html =
    `<html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css">
        <script type="module" src="${jsBundle}"></script>
      </head>
      <body>
        <main id="app">${ReactDOMServer.renderToString(<App />)}</main>  
      </body>
    </html>`;