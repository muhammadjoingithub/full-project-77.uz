const overTake =[
    {
        "imagemarket": "./images/menu1.png", 
        "city": "г. Ташкент", 
         "names": "Asus Zenbook Pro Duo 14",
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "2 599 000", 


    },
    {
        "imagemarket": "./images/menu2.png", 
        "city": "г. Ташкент", 
         "names": "Asus Chromebook Flip CX5",
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "204 000 000", 


    },
    {
        "imagemarket": "./images/menu3.png", 
        "city": "г. Самарканд", 
         "names": "Samsung Galaxy Tab S8 Ultra",
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "280 000", 


    },
    {
        "imagemarket": "./images/menu4.png", 
        "city": "г. Ташкент", 
         "names": "HUAWEI MatePad Pro 12.6"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "4 820 000", 


    },
    {
        "imagemarket": "./images/menu5.png", 
        "city": "г. Ташкент", 
         "names": "Apple MacBook Air (M2)",
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "4 820 000", 


    },
   
    {
        "imagemarket": "./images/menu1.png", 
        "city": "г. Самарканд", 
         "names": "Asus Zenbook Pro Duo 14"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "Asus Zenbook Pro Duo 14", 


    },
    {
        "imagemarket": "./images/menu2.png", 
        "city": "г. Ташкент", 
         "names": "Samsung Galaxy Tab S8 Ultra."  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "280 000", 


    },
    {
        "imagemarket": "./images/menu3.png", 
        "city": "г. Ташкент", 
         "names": "HUAWEI MatePad Pro 12.",
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "4 820 000", 


    },

]

let marita = document.querySelectorAll("#London")
overTake.forEach((item) => {
    marita.innerHTML += `
    <div class="filter-menues">
    <div class="first-menu">
        <img src=${item.imagemarket} alt="">
        <div class="first-item">
            
            <a class="names first-item1" href="#"><p class="names">${item.names}</p></a>
            <p class="money first-item2">${item.money}<span>UZS</span></p>
            <p class="when first-item3">${item.when}</p>
           

        </div>
    </div>
   
    <div class="second-menu">
        <p class="where second-item1">${item.city}</p>
         <p class="phone second-item2">${item.phone}</p>

    </div>
   </div>
   `
})

