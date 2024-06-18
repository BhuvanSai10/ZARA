const womenCategory = ["///  NEW","MADE IN INDIA","BEST SELLERS","BLAZERS","DRESSES","SKIRTS","SHORTS | SKORTS","TOPS | BODYSUITS","SHIRTS","T-SHIRTS","JEANS","TROUSERS","SHOES","BAGS","JACKETS | TRENCH","KNITWEAR","WAISTCOATS","SWIMWEAR","ACCESSORIES | JEWELLERY","PERFUMES","MAKEUP","BASICS","LINEN","CO-ORD SETS","SPECIAL PRICES"];
const menCategory =["///  NEW","#SELECTEDBY","GIFTS FOR HIM","BEST SELLERS","LINEN","SHIRTS","T-SHIRTS","POLO SHIRTS","SHORTS","TROUSERS","JEANS","SUITS","SWIMWEAR","CROCHET","JACKETS | COATS","HOODIES | SWEATSHIRTS","OVERSHIRTS","BLAZERS","MATCHING SETS","CARGO","TRAINERS","SHOES","BAGS | BACKPACKS","ACCESSORIES","PERFUMES","SPECIAL PRICES","MAKEUP","MADE IN INDIA"];
const kidsCategory = ["GIRL","1 - 6 YEARS","6 - 14Y","BOY","1 - 6 YEARS","6 - 14Y","BABY","0 - 6 MONTHS","6 - 18 MONTHS","ACCESSORIES | SHOES | 0 - 14 YEARS"];
const beautyCategory = ["WOMEN","Perfumes","Makeup","MAN","KIDS"];
const brandLogo = document.getElementsByClassName('brand-logo');
const menu = document.querySelector(".menu");
const womenCategorySelected = document.getElementById("women");
const menCategorySelected = document.getElementById("men");
const kidsCategorySelected = document.getElementById("kids");
const beautyCategorySelected = document.getElementById("beauty");
const menuOptions = document.querySelectorAll('.menu-option');  //Used for selecting the category(MEN , WOMEN , KIDS , BEAUTY)
let itemCategory = document.createElement('div'); // TO STORE EACH CATEGORY ITEMS
const line= document.getElementById("line-holder");

document.addEventListener("DOMContentLoaded",function(){
    const containerElement = document.querySelector(".container")

    // MENU OPEN CLOSE OPERATION
    const menuIcon = document.getElementById('menu-icon');
    const bestSellerSelected = document.querySelector('.best-sellers');
    menuIcon.addEventListener('click',function(){
        if(menuIcon.classList.contains('show')){
            
            menuIcon.src='images/menu-close.png';
            menuIcon.classList.remove('show');
            menuIcon.className = 'close'
            menCategorySelected.click();
            bestSellerSelected.style.color='black';
        }
        else if(menuIcon.classList.contains('close')){
            menuIcon.src='images/menu-open.png';
            menuIcon.classList.remove('close');
            menuIcon.className = 'show';
            bestSellerSelected.style.color='white';
            if(itemCategory.classList.contains("category")){
                itemCategory.innerHTML="";
                menu.removeChild(itemCategory);
                itemCategory=null;
                itemCategory = document.createElement('div');
            }
            menu.style.backgroundColor='';
            menu.style.border='';
            line.className='';
            menuOptions.forEach((option,index)=>{
                option.style.color='white';
            })
            
        }
    })

    //show menu for each category (MEN , WOMEN , KIDS , BEAUTY)
    menuOptions.forEach((option,index)=>{
        option.addEventListener('click',function(){
            if(itemCategory.classList.contains("category")){
                itemCategory.innerHTML="";
                menu.removeChild(itemCategory);
                itemCategory=null;
                itemCategory = document.createElement('div');
            }
            switch (index){
                case 0:
                    for(let i=0 ; i<womenCategory.length ; i++){
                        const newSpan = document.createElement('span');
                        newSpan.className = "item"
                        newSpan.textContent = womenCategory[i];
                        itemCategory.appendChild(newSpan);
                    }
                    
                    break;
                case 1:
                    for(let i=0 ; i<menCategory.length ; i++){
                        const newSpan = document.createElement('span');
                        newSpan.className = "item"
                        newSpan.textContent = menCategory[i];
                        itemCategory.appendChild(newSpan);
                    }
                    break;
                case 2:
                    for(let i=0 ; i<kidsCategory.length ; i++){
                        const newSpan = document.createElement('span');
                        newSpan.className = "item"
                        newSpan.textContent = kidsCategory[i];
                        itemCategory.appendChild(newSpan);
                    }
                    break;
                case 3:
                    for(let i=0 ; i<beautyCategory.length ; i++){
                        const newSpan = document.createElement('span');
                        newSpan.className = "item"
                        newSpan.textContent = beautyCategory[i];
                        itemCategory.appendChild(newSpan);
                    }
                    break;
                default:
                    break;
            }
            line.className='line';
            itemCategory.className = 'category';
            menu.appendChild(itemCategory);
            womenCategorySelected.style.color='black'
            menCategorySelected.style.color='black'
            kidsCategorySelected.style.color='black'
            beautyCategorySelected.style.color='black'
            menu.style.backgroundColor='white'
            menu.style.border='2px solid black'
            bestSellerSelected.style.color='black';
            menuIcon.src='images/menu-close.png';
            menuIcon.classList.remove('show');
            menuIcon.className = 'close'
            
        })
    })

    
})

function openPage() {
    window.location.href = "login.html";
}
function homePage(){
    window.location.href = "home.html";
}

function openBestSellers(){
    window.location.href = "bestSellers.html";
}

function openShoppingBag(){
    window.location.href = "shoppingBag.html";
}

function openHelp(){
    window.location.href = "help.html";
}