document.addEventListener("DOMContentLoaded", function () {
    if(document.querySelector(".heroSwiper")){
        new Swiper(".heroSwiper",{

            slidesPerView:1,
            loop:true,
            spaceBetween:20,

            autoplay:{
                delay:3000,
                disableOnInteraction:false
            },

            pagination:{
                el:".swiper-pagination",
                clickable:true
            }
        });
    }
});