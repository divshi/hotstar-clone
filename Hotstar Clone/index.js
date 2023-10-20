const movies = [
    {
        name: "Falcon and the Winter Soldier",
        des: "The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
        image: "./images/slider 2.png"
    },
    {
        name: "Loki",
        des: "Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics featuring the character of the same name. ",
        image: "./images/slider 1.png"
    },
    {
        name: "WandaVision",
        des: "WandaVision is an American television miniseries created by Jac Schaeffer for the streaming service Disney+, based on Marvel Comics featuring the characters Wanda Maximoff / Scarlet Witch and Vision.",
        image: "./images/slider 3.png"
    },
    {
        name: "Raya and the Last Dragon",
        des: "Raya and the Last Dragon is a 2021 American computer-animated fantasy action-adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures. The 59th film produced by the studio. ",
        image: "./images/slider 4.png"
    },
    {
        name: "Luca",
        des: "Luca is a 2021 American computer-animated coming-of-age fantasy film produced by Pixar Animation Studios for Walt Disney Pictures. ",
        image: "./images/slider 5.png"
    }
];

const carousel = document.querySelector('.carousel');
let slider = [];
let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
  
    const slide = document.createElement('div');
    const imgElement = document.createElement('img');
    const content = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
  
    imgElement.src = movies[slideIndex].image;
    h1.textContent = movies[slideIndex].name;
    p.textContent = movies[slideIndex].des;
  
    slide.appendChild(content);
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
  
    slide.classList.add('slider');
    content.classList.add('slide-content');
    h1.classList.add('movie-title');
    p.classList.add('movie-des');
  
    slider.push(slide);
    carousel.appendChild(slide);
  
    if (slider.length > 1) {
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 1)}% - ${30 * (slider.length - 1)}px)`;
    }
  
    slideIndex++;
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 1500);


// Video cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });
});

// Card sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((items, i) => {
    let containerDimensions = items.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        items.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener('click', () => {
        items.scrollLeft -= containerWidth + 200;
    });
});
