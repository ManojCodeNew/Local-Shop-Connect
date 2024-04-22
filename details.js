let shop_id=localStorage.getItem("shop_id");
let url="http://localhost/DATABASE/Admin%20panel/productdetail.php";
async function fetchProductdata() {
    let promise=await fetch(url);
    let response=await promise.json();
let id=1;
    response.forEach((products) => {
        if (products.pid==shop_id) {
        let product_container=document.createElement('div');
        product_container.innerHTML=id+". Product Name :"+products.productname +"  Price : "+products.price;
        id+=1;
        document.body.append(product_container);
        }
    });
    console.log(response);
}
fetchProductdata()