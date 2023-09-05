const paris =[
    {
        "imagemarket": "./images/reklamaimg.png", 
        "city": "г. Ташкент", 
         "names": "Кепки Corneliani Diamond for him edition."  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "2 599 000", 


    },
    {
        "imagemarket": "./images/mark2.png", 
        "city": "г. Самарканд", 
         "names": "Chevrolet Onix 1.2 Turbo в наличии"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "400 500 000", 


    },
    {
        "imagemarket": "./images/mark3.png", 
        "city": "г. Ташкент", 
         "names": "7Saber Trucker Cap"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "280 000", 


    },
    {
        "imagemarket": "./images/mark4.png", 
        "city": "г. Ташкент", 
         "names": "Оригинальные кроссовки Nike Air Max Plus"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "4 820 000", 


    },
   
    {
        "imagemarket": "./images/mark5.png", 
        "city": "г. Самарканд", 
         "names": "Оригинальные кроссовки Nike Air Max 97"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "4 820 000", 


    },
    {
        "imagemarket": "./images/mark6.png", 
        "city": "г. Ташкент", 
         "names": "Apple Watch Series 8 - USA Non active"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "4 500 000", 


    },
    {
        "imagemarket": "./images/mark7.png", 
        "city": "г. Ташкент", 
         "names": "Лучший кроссовер Geely Monjaro Limited Edition"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "320 000 000", 


    },
    {
        "imagemarket": "./images/mark8.png", 
        "city": "г. Ташкент", 
         "names": "Стайлер для волос Dyson airwrap complete long"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "500", 


    },
    {
        "imagemarket": "./images/mark3.png", 
        "city": "г. Ташкент", 
         "names": "7Saber Trucker Cap"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "280 000", 


    },
    {
        "imagemarket": "./images/mark4.png", 
        "city": "г. Ташкент", 
         "names": "Оригинальные кроссовки Nike Air Max Plus"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "4 820 000", 


    },
 
    {
        "imagemarket": "./images/mark2.png", 
        "city": "г. Самарканд", 
         "names": "Chevrolet Onix 1.2 Turbo в наличии"  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "400 500 000", 


    },
    {
        "imagemarket": "./images/reklamaimg.png", 
        "city": "г. Ташкент", 
         "names": "Кепки Corneliani Diamond for him edition."  ,
        "when": "Вчера, 19:20", 
        "phone": "+998 71 200 70 07", 
        "money": "2 599 000", 


    },
 

]

let box3 = document.querySelector("#Paris")
paris.forEach((item) => {
    box3.innerHTML += `
    <div class="announcements overtaking">
    <img src=${item.imagemarket} alt="">
    <p class="where">${item.city}</p>
     <a class="names" href="./single.html"><p class="names">${item.names}</p></a>
    <p class="when">${item.when}</p>
    <p class="phone">${item.phone}</p>
    <p class="money">${item.money}<span>UZS</span></p>
 </div>
   `
})