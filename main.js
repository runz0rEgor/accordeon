const btn = document.querySelectorAll(".accordeon");

const showList = () => {
  btn.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      item.nextElementSibling.classList.toggle("active");
    });
  });
};

showList();
