// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.static('public')); // phục vụ frontend từ thư mục public

// app.get('/api/products', (req, res) => {
//   res.json([{ name: 'iPhone 15' }, { name: 'Samsung S23' }]);
// });

// app.listen(port, () => {
//   console.log(`Server chạy tại http://localhost:${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng đến Website bán điện thoại!');
});

app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});