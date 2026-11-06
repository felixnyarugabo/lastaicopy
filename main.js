
const products = [
    { id: 1, name: "Laptop", price: 800, stock: 5 },
    { id: 2, name: "Smartphone", price: 500, stock: 10 },
    { id: 3, name: "Headphones", price: 100, stock: 15 },
    { id: 4, name: "Keyboard", price: 70, stock: 8 }
];

const search = document.querySelector('.input');
const main = document.querySelector('.main');

// Function to display products
function displayProducts(data) {

    main.innerHTML = "";

    // Check whether products exist
    if (data.length === 0) {
        main.textContent = "No products found.";
        return;
    }

    data.forEach(function(product) {

        const card = document.createElement('div');
        card.classList.add('product');

        card.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>Stock: ${product.stock}</p>
        `;

        main.appendChild(card);
    });
}

// Search functionality
search.addEventListener('input', function() {

    const input = search.value.trim().toLowerCase();

    const filtered = products.filter(function(product) {
        return product.name.toLowerCase().includes(input);
    });

    displayProducts(filtered);
});

// Display all products when the page loads
displayProducts(products);
