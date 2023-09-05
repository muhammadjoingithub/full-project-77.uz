
const place = [    
    
{        "images": "./images/components1.png", 
       "values": "Для женщин",        
       "values1": "4 147 объявлений"   
    },    
    
{        "images": "./images/comp2.png",       
 "values": "Красота",        
 "values1": "574 объявлений"    
},   

{        "images": "./images/comp3.png",    
    "values": "Бытовая техника", 
           "values1": "547 объявлений"   
         },   
         
{       
       "images": "./images/comp4.png", 
       "values": "Для мужчин", 
        "values1": "547 объявлений"  
            
},

{       
    "images": "./images/comp5.png", 
    "values": "Здоровье", 
     "values1": "684 объявлений"  
         
},
{       
    "images": "./images/comp6.png", 
    "values": "Электроника", 
     "values1": "4 147 объявлений"  
         
},
{       
    "images": "./images/comp7.png", 
    "values": "Детские товары", 
     "values1": "635 объявлений"  
         
},
{       
    "images": "./images/comp8.png", 
    "values": "Украшения и бижутерия", 
     "values1": "4 147 объявлений"  
         
},
{       
    "images": "./images/comp9.png", 
    "values": "Канцелярия", 
     "values1": "101 объявлений"  
         
},
{       
    "images": "./images/comp10.png", 
    "values": "Спорт и отдых", 
     "values1": "741 объявлений"  
         
},
{       
    "images": "./images/comp11.png", 
    "values": "Автотовары", 
     "values1": "63 объявлений"  
         
},
{       
    "images": "./images/comp12.png", 
    "values": "Новые легковые автомобили", 
     "values1": "847 объявлений"  
         
},
{       
    "images": "./images/comp13.png", 
    "values": "Мототранспорт", 
     "values1": "4 147 объявлений"  
         
},
{       
    "images": "./images/comp14.png", 
    "values": "Дача, сады и огороды", 
     "values1": "847 объявлений"  
         
},
{       
    "images": "./images/comp15.png", 
    "values": "Личная гигиена", 
     "values1": "741 объявлений"  
         
},
{       
    "images": "./images/comp16.png", 
    "values": "Аксессуарлар", 
     "values1": "574 объявлений"  
         
},
{       
    "images": "./images/comp17.png", 
    "values": "Бытовая химия и  гигиена", 
     "values1": "101 объявлений"  
         
},
{       
    "images": "./images/comp18.png", 
    "values": "Строительство и ремонт", 
     "values1": "4 147 объявлений"  
         
},
{       
    "images": "./images/comp7.png", 
    "values": "Детские товары", 
     "values1": "635 объявлений"  
         
},
{       
    "images": "./images/comp8.png", 
    "values": "Украшения и бижутерия", 
     "values1": "4 147 объявлений"  
         
},
{       
    "images": "./images/comp19.png", 
    "values": "Сумки и чемоданы", 
     "values1": "4 147 объявлений"  
         
},
]

let box = document.querySelector(".category-links")
place.forEach((item) => {
    box.innerHTML += `
    
    <div class="nav-item dropdown links">
    <a class="nav-link dropdown-toggle " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
       
            <div class="comp1">
             <img  src=${item.images} alt="">
            </div>
             <div class="values">
                 <h6>${item.values}</h6>
                 <p>${item.values1}</p>
             </div>
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Смартфоны<img src="./images/right-arrow.png" alt=""></a></li>
      <li><a class="dropdown-item" href="#">Фитнес браслеты<img src="./images/right-arrow.png" alt=""></a></li>
      <li><a class="dropdown-item" href="#">Аксессуары для смартфонов и телефонов<img src="./images/right-arrow.png" alt=""></a></li>
      <li><a class="dropdown-item" href="#">Аксессуары для смартфонов и телефонов<img src="./images/right-arrow.png" alt=""></a></li>
      <li><a class="dropdown-item" href="#">Ремешки для часов и смарт-часов<img src="./images/right-arrow.png" alt=""></a></li>
      <li><a class="dropdown-item" href="#">Смарт-часы<img src="./images/right-arrow.png" alt=""></a></li>
      <li><a class="dropdown-item" href="#">Запчасти для смартфонов<img src="./images/right-arrow.png" alt=""></a></li>

    </ul>
</div>`
})





const market =[
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

let box2 = document.querySelector(".main-two")
market.forEach((item) => {
    box2.innerHTML += `
    <div class="announcements">
    <img src=${item.imagemarket} alt="">
    <p class="where">${item.city}</p>
     <a class="names" href="#"><p class="names">${item.names}</p></a>
    <p class="when">${item.when}</p>
    <p class="phone">${item.phone}</p>
    <p class="money">${item.money}<span>UZS</span></p>
 </div>

 
   `
})



// function show password

function showPassword() {
    const btn = document.querySelector(".password_btn");
    const input = document.querySelector(".password_input");
  
    btn.addEventListener("click", () => {
      btn.classList.toggle('active');
  
      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
      } else {
        input.setAttribute('type', 'password');
      }
    });
  }
  
  showPassword();


 








  