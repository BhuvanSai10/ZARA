document.addEventListener('DOMContentLoaded',()=>{
    const add = document.querySelector('.add-to-bag');
    const sizeBtn = document.querySelectorAll('.box');
    let selectedSize = '';

    sizeBtn.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            selectedSize = btn.innerHTML;
        })
    })

    add.addEventListener('click',()=>{
        if(selectedSize == 'S' || selectedSize == 'M' ||selectedSize == 'L' ||selectedSize == 'XL'){
            console.log("added to shopping bag")
            const itemName = document.querySelector('.item-name');
            localStorage.setItem("itemName",itemName.innerHTML);
            const itemPrice = document.querySelector('.item-price');
            localStorage.setItem("itemPrice",itemPrice.innerHTML);
            const imgSrc = "images/collection/s1/8.jpg";
            localStorage.setItem('imgSrc',imgSrc);
            localStorage.setItem('size',selectedSize);
            openShoppingBag();   
        }
        else{
            alert('SELECT YOUR SIZE')
        }
    })
})

function openShoppingBag(){
    window.location.href = "shoppingBag.html";
}