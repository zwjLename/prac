const path = require('path');
const Koa = require('koa');
const koaStatic = require('koa-static');

const app = new Koa();

app.use(koaStatic(path.join(__dirname, '..')));
console.log('%c [ path.join(__dirname, .. ]', 'font-size:13px; background:pink; color:#bf2c9f;', path.join(__dirname, '..'))

app.use(async (ctx) => {
  if (ctx.path === '/' || ctx.path === '') {
    ctx.redirect('../index.html');
  }
});

const port = 8002;
app.listen(port, () => {
  console.log(`Starting at http://127.0.0.1:${port}`);
});