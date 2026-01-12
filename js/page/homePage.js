import { renderCarousel } from "../component/carousel.js";
import { exclusiveDealsData } from "../../data/Exclusive deals/exclusiveDealsData.js";
import { carouselExclusiveDealsCard } from "../component/carousel.js";
const carouselExclusiveDealsInner = document.querySelector('.js-carousel-exclusive-deals-inner');


const carouselCardData = carouselExclusiveDealsCard(exclusiveDealsData);

renderCarousel(carouselExclusiveDealsInner,carouselCardData);

