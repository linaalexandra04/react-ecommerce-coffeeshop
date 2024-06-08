const products = [
    { id: 1, category: 'catalogo', name: 'Café Espresso', description: 'Un espresso fuerte y concentrado.' },
    { id: 2, category: 'catalogo', name: 'Café Americano', description: 'Café diluido con agua caliente.' },
    { id: 3, category: 'productos', name: 'Café Latte', description: 'Café con leche vaporizada y una capa de espuma.' },
    { id: 4, category: 'productos', name: 'Café Mocha', description: 'Café con chocolate y leche vaporizada.' },
];

export const getProducts = () => {
    return Promise.resolve(products);
};

export const getProductsByCategory = (categoryId) => {
    return Promise.resolve(products.filter(product => product.category === categoryId));
};

export const getProductById = (id) => {
    return Promise.resolve(products.find(product => product.id === id));
};


