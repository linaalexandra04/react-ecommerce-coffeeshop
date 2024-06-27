const products = [
    { id: 1, name: 'Café Fino', category: 'Premium', price: 5000, image: '/img/2.png', description: 'Café fino' },
    { id: 2, name: 'Café Medio', category: 'Medio', price: 6000, image: '/img/3.png', description: 'Café medio fuerte' },
    { id: 3, name: 'Café Grueso', category: 'Natural', price: 7000, image: '/img/4.png', description: 'Café Fuerte' },

  ];
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter(product => product.category === categoryId));
        } else {
          resolve(products);
        }
      }, 500);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(product => product.id === parseInt(id)));
      }, 500);
    });
  };
  
