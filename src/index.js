import "./index.scss";

// TODO: tests

const sections = Array.from(
  ["skills", "work", "education", "recommendations"],
  x => document.getElementsByClassName(x)
);

const toggleShow = event => {
  const parent = event.target.className;
  const content = document.querySelectorAll(`.${parent} .content`)[0];
  console.log("parent", parent, "content", content)
  content.classList.toggle("show");
};

sections.forEach((section, i, a) => {
  for (let s of section) {
    s.onclick = toggleShow;
  }
});
