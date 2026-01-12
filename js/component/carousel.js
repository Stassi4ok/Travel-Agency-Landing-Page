
export function carouselExclusiveDealsCard(carouselData){
    let carouselCardData = [];
    console.log(carouselCardData);
    
    for (let i = 0; i < carouselData.length; i++) {
        const article = document.createElement('article');
        article.classList.add('exclusive-deal-card');

        article.innerHTML = `
            <div class="card-image">
                <img src="${carouselData[i].image}" alt="${carouselData[i].name}">
            </div>

            <div class="card-body">
                <div>
                    <h3>${carouselData[i].name}</h3>
                    <div class="rating">
                        ⭐ <p>${carouselData[i].ratingStars}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <svg><use href="/assets/icons/map-pin.svg"></use></svg>             
                        <p>${carouselData[i].country}</p>
                    </div>

                    <div class="card-price">
                        <p>$${carouselData[i].discountedPrice}</p>
                        <p >$${carouselData[i].price}</p>
                    </div>
                </div>
            </div>
        `
        carouselCardData.push(article);
    }

    console.log(carouselCardData);
    return carouselCardData;
}

export function renderCarousel(carouselInner, carouselCardData, prevButton, nextButton) {

    const data = carouselCardData;

    for (let i = 0; i < 2; i++) {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (i===0) carouselItem.classList.add('active');

        const carouselInnerBlock = document.createElement('div');
        carouselInnerBlock.classList.add('carousel-item-block');

        
        for (let k = 0; k < 4; k++) {
            carouselInnerBlock.append(data[i * 4 + k]);
            
        }
        
        carouselItem.append(carouselInnerBlock);
        carouselInner.append(carouselItem);
    }
}