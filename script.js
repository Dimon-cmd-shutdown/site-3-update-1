const resetLinkHighlight = () => {
  [...document.querySelectorAll(".header-menu")].forEach((el) => {
    el.classList.remove("active");
  });
};
const menu_color = () => {
  const links = document.querySelectorAll(".header-container-1");
  const sell = document.querySelector(".header-menu:nth-child(1)");
  const marketplace = document.querySelector(".header-menu:nth-child(2)");
  const community = document.querySelector(".header-menu:nth-child(3)");
  const develop = document.querySelector(".header-menu:nth-child(4)");
  const resources = document.querySelector(".header-menu:nth-child(5)");
  const paralax1 = document.querySelector(".paralax-img");
  const paralax2 = document.querySelector(".wraper-4-main-img");

  links[0].addEventListener("click", (e) => {
    if (e.target.classList.contains("header-menu")) {
      console.log("click");
      resetLinkHighlight();
      e.target.classList.add("active");
    }
  });

  window.addEventListener("wheel", () => {
    console.log(pageYOffset);

      if(pageYOffset >= 1000){paralax1.style.position = "absolute";}
    if (pageYOffset >= 0 && pageYOffset <= 659) {
      resetLinkHighlight();
    }
    if (pageYOffset >= 659 && pageYOffset <= 1559) {
      resetLinkHighlight();
      sell.classList.add("active");
    }
    if (pageYOffset >= 1559 && pageYOffset <= 2644) {
      resetLinkHighlight();
      marketplace.classList.add("active");
    }
    if (pageYOffset >= 2644 && pageYOffset <= 3400) {
      resetLinkHighlight();
      community.classList.add("active");
    }
    if (pageYOffset >= 3400 && pageYOffset <= 4581) {
      resetLinkHighlight();
      develop.classList.add("active");
    }
    if (pageYOffset >= 4581) {
      resetLinkHighlight();
      resources.classList.add("active");
    }
    //  else {
    //   resetLinkHighlight();
    // }
  });
};

menu_color();

const slider = () => {
  let elements = document.querySelectorAll(".slider-item");

  const keyLeft = document.querySelector(".left-button");

  const keyRight = document.querySelector(".right-button");

  let i = 0;

  let l = 1;

  let r = 1;

// const reset = {
//   elements.forEach
// }

  const block = () => {
    keyLeft.disabled = i <= 0;
    keyRight.disabled = i >= 2;
    if (i === 0) {
      keyLeft.style.color = "#757888";
      keyLeft.style.fontSize = "36px";
      l = 0;
    }
    if (i === 2) {
      keyRight.style.color = "#757888";
      keyRight.style.fontSize = "36px";
      r = 0;
    }
    if (i > 0 && i < 2) {
      keyRight.style.color = "#272d4e";
      keyLeft.style.color = "#272d4e";
      keyRight.style.fontSize = "40px";
      keyLeft.style.fontSize = "40px";
      l = 1;
      r = 1;
    }
  };
  block();
  keyLeft.addEventListener("click", () => {
    i -= l;
    elements[i].style.zIndex = 2;
    elements[i + 1].style.zIndex = 0;
    block();
  });

  keyRight.addEventListener("click", () => {
    i += r;
    elements[i].style.zIndex = 2;
    elements[i - 1].style.zIndex = 0;
    block();
  });
};
slider();

// let arr1 = [0,1,2,'ss'];
// let arr2 = [0,1,2,'ss'];

// arr1.toString() === arr2.toString() ? console.log('same') : console.log('not same');
