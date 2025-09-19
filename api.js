
// METHOD ONE 
const productContainer = document.querySelector("#product-container");
const fetchProduct = () => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        products = data.products;
        let limitedProducts = products.slice(0,6);


        products.forEach((p) => {
            const productEl = document.createElement("div");
            productEl.classList.add("productCard");

            productEl.innerHTML = `<img src = ${p.thumbnail}>
            <h3>${p.title}</h3>
            <p>${p.description.substring(0, 60)}...</p>
            <span>${p.price}</span>
            <div class="brand">${p.category}</div>
            <div class="btn">
            <button>Add to Cart</button>
            </div>
            `;
            
            productContainer.appendChild(productEl);
        });
    })
    .catch((error) => console.error(error))
};

fetchProduct();






















// ASYNCHRONOUS FUNCTION 

// const fetchProduct = async () => {
//     try {
//         const response = await fetch("https://dummyjson.com/products");
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.error("error", error);
//     }
// };

// fetchProduct();