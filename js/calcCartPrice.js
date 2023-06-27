function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDeliveryEl = document.querySelector('[data-cart-delivery');
    const cartSmallEl = document.querySelector('[data-cart-small');
    let totalPrice = 0;
    
    cartItems.forEach(function(item) {
        const amountElement = item.querySelector('[data-counter]');
        const priceElement = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountElement.innerText) * parseInt(priceElement.innerText);
        totalPrice += currentPrice;
    });

    totalPriceEl.innerText = totalPrice;

    if(totalPrice > 0) {
        cartDeliveryEl.classList.remove('d-none');
        cartSmallEl.classList.remove('d-none');
    } else {
        cartDeliveryEl.classList.add('d-none')
        cartSmallEl.classList.add('d-none');
    }
    
    if(totalPrice >= 5000) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно'
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '1000 ₽'
    }
}
