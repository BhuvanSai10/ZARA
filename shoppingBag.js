function checkLocalStorage(){
    if(localStorage.length==0){
        heading.textContent = 'YOUR SHOPPING BAG IS EMPTY'; 
        shoppingBagContainer.appendChild(heading);
    }
    else{
        document.addEventListener('DOMContentLoaded',()=>{
            let mainContainer = document.querySelector('.shopping-bag-total-container');
            mainContainer.classList.remove('hide');
            

            heading.textContent = 'SHOPPING BAG'; 
            shoppingBagContainer.appendChild(heading);
            const selectedItemContainer = document.createElement('div');
            selectedItemContainer.className = 'selected-item-container';

            const itemImg = document.createElement('div');
            itemImg.className = 'item-img';

            const image = document.createElement('img');
            image.src = localStorage.getItem("imgSrc");
            itemImg.appendChild(image);
            selectedItemContainer.appendChild(itemImg);

            const itemDetailsContainer = document.createElement('div');
            itemDetailsContainer.className = 'item-details-container';

            const itemDetails = document.createElement('div');
            itemDetails.className = 'item-details';

            const itemName = document.createElement('span');
            const itemPrice = document.createElement('span');
            const itemSize = document.createElement('span');
            itemName.className = 'item-name';
            itemPrice.className = 'item-price';
            itemSize.className = 'item-size';

            itemName.textContent = localStorage.getItem("itemName");
            itemPrice.textContent = localStorage.getItem("itemPrice");
            itemSize.textContent = localStorage.getItem('size');

            itemDetails.appendChild(itemName);
            itemDetails.appendChild(itemPrice);
            itemDetails.appendChild(itemSize);

            const noOfItems = document.createElement('div');
            noOfItems.className = 'no-of-items';

            const minus = document.createElement('div');
            let count = document.createElement('div');
            const add = document.createElement('div');

            minus.classList.add('minus');
            minus.classList.add('box');
            count.classList.add('box');
            add.classList.add('box');
            count.classList.add('count');
            add.classList.add('add');

            minus.textContent = '-';
            add.textContent = '+';
            count.textContent = totalCount;

            noOfItems.appendChild(minus);
            noOfItems.appendChild(count);
            noOfItems.appendChild(add);

            itemDetailsContainer.appendChild(itemDetails);
            itemDetailsContainer.appendChild(noOfItems);

            selectedItemContainer.appendChild(itemDetailsContainer);

            shoppingBagContainer.appendChild(selectedItemContainer);
            containerEl.insertBefore(shoppingBagContainer,containerEl.children[1]);

            let totalPrice = totalCount * convert(localStorage.getItem('itemPrice'));
            let finalPrice = document.querySelector('.price');
            finalPrice.textContent = 'TOTAL ₹ ' + totalPrice;
            minus.addEventListener('click',()=>{
                if(totalCount!=0){
                    totalCount--;
                    count.textContent = totalCount;
                    totalPrice = totalCount * convert(localStorage.getItem('itemPrice'));
                    finalPrice.textContent = 'TOTAL ₹ ' + totalPrice;
                }
            
            })
            add.addEventListener('click',()=>{
                totalCount++;
                count.textContent = totalCount;
                totalPrice = totalCount * convert(localStorage.getItem('itemPrice'));
                finalPrice.textContent = 'TOTAL ₹ ' + totalPrice;
            })

            let placeOrder = document.querySelector('.continue');
            placeOrder.addEventListener('click',()=>{
                alert("THANKS FOR ORDERING !!! ZARA HAPPY SHOPPING");
            })

        })
    }
}
let totalCount = 1;
const containerEl = document.querySelector('.container');
let shoppingBagContainer = document.createElement('div');
shoppingBagContainer.className = 'shopping-bag-container';
let heading = document.createElement('div');
heading.className = 'heading';

if(containerEl.children.length>1){
    containerEl.insertBefore(shoppingBagContainer,containerEl.children[1]);
}else{
    containerEl.appendChild(shoppingBagContainer);
}

function convert(priceString){
    let numString = priceString.replace(/[₹,]/g, '');
    let priceNumber = parseInt(numString, 10);
    return priceNumber;
}

console.log(localStorage)

checkLocalStorage();
