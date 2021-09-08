const app = require('./src/app');

const PORT = process.env.PORT ?? 3000;

console.log('test');
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
