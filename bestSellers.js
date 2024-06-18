let collection =[
    {
        imgSrc:'1.jpg',
        itemName:'SEERSUCKER SHIRT',
        itemPrice:'₹ 3,590.00'
    },
    {
        imgSrc:'2.jpg',
        itemName:'SSCALLOPED SHIRT WITH EMBROIDERY',
        itemPrice:'₹ 4,290.00'
    },
    {
        imgSrc:'3.jpg',
        itemName:'STRIPED STRETCHY SHIRT',
        itemPrice:'₹ 3,590.00'
    },
    {
        imgSrc:'4.jpg',
        itemName:'PRINTED LINEN/VISCOSE SHIRT',
        itemPrice:'₹ 3,590.00'
    },
    {
        imgSrc:'5.jpg',
        itemName:'STREAK PRINT SHIRT',
        itemPrice:'₹ 3,590.00'
    },
    {
        imgSrc:'6.jpg',
        itemName:'RELAXED FIT CARGO TROUSERS',
        itemPrice:'₹ 4,990.00'
    },{
        imgSrc:'7.jpg',
        itemName:'COTTON - LINEN SHIRT',
        itemPrice:'₹ 3,290.00'
    },{
        imgSrc:'8.jpg',
        itemName:'W/END TILL 8.00 PM W/END TILL 3:00 AM 100 ML',
        itemPrice:'₹ 1,290.00'
    },{
        imgSrc:'9.jpg',
        itemName:'CROPPED LEATHER JACKET',
        itemPrice:'₹ 29,990.00'
    },
    {
        imgSrc:'10.jpg',
        itemName:'COTTON - LINEN TROUSERS',
        itemPrice:'₹ 3,290.00'
    }, {
        imgSrc:'11.jpg',
        itemName:'CHUNKY SNEAKERS',
        itemPrice:'₹ 3,990.00'
    }, {
        imgSrc:'12.jpg',
        itemName:'MULTICOLOURED SNEAKERS',
        itemPrice:'₹ 2890.00'
    }, {
        imgSrc:'13.jpg',
        itemName:'RELAXED FIT CARGO TROUSERS',
        itemPrice:'₹ 3,990.00'
    }, {
        imgSrc:'14.jpg',
        itemName:'RELAXED FIT CARGO TROUSERS',
        itemPrice:'₹ 4,990.00'
    }, 
    {
        imgSrc:'15.jpg',
        itemName:'RELAXED FIT CARGO TROUSERS',
        itemPrice:'₹ 3,990.00'
    },
    {
        imgSrc:'16.jpg',
        itemName:'FADED ABSTRACT PRINT SWEATSHIRT',
        itemPrice:'₹ 3,590.00'
    },
    {
        imgSrc:'17.jpg',
        itemName:'RELAXED FIT CARGO TROUSERs',
        itemPrice:'₹ 3,290.00'
    }, {
        imgSrc:'18.jpg',
        itemName:'GEOMETRIC JACQUARD SHIRT',
        itemPrice:'₹ 4,950.00'
    }, {
        imgSrc:'19.jpg',
        itemName:'FADED PRINTED KNIT T-SHIRT',
        itemPrice:'₹ 2,550.00'
    },
    {  imgSrc:'20.jpg',
        itemName:'SLIM CROPPED-FIT JEANS',
        itemPrice:'₹ 2,590.00'
    }, 
    {  imgSrc:'21.jpg',
        itemName:'#TOBACCO COLLECTION RICH WARM ADDICTIVE 100 ML / 3.38 OZ',
        itemPrice:'₹ 1,190.00'
    },{
        imgSrc:'22.jpg',
        itemName:'FADED CHECK SHIRT',
        itemPrice:'₹ 4,290.00'
    }, {
        imgSrc:'23.jpg',
        itemName:'RELAXED FIT CARGO TROUSERS',
        itemPrice:'₹ 4,990.00'
    }, {
        imgSrc:'24.jpg',
        itemName:'EMBROIDERED SHIRT',
        itemPrice:'₹ 4,990.00'
    }, {
        imgSrc:'25.jpg',
        itemName:'VISCOSE/LINEN BLEND SHIRT',
        itemPrice:'₹ 3,290.00'
    }, {
        imgSrc:'26.jpg',
        itemName:'TEXTURED COTTON BERMUDA SHORTS',
        itemPrice:'₹ 2,990.00'
    }, {
        imgSrc:'27.jpg',
        itemName:'MULTI-PIECE SNEAKERS',
        itemPrice:'₹ 2,890.00'
    }, {
        imgSrc:'28.jpg',
        itemName:'STRIPED TEXTURED OVERSHIRT',
        itemPrice:'₹ 7,590.00'
    }, {
        imgSrc:'29.jpg',
        itemName:'STRIPED CROCHET SHIRT',
        itemPrice:'₹ 4,990.00'
    }, {
        imgSrc:'30.jpg',
        itemName:'MULTIPIECE SNEAKERS',
        itemPrice:'₹ 2,890.00'
    },
    {
        imgSrc:'31.jpg',
        itemName:'CHELSEA BOOTS WITH TOECAP DETAIL',
        itemPrice:'₹ 5,990.00'
    },
    {
        imgSrc:'32.jpg',
        itemName:'VERTICAL STRIPE SHIRT',
        itemPrice:'₹ 3,590.00'
    }
    
]


document.addEventListener('DOMContentLoaded', () => {
    let mainContentElement = document.querySelector('.main-content');
    let imagesource = "images/collection/i";

    function loadContent(){
        collection.forEach((item)=>{
            let itemContainer = document.createElement('div'); //Main container
            itemContainer.className='item-container';
            let itemImg = document.createElement('div');
            itemImg.className = 'item-img';
        
            let img = document.createElement('img');
            img.src=imagesource + item.imgSrc;

            const addToBag = document.createElement('span');
            addToBag.className='add-to-bag'
            addToBag.textContent='+';

        
            itemImg.appendChild(img);
            itemImg.appendChild(addToBag);
        
        
            let itemDetails=document.createElement('div');
            itemDetails.className = 'item-details';
        
            let itemContent = document.createElement('div');
            itemContent.className='item-content';
        
            let itemNameContent = document.createElement('div');
            itemNameContent.className='item-name';
            itemNameContent.textContent = item.itemName;

            const wishlist = document.createElement('span');
            wishlist.className='bookmark';
            wishlist.textContent='♡';
            
            itemContent.appendChild(itemNameContent);
            itemContent.appendChild(wishlist);
        
            itemDetails.appendChild(itemContent);
        
            let itemPriceContent = document.createElement('span');
            itemPriceContent.className = 'item-price';
            itemPriceContent.textContent = item.itemPrice;
        
            itemDetails.appendChild(itemPriceContent);
            
            itemContainer.appendChild(itemImg);
            itemContainer.appendChild(itemDetails);
            
            mainContentElement.appendChild(itemContainer);
        });
    }

    loadContent();

})

function openShop(){
    window.location.href='shop.html';
}



