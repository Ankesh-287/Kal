const productsData = {
  men: {
    shirts: [
      { id: 101, type: 'Men', name: 'Men T-Shirt', price: 20, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg', desc: 'Soft cotton T-shirt perfect for everyday wear.', colors: ['black', 'white', 'blue'], size: ['S', 'M', 'L', 'XL'] },
      { id: 102, type: 'Men', name: 'Funky T-Shirt', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpr7c1U6RA6Ki6qcOUd_Hdwdju1l2R9trOQ&s', desc: 'Trendy printed T-shirt for a casual look.', colors: ['yellow', 'green', 'red'], size: ['M', 'L', 'XL'] },
      { id: 103, type: 'Men', name: 'Lesso T-Shirt', price: 80, image: 'https://ih1.redbubble.net/image.99950376.0044/ssrco,slim_fit_t_shirt,mens,fafafa:ca443f4786,side,tall_three_quarter,750x1000.u1.jpg', desc: 'Premium cotton T-shirt with a soft touch.', colors: ['gray', 'navy', 'black'], size: ['S', 'M', 'L'] },
      { id: 104, type: 'Men', name: 'Denim Shirt', price: 200, image: 'https://www.tistabene.com/cdn/shop/files/MSH-1973A_9d9f7aae-7d73-4597-ba65-d22c0d5c73ed.jpg?v=1738409117', desc: 'Stylish denim shirt for a rugged look.', colors: ['blue', 'dark blue'], size: ['M', 'L', 'XL'] },
      { id: 105, type: 'Men', name: 'Men Formal Shirt', price: 150, image: 'https://img.tatacliq.com/images/i14/437Wx649H/MP000000020103905_437Wx649H_202311160200211.jpeg', desc: 'Elegant formal shirt perfect for office wear.', colors: ['white', 'gray', 'blue'], size: ['S', 'M', 'L', 'XL'] },
    ],
    pants: [
      { id: 201, type: 'Men', name: 'Men Jeans', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZC8jYaIEF4XyP9561wQhjDBrcv7gebMG9g&s', desc: 'Comfortable and stylish jeans made of 100% cotton.', colors: ['black', 'blue', 'gray'], size: ['S', 'M', 'L', 'XL'] },
      { id: 202, type: 'Men', name: 'Men Chinos', price: 60, image: 'https://www.snitch.co.in/cdn/shop/files/5c9478c60796954f95ecf00aa33606d1.jpg?v=1729256754', desc: 'Slim fit chinos for a casual or semi-formal look.', colors: ['beige', 'khaki', 'olive'], size: ['M', 'L', 'XL'] },
    ],
    jackets: [
      { id: 301, type: 'Men', name: 'Leather Jacket', price: 250, image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/14464252/2021/6/23/38b691fe-8fc1-4573-bf32-ecd41135d5021624428715405-Leather-Retail-Men-Jackets-1971624428714663-1.jpg', desc: 'Classic leather jacket for a stylish look.', colors: ['black', 'brown'], size: ['M', 'L', 'XL'] },
      { id: 302, type: 'Men', name: 'Denim Jacket', price: 180, image: 'https://stylequotient.co.in/cdn/shop/files/AW24SQVELDORA_BLK-1.jpg?v=1730972954', desc: 'Trendy denim jacket to pair with casual outfits.', colors: ['blue', 'gray'], size: ['S', 'M', 'L'] },
    ],
  },
  women: {
    shirts: [
      { id: 401, type: 'Women', name: 'Women T-Shirt', price: 25, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a-400x488.jpg', desc: 'Soft and stretchable T-shirt for comfort.', colors: ['pink', 'red', 'white'], size: ['S', 'M', 'L'] },
      { id: 402, type: 'Women', name: 'Women Formal Shirt', price: 130, image: 'https://foreverformals.in/cdn/shop/files/SS23SQARABELL_WHT_1.jpg?v=1696584908', desc: 'Elegant shirt for office wear.', colors: ['white', 'blue', 'gray'], size: ['S', 'M', 'L', 'XL'] },
    ],
    pants: [
      { id: 501, type: 'Women', name: 'Women Jeans', price: 45, image: 'https://d1pdzcnm6xgxlz.cloudfront.net/bottoms/8905875192664-9.jpg', desc: 'Slim fit stretchable jeans.', colors: ['blue', 'black', 'white'], size: ['S', 'M', 'L', 'XL'] },
    ],
    traditional: [
      { id: 601, type: 'Women', name: 'Women Kurti', price: 70, image: 'https://images.meesho.com/images/products/417541006/jt1bh_512.webp', desc: 'Elegant kurti with embroidered design.', colors: ['red', 'green', 'blue'], size: ['M', 'L', 'XL'] },
    ],
  },
  kids: {
    shirts: [
      { id: 701, type: 'Kids', name: 'Kids T-Shirt', price: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULAaHbfV6ZKMACuoMnX9ho4svlZYcGEG6Cw&s', desc: 'Soft and breathable T-shirt for kids.', colors: ['yellow', 'green', 'blue'], size: ['XS', 'S', 'M'] },
    ],
    pants: [
      { id: 801, type: 'Kids', name: 'Kids Jeans', price: 45, image: 'https://image.hm.com/assets/hm/5b/b6/5bb677791802e928114f730f919a39431de8929c.jpg?imwidth=657', desc: 'Stretchable and comfy jeans.', colors: ['blue', 'gray'], size: ['XS', 'S', 'M'] },
    ],
    jackets: [
      { id: 901, type: 'Kids', name: 'Kids Hoodie', price: 50, image: 'https://m.media-amazon.com/images/I/718PmO70iFL._AC_UY1100_.jpg', desc: 'Warm hoodie for kids in winter.', colors: ['red', 'yellow', 'blue'], size: ['S', 'M', 'L'] },
    ],
  }
};

export default productsData;
