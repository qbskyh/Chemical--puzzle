const elements = document.querySelectorAll('.element');
const categories = document.querySelectorAll('.category');

elements.forEach((element) => {
    element.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.dataset.category);
    });
});

categories.forEach((category) => {
    category.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    category.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedCategory = e.dataTransfer.getData('text/plain');
        if (category.id === draggedCategory) {
            const element = document.querySelector(`[data-category="${draggedCategory}"]`);
            category.appendChild(element);
            element.setAttribute('draggable', 'false');
            element.style.cursor = 'default';
        } else {
            alert('Неверный выбор!');
        }
    });
});
