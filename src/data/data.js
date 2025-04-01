const productsData = {
  men: {
    shirts: [
      {
        id: 101,
        name: 'Men T-Shirt',
        price: 20,
        image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum.'
      },
      { id: 102, name: 'Funky T-Shirt', price: 50, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg' },
      { id: 103, name: 'Lesso T-Shirt', price: 80, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg' },
      { id: 104, name: 'Denim T-Shirt', price: 200, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg' },
    ],
    pants: [
      { id: 201, name: 'Men Jeans', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZC8jYaIEF4XyP9561wQhjDBrcv7gebMG9g&s' },
    ],
    watches: [
      { id: 202, name: 'Men Watch', price: 100, image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw19f3b313/images/Titan/Catalog/90177TM03_2.jpg?sw=600&sh=600' },
    ],
    glasses: [
      {
        id: 203,
        name: 'Men Sunglasses',
        price: 50,
        image: 'https://vincerocollective.com/cdn/shop/products/VinceromatteBlackVIla_1024x1024.jpg?v=1709882336',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus interdum eros. In blandit velit a lacus laoreet dictum.'
      },
    ],
  },

  women: {
    shirts: [
      { id: 5, name: 'Women T-Shirt', price: 25, image: 'https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a-400x488.jpg' },
    ],
    pants: [
      { id: 6, name: 'Women Jeans', price: 45, image: 'https://d1pdzcnm6xgxlz.cloudfront.net/bottoms/8905875192664-9.jpg' },
    ],
    handbags: [
      { id: 7, name: 'Women Handbag', price: 60, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/hand-messenger-bag/k/h/r/-original-imagrhgksuzv7xcg.jpeg?q=90&crop=false.jpg' },
    ],
    beauty: [
      { id: 8, name: 'Shampoo', price: 15, image: 'https://olamor.in/cdn/shop/files/GlistenKeratinShampoo1L.jpg?v=1700474623&width=1500' },
    ],
  },

  kids: {
    shirts: [
      { id: 19, name: 'kids T-Shirt', price: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULAaHbfV6ZKMACuoMnX9ho4svlZYcGEG6Cw&s' },
    ],
    pants: [
      { id: 20, name: 'kids Jeans', price: 45, image: 'https://image.hm.com/assets/hm/5b/b6/5bb677791802e928114f730f919a39431de8929c.jpg?imwidth=657' },
    ],
    bags: [
      { id: 21, name: 'kids cart', price: 60, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Y1WuusjSDG1hT3rig-iq8kCYouuZd7Wo3w&s' },
    ],
    toys: [
      { id: 22, name: 'kids', price: 15, image: 'https://www.jiomart.com/images/product/original/rvzsqjddqo/vastate-satsun-60-pcs-building-block-toys-with-wheels-for-kids-best-gift-toy-for-kids-product-images-orvzsqjddqo-p601174627-0-202305050447.jpg?im=Resize=(1000,1000)' },
    ],
  },

  footwear: {
    running: [
      { id: 9, name: 'Running Shoes', price: 80, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/l/d/k/-original-imah2ur5xj9zyz36.jpeg?q=90&crop=false' },
    ],
    casual: [
      { id: 10, name: 'Casual Sneakers', price: 65, image: 'https://paragonfootwear.com/cdn/shop/products/k1013g_blk_1_1.jpg?v=1741864790&width=1920' },
    ],
    formal: [
      { id: 11, name: 'Formal Shoes', price: 90, image: 'https://assets.ajio.com/medias/sys_master/root/20240320/dPJc/65fb127905ac7d77bbccadbf/-473Wx593H-467152109-black-MODEL.jpg' },
    ],
  },

  accessories: {
    watches: [
      { id: 12, name: 'Wrist Watch', price: 120, image: 'https://assets.ajio.com/medias/sys_master/root/20230921/meKx/650c4c2bddf7791519efcd10/-473Wx593H-466612236-black-MODEL.jpg' },
    ],
    sunglasses: [
      { id: 13, name: 'Sunglasses', price: 45, image: 'https://dimeh.co.in/cdn/shop/products/black-navy-sunglass-587136.jpg?v=1740247708' },
    ],
    wallets: [
      { id: 14, name: 'Leather Wallet', price: 35, image: 'https://images.meesho.com/images/products/239358062/sgyie_512.webp' },
    ],
  },

  brand: {
    denim: [
      { id: 15, name: 'Denim Jeans', price: 55, image: 'https://img.freepik.com/free-vector/ancient-typeface_1284-46594.jpg?semt=ais_hybrid' },
    ],
    peterEngland: [
      { id: 16, name: 'Peter England Shirt', price: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdJxdnP8Bfxo7WSyJ_DcOkOeSQTB-Y5f-hg&s' },
    ],
    nike: [
      { id: 17, name: 'Nike Shoes', price: 90, image: 'https://pngfre.com/wp-content/uploads/nike-logo-29-1024x1024.png' },
    ],
    apple: [
      { id: 18, name: 'Apple iPhone', price: 999, image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    ],
  },
};

export default productsData;
