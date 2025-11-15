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

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Chào mừng đến Website bán điện thoại!');
// });

// app.listen(port, () => {
//   console.log(`Server chạy tại http://localhost:${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;

// Serve frontend từ thư mục public
app.use(express.static('public'));

// API trả danh sách sản phẩm
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'iPhone 15', price: 25000000 },
    { id: 2, name: 'Samsung S23', price: 18000000 },
    { id: 3, name: 'Xiaomi 13', price: 12000000 }
  ]);
});

// Trang chủ
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
