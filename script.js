const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item')
const btn = carousel.querySelector('button');

carousel.addEventListener('click', (e)=>{
    if(e.target.matches('button')){
        const itemsArray = Array.from(items);
        const activeIndex = itemsArray.findIndex(item => item.classList.contains('active'));
        const target = e.target;
        const slide = target.dataset.slide;
        items.forEach(item => item.classList.remove('active'));
        if(slide === 'next'){
            if(activeIndex === items.length - 1){
                items[0].classList.add('active');
            }else{
                const nextItem = parseInt(activeIndex) + 1;
                items[nextItem].classList.add('active');
            }
        }else if(slide === 'prev'){
            if(activeIndex === 0){
                items[items.length-1].classList.add('active');
            }else{
                const prevItem = parseInt(activeIndex) - 1;
                items[prevItem].classList.add('active');
            }
        }
    }
})