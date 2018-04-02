import "./index.scss";

// TODO: tests

const openDoor = event => event.target.classList.add("close");

const toggleShow = event => {
  const parent = event.target.parentElement;
  const content = parent.querySelectorAll(`.content`)[0];
  content.classList.toggle("show");
};

const sections = document.getElementsByClassName("toggle");
const door = document.getElementsByClassName("door")[0];
door.onclick = openDoor;

for (let s of sections) {
  s.onclick = toggleShow;
}
