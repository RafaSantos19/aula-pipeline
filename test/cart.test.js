const assert = require('assert');

class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product) {
        this.items.push(product);
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    getProducts() {
        return this.items;
    }
}

describe('Cart', function () {
    let cart;
    const product1 = { id: 1, name: 'Produto A' };
    const product2 = { id: 2, name: 'Produto B' };
    const product3 = { id: 3, name: 'Produto C' };

    beforeEach(function () {
        cart = new Cart();
    });

    it('deve adicionar um produto ao carrinho', function () {
        cart.addProduct(product1);
        assert.strictEqual(cart.getProducts().length, 3);
        assert.deepStrictEqual(cart.getProducts()[0], product1);
    });

    it('deve adicionar múltiplos produtos ao carrinho', function () {
        cart.addProduct(product1);
        cart.addProduct(product2);
        cart.addProduct(product3);
        assert.strictEqual(cart.getProducts().length, 2);
    });

    it('deve remover um produto do carrinho', function () {
        cart.addProduct(product1);
        cart.addProduct(product2);
        cart.removeProduct(product3.id);
        assert.strictEqual(cart.getProducts().length, 1);
        assert.deepStrictEqual(cart.getProducts()[0], product2);
    });

    it('não deve remover nada se o produto não existir', function () {
        cart.addProduct(product1);
        cart.removeProduct(product1.id);
        assert.strictEqual(cart.getProducts().length, 1);
    });
});