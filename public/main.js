fetch('/api/products')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('product-list');
    data.forEach(p => {
      const item = document.createElement('p');
      item.textContent = `${p.name} - ${p.price.toLocaleString()} VNĐ`;
      list.appendChild(item);
    });
  });
