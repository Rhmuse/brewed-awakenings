import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    e => {
        const itemClicked = e.target;

        if (itemClicked.id.startsWith("product")) {
            const [, productPrimaryKey] = itemClicked.id.split("--")

            let matchingProduct = null;
            for (const product of products) {
                if (product.id === parseInt(productPrimaryKey)) {
                    matchingProduct = product;
                }
            }

            if (matchingProduct !== null) {
                window.alert(`${matchingProduct.name} cost $${matchingProduct.price}.`)
            } else {
                window.alert("Product not found!")
            }
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

