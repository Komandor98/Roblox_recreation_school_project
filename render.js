window.onload = function() {
    fetch("content.json").then(function(response){
        return response.json()
    }).then(function(object){
        const carouselContainer = document.getElementById("carouselContainer");

        const videos1 = object.videos.slice(0, 15);
        const videos2 = object.videos.slice(15, 30);
        const videos3 = object.videos.slice(30, 45);
        const videos4 = object.videos.slice(45, 60);
        const videos5 = object.videos.slice(60, 75);

        const mainTitle = document.createElement("h1");
        mainTitle.textContent = "Discover";
        carouselContainer.appendChild(mainTitle);

        const carouselTitle1 = document.createElement("h3");
        carouselTitle1.textContent = "SUSY Experiences";
        carouselContainer.appendChild(carouselTitle1);
        createCarousel(carouselContainer, "carousel1", videos1);

        const carouselTitle2 = document.createElement("h3");
        carouselTitle2.textContent = "The best gambling experiences :3";
        carouselContainer.appendChild(carouselTitle2);
        createCarousel(carouselContainer, "carousel2", videos2);

        const carouselTitle3 = document.createElement("h3");
        carouselTitle3.textContent = "Experiences 5 year olds adore";
        carouselContainer.appendChild(carouselTitle3);
        createCarousel(carouselContainer, "carousel3", videos3);

        const carouselTitle4 = document.createElement("h3");
        carouselTitle4.textContent = "Experiences playes murrder eachother in";
        carouselContainer.appendChild(carouselTitle4);
        createCarousel(carouselContainer, "carousel4", videos4);

        const carouselTitle5 = document.createElement("h3");
        carouselTitle5.textContent = "Experiences some companies payed us to promote";
        carouselContainer.appendChild(carouselTitle5);
        createCarousel(carouselContainer, "carousel5", videos5);
    });
}

function createCarousel(container, carouselId, videos) {
    const carouselDiv = document.createElement("div");
    carouselDiv.classList.add("container");
    carouselDiv.id = carouselId;

    container.appendChild(carouselDiv);

    const myDiv = document.getElementById(carouselId);
    const totalVideos = videos.length;
    let currentVideo = 0;

    let result = "<div class='slider'>";

    for(let i = 0; i < totalVideos; i++) {
        result += `<div class="slide"><img src="${videos[i].imageURL}" alt="thumbnail" id="thumbnail"> <a style="font-size: 16px;">${videos[i].title}</a></div>`;
    }

    result += `<button class='btn btn-next' data-container="${carouselId}"><span class='carousel_arrow_right'></span></button> <button class='btn btn-prev' data-container="${carouselId}"><span class='carousel_arrow_left'></span></button></div>`;
    myDiv.innerHTML = result;

    const slider = myDiv.querySelector(".slider");

    slider.querySelector(".btn-next").addEventListener("click", function() {
        currentVideo = (currentVideo + 1) % totalVideos;
        updateCarousel();
    });

    slider.querySelector(".btn-prev").addEventListener("click", function() {
        currentVideo = (currentVideo - 1 + totalVideos) % totalVideos;
        updateCarousel();
    });

    updateCarousel();

    function updateCarousel() {
        const slides = slider.querySelectorAll(".slide");
        slides.forEach(function(slide, index) {
            const offset = index - currentVideo;
            const position = (offset * 100) + "%";
            slide.style.transform = `translateX(${position})`;
        });
    }
}
