import "./index.scss";

// TODO: tests


const toggleShow = (event) => {
  const parent = event.target.parentElement.className;
  const content = document.querySelectorAll(`.${parent} .content`)[0];
  content.classList.toggle("show");
};

const sections = document.getElementsByClassName("toggle");

for (let s of sections) {
    s.onclick = toggleShow;
  }
