// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   spaceBetween: 10,

//   thumbs: {
//     swiper: {
//       el: '.image-mini-slider',
//       slidesPreView: 4,
//       spaceBetween: 12,
//       freeMode: false,
//     }
//   }
// });


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,

  thumbs: {
    swiper: {
      el: '.image-mini-slider',
      slidesPerView: 4, // Вместо slidesPrewiew исправлено на slidesPerView
      spaceBetween: 10,
      // freeMode: false,
    }
  }
});


let selectCollection = document.querySelectorAll('select');
let svgSelect = document.querySelectorAll('.form-user div svg');
console.log(svgSelect);
console.log(selectCollection[0]);

// let formUser = document.querySelector('.form-user');
// formUser.addEventListener('change', () => {
//   if(selectCollection[0]) {
//     console.log(111);
//   }
// })




selectCollection.forEach(el => {
  el.addEventListener('click', (event) => {
    console.log(event.target);
    if(event.target === selectCollection[0]) {
      svgSelect[0].classList.add('open'); 
      svgSelect[1].classList.remove('open'); 
    } else if (event.target === selectCollection[1]) {
      svgSelect[1].classList.add('open');  
      svgSelect[0].classList.remove('open');  
    }
  })
})

selectCollection.forEach(el => {
  el.addEventListener('mouseleave', () => {
      svgSelect[1].classList.remove('open'); 
      svgSelect[0].classList.remove('open');  
    
  })
})


document.querySelector('.change-price').innerHTML = 'R 160.00';


// Устанавливаем дату, до которой будет идти обратный отсчет (год, месяц, день, час, минута, секунда)
const countdownDate = new Date('2023-12-31T23:59:59').getTime();

// Функция, которая обновляет таймер каждую секунду
const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance <= 0) {
    // Обратный отсчет завершен
    clearInterval(timerInterval);
    document.getElementById('timer').innerHTML = 'Время истекло!';
    return;
  }

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Обновляем элементы на странице с оставшимся временем
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
};

// Начинаем обратный отсчет сразу после загрузки страницы
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
