        
        const products = [
            { name: 'Producto 1', price: 10 },
            { name: 'Producto 2', price: 15 },
            
        ];

        const cart = [];

        
        function addToCart(productIndex) {
            const product = products[productIndex];
            cart.push(product);
            updateCart();
        }

        
        function clearCart() {
            cart.length = 0;
            updateCart();
        }

      
        const clearCartButton = document.getElementById('clear-cart');
        clearCartButton.addEventListener('click', clearCart);

        
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach((button, index) => {
            button.addEventListener('click', () => addToCart(index));
        });

        
        function updateCart() {
            const cartList = document.getElementById('cart');
            const totalElement = document.getElementById('cart-total');
            let total = 0;

            cartList.innerHTML = ''; // Limpiar la lista

            cart.forEach((product, index) => {
                const li = document.createElement('li');
                li.innerText = `${product.name} - $${product.price}`;
                cartList.appendChild(li);
                total += product.price;
            });

            totalElement.innerText = total;
        }