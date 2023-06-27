// Добавляем обработчик события "click" на объект window
window.addEventListener('click', function (event) {
    // Получаем значение атрибута "data-action" у элемента, по которому был совершен клик
    const action = event.target.dataset.action;
    // Проверяем, равно ли значение "action" строке "plus" или "minus"
    if (action === 'plus' || action === 'minus') {
        // Находим ближайший элемент с классом "counter-wrapper"
        const counterWrapper = event.target.closest('.counter-wrapper');
        const cartWrapper = event.target.closest('.cart-wrapper');
        const cartItem = event.target.closest('.cart-item');
        // Внутри найденного элемента ищем элемент с атрибутом "data-counter"
        const counter = counterWrapper.querySelector('[data-counter]');
        // Получаем текущее значение счетчика и преобразуем его в число
        let count = parseInt(counter.innerText);
        // Если значение "action" равно "plus", увеличиваем значение счетчика на 1
        if (action === 'plus') {
            count++;
        } else if (count > 1) { // Иначе, если значение счетчика больше или равно 2, уменьшаем его на 1
            count--;
        } else if (cartWrapper && count === 1) {
            cartItem.remove();
        }
        // Обновляем текстовое содержимое элемента счетчика новым значением
        counter.innerText = count;
        if(count >= 0) {
            toggleCartStatus();
            calcCartPriceAndDelivery();
        }
    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }
});

