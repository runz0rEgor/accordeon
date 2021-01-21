// const btn = document.querySelectorAll(".accordeon");

// const showList = () => {
//   btn.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       e.preventDefault();
//       e.target.nextElementSibling.classList.toggle('active')
//       // item.nextElementSibling.classList.toggle("active");      
//     });
//   });
// };

// showList();

const wrapper = document.querySelector('.wrapper')

const showList = () => {
  wrapper.addEventListener('click', e => {
    if(e.target.classList.contains('accordeon')) {
      e.target.nextElementSibling.classList.toggle('active')
    }
  })
}

showList()