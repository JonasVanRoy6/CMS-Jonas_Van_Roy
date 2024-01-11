function sortItemsByScore(order) {
    var items = document.querySelectorAll('.product');
    var sortedItems = Array.from(items).sort(function(a, b) {
        var scoreA = parseFloat(a.querySelector('.score').innerText.replace('★', ''));
        var scoreB = parseFloat(b.querySelector('.score').innerText.replace('★', ''));

        if (order === 'asc') {
            return scoreA - scoreB;
        } else {
            return scoreB - scoreA;
        }
    });

    var productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';
    sortedItems.forEach(function(item) {
        productContainer.appendChild(item);
    });
}