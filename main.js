   // dynamic DOM creation 
  //  let ajax_loader = document.getElementById('ajax_loader') 
  //  ajax_loader.style.visibility = 'hidden'
   let container = document.getElementById('clothing')
   let container2 = document.getElementById('accessories');
   let section_heading1 = document.getElementById('clothing_h2')
   let section_heading2 = document.createElement('accessories_h2')
   let footer = document.getElementById('footer')
   let card_container = document.getElementById('clothingCards');
   let card_container2 = document.getElementById('accessoriesCards');
   let productsURL = 'https://5d76bf96515d1a0014085cf9.mockapi.io/product'
   let cart_value = window.localStorage.getItem('cart-count')
   let cart_count = document.getElementById('cart-count');
   cart_count.innerText = cart_value

   // fetch products from API and card element creation
   const fetchProducts = async (url) => {
     let response = await fetch(url);
     let data = await response.json()
     for (let i = 0; i < data.length; i++) {
       let a_tag = document.createElement('a');
       let card = document.createElement('div');
       let img = document.createElement('div');
       let img_tag = document.createElement('img');
       let details = document.createElement('div')
       let h3 = document.createElement('h3');
       let h4 = document.createElement('h4');
       let h5 = document.createElement('h5');
       h3.style.cssText = 'text-align: left;font-size: 16px; font-weight: 400;letter-spacing: 0.5px;color: rgb(27, 25, 25);';
       h3.innerText = data[i].name
       h4.style.cssText = 'margin-top: 10px; text-align: left; font-size: 12px;color: rgb(110, 110, 110);';
       h4.innerText = data[i].brand
       h5.style.cssText = 'margin-top: 10px; text-align: left;font-size: 15px;letter-spacing: 2px;color: #009688;';
       h5.innerText = "Rs " + data[i].price
       details.appendChild(h3)
       details.appendChild(h4)
       details.appendChild(h5)
       img_tag.src = data[i].preview
       img.appendChild(img_tag)
       img.setAttribute('class', 'img')
       img.style.cssText = 'width:100%;background-repeat:no-repeat;background-size:contain';
       img_tag.style.cssText = 'background-repeat:no-repeat;background-size:cover;height:260px;width:100%';
       details.setAttribute('class', 'details')
       details.style.cssText = 'padding-left:10px;margin:10px auto;'
       card.setAttribute('class', 'card')
       card.setAttribute('id', i);
       card.style.cssText = 'width: 15%;min-width: 200px;height: auto; margin: 30px 10px; cursor: pointer;background-color: #fff;box-shadow: 0 2px 10px rgb(0 0 0 / 30%);'
       a_tag.setAttribute('href',`product.html?product_id=${data[i].id}`)
       if (data[i].isAccessory == true) {
         card_container2.appendChild(card)
         card.appendChild(a_tag)
         a_tag.appendChild(img)
         a_tag.appendChild(details)
       } else {
         card_container.appendChild(card)
         card.appendChild(a_tag)
         a_tag.appendChild(img)
         a_tag.appendChild(details)
       }
     }
   }
   fetchProducts(productsURL)

   