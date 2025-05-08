const products = [
    {name: "Laptop", price: 40000},
    {name: "Mobile", price: 10000},
    {name: "Keyboard", price: 500},
    {name: "Mouse", price: 1000}
];

console.log("Product Details:-");

for(let i=0; i<products.length; i++)
{
    console.log(`Product: ${products[i].name}, price: ${products[i].price}`); 
}

const discountProduct = products.map(product => {
    return{
        ...product,
        price : product.price * 0.9
    };
} );

for(let i=0; i < discountProduct.length; i++)
    {
        console.log(`Product: ${discountProduct[i].name}, price: ${discountProduct[i].price}`); 
    }

const filteredProduct = products.filter(product => {
    return product.price >=500 && product.price <= 10000;
});

console.log(filteredProduct);


