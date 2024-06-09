const products = [
    {
    id: 1,
    category: 'catalogo',
    name: 'Café Espresso',
    image: '/img/2.png',
    },
    {
    id: 2,
    category: 'catalogo',
    name: 'Café Americano',
    image:'/img/3.png',
    },
    {
    id: 3,
    category: 'productos',
    name: 'Café Latte',
    image:'/img/4.png',
    },
    {
    id: 4,
    category: 'productos',
    name: 'Café Mocha',
    image:'/img/5.png',
    },
];

export const getProducts = () => {
    return Promise.resolve(products);
};

export const getProductsByCategory = (categoryId) => {
    return Promise.resolve(products.filter((product) => product.category === categoryId));
};

export const getProductById = (id) => {
    return Promise.resolve(products.find((product) => product.id === id));
};

