const productsData = {
  men: {
    shirts: [
      { id: 101, type:'Men', name: 'Men T-Shirt', price: 20, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg', desc: 'Soft cotton T-shirt perfect for everyday wear.', colors: ['black', 'white', 'blue'], size: ['S', 'M', 'L', 'XL'] },
      { id: 102, type:'Men', name: 'Funky T-Shirt', price: 50, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg', desc: 'Trendy printed T-shirt for a casual look.', colors: ['yellow', 'green', 'red'], size: ['M', 'L', 'XL'] },
      { id: 103, type:'Men', name: 'Lesso T-Shirt', price: 80, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg', desc: 'Premium cotton T-shirt with a soft touch.', colors: ['gray', 'navy', 'black'], size: ['S', 'M', 'L'] },
      { id: 104, type:'Men', name: 'Denim Shirt', price: 200, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg', desc: 'Stylish denim shirt for a rugged look.', colors: ['blue', 'dark blue'], size: ['M', 'L', 'XL'] },
      { id: 105, type:'Men', name: 'Men Formal Shirt', price: 150, image: 'https://example.com/formal-shirt.jpg', desc: 'Elegant formal shirt perfect for office wear.', colors: ['white', 'gray', 'blue'], size: ['S', 'M', 'L', 'XL'] },
    ],
    pants: [
      { id: 201, type:'Men', name: 'Men Jeans', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZC8jYaIEF4XyP9561wQhjDBrcv7gebMG9g&s', desc: 'Comfortable and stylish jeans made of 100% cotton.', colors: ['black', 'blue', 'gray'], size: ['S', 'M', 'L', 'XL'] },
      { id: 202, type:'Men', name: 'Men Chinos', price: 60, image: 'https://example.com/men-chinos.jpg', desc: 'Slim fit chinos for a casual or semi-formal look.', colors: ['beige', 'khaki', 'olive'], size: ['M', 'L', 'XL'] },
    ],
    jackets: [
      { id: 301, type:'Men', name: 'Leather Jacket', price: 250, image: 'https://example.com/leather-jacket.jpg', desc: 'Classic leather jacket for a stylish look.', colors: ['black', 'brown'], size: ['M', 'L', 'XL'] },
      { id: 302, type:'Men', name: 'Denim Jacket', price: 180, image: 'https://example.com/denim-jacket.jpg', desc: 'Trendy denim jacket to pair with casual outfits.', colors: ['blue', 'gray'], size: ['S', 'M', 'L'] },
    ],
  },
  women: {
    shirts: [
      { id: 401, type:'Women', name: 'Women T-Shirt', price: 25, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a-400x488.jpg', desc: 'Soft and stretchable T-shirt for comfort.', colors: ['pink', 'red', 'white'], size: ['S', 'M', 'L'] },
      { id: 402, type:'Women', name: 'Women Formal Shirt', price: 130, image: 'https://example.com/women-formal-shirt.jpg', desc: 'Elegant shirt for office wear.', colors: ['white', 'blue', 'gray'], size: ['S', 'M', 'L', 'XL'] },
    ],
    pants: [
      { id: 501, type:'Women', name: 'Women Jeans', price: 45, image: 'https://d1pdzcnm6xgxlz.cloudfront.net/bottoms/8905875192664-9.jpg', desc: 'Slim fit stretchable jeans.', colors: ['blue', 'black', 'white'], size: ['S', 'M', 'L', 'XL'] },
    ],
    traditional: [
      { id: 601, type:'Women', name: 'Women Kurti', price: 70, image: 'https://example.com/kurti.jpg', desc: 'Elegant kurti with embroidered design.', colors: ['red', 'green', 'blue'], size: ['M', 'L', 'XL'] },
    ],
  },
  kids: {
    shirts: [
      { id: 701, type:'Kids', name: 'Kids T-Shirt', price: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULAaHbfV6ZKMACuoMnX9ho4svlZYcGEG6Cw&s', desc: 'Soft and breathable T-shirt for kids.', colors: ['yellow', 'green', 'blue'], size: ['XS', 'S', 'M'] },
    ],
    pants: [
      { id: 801, type:'Kids', name: 'Kids Jeans', price: 45, image: 'https://image.hm.com/assets/hm/5b/b6/5bb677791802e928114f730f919a39431de8929c.jpg?imwidth=657', desc: 'Stretchable and comfy jeans.', colors: ['blue', 'gray'], size: ['XS', 'S', 'M'] },
    ],
    jackets: [
      { id: 901, type:'Kids', name: 'Kids Hoodie', price: 50, image: 'https://example.com/kids-hoodie.jpg', desc: 'Warm hoodie for kids in winter.', colors: ['red', 'yellow', 'blue'], size: ['S', 'M', 'L'] },
    ],
  }
};

export default productsData;