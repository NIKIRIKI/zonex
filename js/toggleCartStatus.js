function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const lenCart = cartWrapper.children.length;
    const orderForm = document.querySelector('#order-form');

    if (lenCart > 0) {
        cartEmptyBadge.classList.add('d-none');
        orderForm.classList.remove('d-none');
    } else {
        cartEmptyBadge.classList.remove('d-none');
        orderForm.classList.add('d-none');
    }
}
