function filterItems() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const itemsContainer = document.getElementById('itemsContainer');
    const cards = itemsContainer.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const title = card.getElementsByTagName('h3')[0].textContent.toLowerCase();
        const description = card.getElementsByTagName('p')[0].textContent.toLowerCase();

        if (title.includes(filter) || description.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    }
}
