//navlinks menu mobile
let menu_icon_box = document.querySelector(".btn-toggle");
let box = document.querySelector(".box");


menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    }
}
// scroll navbar
const navbar = document.getElementById("homenav");

let lastScrollTop = 0;
addEventListener("scroll", () => {
    // Current scroll position
    const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

    // check scroll direction
    const distance = scrollTop - lastScrollTop;
    const currentTop = parseInt(
        getComputedStyle(navbar).top.split("px")
    );

    // Clamp value between -80 and 0
    let amount = Math.max(
        Math.min(
            currentTop +
                (distance < 0
                    ? Math.abs(distance) // scrolling up
                    : -Math.abs(distance)// scrolling down
                    ) * 40, // (1)
            0
        ),
        -80
    );

    console.log(amount, currentTop, Math.abs(distance));
    navbar.style.top = `${amount}px`;
    lastScrollTop = scrollTop;
});

//cards flip ao clicar

// var cards = document.querySelectorAll('.card');

// [...cards].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });

// //pop-up form
// let popup = document.getElementById("popup");

// function openPopup(){
//   popup.classList.add("open-popup");
// }
// function closePopup(){
//   popup.classList.remove("open-popup");
// }


//countUp about
// let section_counter = document.querySelector('#section_counter');
// let counters = document.querySelectorAll('.counter-item .counter');

// Scroll Animation

// let CounterObserver = new IntersectionObserver(
//   (entries, observer) => {
//     let [entry] = entries;
//     if (!entry.isIntersecting) return;

//     let speed = 500;
//     counters.forEach((counter, index) => {
//       function UpdateCounter() {
//         const targetNumber = +counter.dataset.target;
//         const initialNumber = +counter.innerText;
//         const incPerCount = targetNumber / speed;
//         if (initialNumber < targetNumber) {
//           counter.innerText = Math.ceil(initialNumber + incPerCount);
//           setTimeout(UpdateCounter, 10);
//         }
//       }
//       UpdateCounter();

//       if (counter.parentElement.style.animation) {
//         counter.parentElement.style.animation = '';
//       } else {
//         counter.parentElement.style.animation = ` 0.3s ease forwards ${
//           index / counters.length + 0.1
//         }s`;
//       }
//     });
//     observer.unobserve(section_counter);
//   },
//   {
//     root: null,
//     threshold: window.innerWidth > 768 ? 0.4 : 0.3,
//   }
// );

// CounterObserver.observe(section_counter);

//map google
//let map;
//
//async function initMap() {
//  //@ts-ignore
//  const { Map } = await google.maps.importLibrary("map iframe");
//
//  map = new Map(document.getElementById("map"), {
//    center: { lat: -34.397, lng: 150.644 },
//    zoom: 8,
//  });
//}
//
//initMap();