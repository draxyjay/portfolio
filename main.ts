// Importing Module
import {
  Application,
  Router,
  flags,
} from './deps.ts';

import {js, html}  from './server.tsx'; 
// Setting up port
const {args, exit} = Deno;
const DEFAULT_PORT = 8000;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)){
  console.log("This is not port number");
  exit(1);
};

// Initializing App and Router
const app = new Application();
const router = new Router();
const jsBundle = "/main.js";
// Set our router to handle request
router.get('/',(ctx) => {
  ctx.response.type = 'text/html';
  ctx.response.body = html;
})
.get('/home',(ctx)=>{
  ctx.response.body = "This is home page";
})
.get(jsBundle, (ctx) => {
  ctx.response.type = 'application/javascript';
  ctx.response.body = js;
});
// Passing router inside our application as middleware
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${DEFAULT_PORT}...`);

// Setting our app to listen to port
await app.listen({port: port});