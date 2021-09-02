{
    let category = document.querySelector('#category');
    if(category) {
        let categoryList = category.querySelector('.products__list');
        let btn = category.querySelector('.products__load-more');
        let btnWrapper = category.querySelector('.products__bottom');
    
        if(categoryList.children.length > 9) {
            let children = Array.from(categoryList.children);
            let lastItems = children.slice(9);

            lastItems.forEach(item => item.style.display = 'none');

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                lastItems.forEach(item => item.style.display = 'block');
                btnWrapper.setAttribute('hidden', '');
            })
        } else {
            btnWrapper.setAttribute('hidden', '');
        }
    }
}