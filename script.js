const loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.opacity = "0";
}, 1000);
setTimeout(() => {
  loader.style.display = "none";
}, 1500);

const OnDisplay = document.querySelectorAll(".OnDisplay");
function pageOnDisplay(num) {
  loader.style.display = "block";
  loader.style.opacity = "1";
  for (let i = 0; i < OnDisplay.length; i++) {
    OnDisplay[i].style.display = "none";
  }
  OnDisplay[num].style.display = "block";
  setTimeout(() => {
    loader.style.opacity = "0";
  }, 1000);
  setTimeout(() => {
    loader.style.display = "none";
  }, 1200);
}
for (let i = 0; i < OnDisplay.length; i++) {
  OnDisplay[i].style.display = "none";
}
OnDisplay[0].style.display = "block";
const army = document.querySelector("#linkToArmy");
const airforce = document.querySelector("#linkToAirforce");
const navy = document.querySelector("#linkToNavy");
const shipIcon = document.querySelector("#icon-ship");
const tankIcon = document.querySelector("#icon-tank");
const jeticon = document.querySelector("#icon-jet");
navy.addEventListener("click", () => pageOnDisplay(0));
army.addEventListener("click", () => pageOnDisplay(1));
airforce.addEventListener("click", () => pageOnDisplay(2));
shipIcon.addEventListener("click", () => pageOnDisplay(0));
tankIcon.addEventListener("click", () => pageOnDisplay(1));
jeticon.addEventListener("click", () => pageOnDisplay(2));

/* ------------------------------------------------------------------------------------------------- */

const parallaxElements = document.querySelectorAll(".parallax");

let xCord = 0;
let yCord = 0;
parallaxElements.forEach((ele) => {
  ele.style.transform = "translate(-50%, -50%)";
});

function layerspeed() {
  if (timeline.isActive()) return;
  parallaxElements.forEach((element) => {
    element.classList.add("parallax-afterload");
    let speedX = parseFloat(element.getAttribute("data-speedX"));
    let speedY = parseFloat(element.getAttribute("data-speedY"));
    element.style.transform = `translateX(calc(-50% + ${
      xCord * speedX * 0.4
    }px)) translateY(calc(-50% + ${yCord * speedY * 0.4}px))`;
  });
}

window.addEventListener("mousemove", (event) => {
  xCord = event.clientX - window.innerWidth / 2;
  yCord = event.clientY - window.innerHeight / 2;

  layerspeed();
});

/* -------------------------------mousetrail------------------------------ */
const mousetrail = document.querySelector("#mousetrail");
window.addEventListener("mousemove", function (event) {
  mousetrail.style.left = event.clientX - 2.5 + "px";
  mousetrail.style.top = event.clientY - 2.5 + "px";
  const hoveredElement = event.target;
  if (hoveredElement.tagName === "A" || hoveredElement.tagName === "IMG") {
    mousetrail.classList.add("hovered"); // Add a class for hover style
  } else {
    mousetrail.classList.remove("hovered"); // Remove hover class if not hovering anchor or image
  }
});

/* -------------------------GSAP---------------------------- */

const timeline = gsap.timeline();

parallaxElements.forEach((el) => {
  if (!el.classList.contains("parallax-navy-text")) {
    timeline.from(
      el,
      {
        top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
        duration: 2,
        ease: "power3.out",
      },
      "0"
    );
  }
});
timeline
  .from(
    ".parallax-navy-text",
    {
      y:
        window.innerHeight -
        document.querySelector(".parallax-navy-text").getBoundingClientRect()
          .top,
      duration: 2,
      opacity: 0,
      ease: "power3.out",
    },
    "1"
  )
  .from(
    ".hide",
    {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "2"
  );
