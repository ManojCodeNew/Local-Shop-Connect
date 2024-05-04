let URL = "http://localhost/DATABASE/ADMIN%20PANEL/shopdetail.php";


const shop_container = document.createElement('div');
shop_container.id = "shop_details";
// shop_container.style.display='row';
shop_container.style.marginLeft = '10px';
shop_container.style.marginTop="10vh";

async function Fetchdata() {
    let response = await fetch(URL);
    let jsondata = await response.json();
    console.log(jsondata);

    jsondata.forEach((shops, id) => {

        const shop_card = document.createElement('div');
        shop_card.className = "shop_card";
        shop_card.id = shops.sid;
        // shop_card.style.padding="2px";
        const shop_img = document.createElement('img');
        shop_img.className = "shop_img";
        shop_img.src = shops.imgUrl ? shops.imgUrl : "https://images.unsplash.com/photo-1604066867775-43f48e3957d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0b3JlfGVufDB8fDB8fHww";
        // shop_img.alt="Shop Image";
        const shop_name = document.createElement('strong');
        shop_name.className = "shop_name";
        shop_name.innerHTML = shops.shopname;


        const shop_type = document.createElement('p');
        shop_type.className = "shop_type";
        shop_type.innerHTML = shops.Shop_category;

        const shop_location = document.createElement('p');
        shop_location.className = "shop_location";
        let sublocation = shops.Location;
        shop_location.innerHTML = sublocation.slice(0, 25) + "...";




        shop_card.appendChild(shop_img);
        shop_card.appendChild(shop_name);
        shop_card.appendChild(shop_type);
        shop_card.appendChild(shop_location);


        shop_card.addEventListener('click',()=>{
            window.location.href="details.html";
            let clicked_card_id=shop_card.id;
            let name=shops.ownername;
            localStorage.setItem("shop_id",clicked_card_id);
            localStorage.setItem("Ownername",name);

        })
        shop_container.appendChild(shop_card);

        document.body.append(shop_container);
    });


}
Fetchdata();

// let username="manoj";
// let data={"id":"3","name":"","email":"manojpoojary2004@gma","password":"123","sid":"3","shopname":"MANOJ SHOP","ownername":"Manoj C"}
// fetch("http://localhost/practice/fetchdata.php",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json; charset=utf-8"
//     },
//     body:JSON.stringify(data)
// })
// // console.log(JSON.stringify(data));