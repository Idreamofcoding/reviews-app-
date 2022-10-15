// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan Smith",
        job: "web developer",
        img: "https://media.istockphoto.com/photos/happy-young-asian-woman-in-earphones-singing-and-listening-to-music-picture-id1219897842?s=612x612",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci reprehenderit laboriosam temporibus ab fugit vel, dolorum illum eos? Necessitatibus, laudantium."
    },
    {
        id: 2,
        name: "billy jay",
        job: "garbage man",
        img: "https://media.istockphoto.com/photos/beautiful-latin-girl-using-her-mobile-phone-picture-id1405154926?s=612x612",
        text: "I like watching CNN in the morning with a cup of hot coffee and bread."
    },
    {
        id: 3,
        name: "dolphins fan",
        job: "electrician",
        img: "https://media.istockphoto.com/photos/smiling-latin-businesswoman-listening-to-music-at-hotel-lobby-picture-id1405154894?s=612x612",
        text: "I take flights twice a month."
    },
    {
        id: 4,
        name: "bazzi from wish",
        job: "life gaurd",
        img: "https://media.istockphoto.com/photos/young-hispanic-woman-smiling-happy-using-smartphone-and-headphones-at-picture-id1295051170?s=612x612",
        text: "I own a t shirt and sneaker business."
    },
    {
        id: 5,
        name: "flake",
        job: "senator",
        img: "https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?s=612x612",
        text: "I make cupcakes, cakes, ice cream cakes, donuts, muffins, banana boats, sell party hats, make custom cakes, big cakes, small cakes, wedding cakes, funeral cakes, sweet 16 cakes, college graduation cakes, all types of cakes."
    }
]

// select items
const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const previousBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson()
})

// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    image.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson()
})


// show previous person

previousBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson()
})


// randomize a person

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson()
})















