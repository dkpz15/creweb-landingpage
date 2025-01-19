const body = document.querySelector("body");

setTimeout(() => {
  body.classList.add("body-opacity-1");
}, 500);

const allImageLogo = [
  {
    name: "Google",
    image: "google.png",
  },
  {
    name: "Gojek",
    image: "gojek.png",
  },
  {
    name: "Spotify",
    image: "spotify.png",
  },
  {
    name: "Adobe",
    image: "adobe.png",
  },
  {
    name: "Microsoft",
    image: "microsoft.png",
  },
  {
    name: "Paypal",
    image: "paypal.png",
  },
  {
    name: "Shopee",
    image: "shopee.png",
  },
  {
    name: "Tiktok",
    image: "tiktok.png",
  },
  {
    name: "Walmart",
    image: "walmart.png",
  },
  {
    name: "Asana",
    image: "asana.png",
  },
];

const divLogoAllCompany = document.querySelector(".div-logo-all-company");
const returnAllLogo = allImageLogo.map((logo) => {
  return `<img src="img/${logo.image}" alt="${logo.name}"/>`;
});
divLogoAllCompany.innerHTML = returnAllLogo.join("");

document.addEventListener("DOMContentLoaded", function () {
  const previousButton = document.querySelector(".previous-button");
  const nextButton = document.querySelector(".next-button");
  const allSlidesContent = document.querySelector(".all-slides-content");

  let currentIndex = 0;

  const updateSlides = function () {
    allSlidesContent.style.transform = `translateX(-${currentIndex * 33.33}%)`;
  };
  const updateSlidesTwo = function () {
    allSlidesContent.style.transform = `translateX(-${currentIndex * 50}%)`;
  };
  const updateSlidesThree = function () {
    allSlidesContent.style.transform = `translateX(-${currentIndex * 100}%)`;
  };
  const updateSlidesFour = function () {
    allSlidesContent.style.transform = `translateX(-${currentIndex * 20.5}%)`;
  };
  const allUpdateSlides = function () {
    if (window.innerWidth > 1397 && window.innerWidth < 2630) {
      updateSlides();
    } else if (window.innerWidth <= 1397 && window.innerWidth >= 1200) {
      updateSlidesTwo();
    } else if (window.innerWidth < 1200) {
      updateSlidesThree();
    } else if (window.innerWidth > 2629) {
      updateSlidesFour();
    }
  };

  const currentIndexAddition = function () {
    if (window.innerWidth > 2629) {
      if (currentIndex == 5) {
        currentIndex = 5;
      } else {
        currentIndex++;
      }
    } else {
      if (currentIndex == 7) {
        currentIndex = 7;
      } else {
        currentIndex++;
      }
    }

    allUpdateSlides();
  };
  const currentIndexSubtraction = function () {
    if (currentIndex == 0) {
      currentIndex = 0;
    } else {
      currentIndex--;
    }

    allUpdateSlides();
  };

  previousButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndexSubtraction();
    }
  });

  nextButton.addEventListener("click", function () {
    if (window.innerWidth > 2629) {
      if (currentIndex < 5) {
        currentIndexAddition();
      }
    } else {
      if (currentIndex < 7) {
        currentIndexAddition();
      }
    }
  });

  const animationSlider = function () {
    const interval = setInterval(() => {
      if (window.innerWidth > 2629) {
        if (currentIndex < 5 && currentIndex !== 0) {
          currentIndexAddition();
        } else if (currentIndex === 5) {
          clearInterval(interval);
          const animationSliderTwo = setInterval(() => {
            currentIndexSubtraction();
            if (currentIndex === 0) {
              clearInterval(animationSliderTwo);
              animationSlider();
            }
          }, 5000);
        } else if (currentIndex === 0) {
          clearInterval(interval);
          const animationSliderTwo = setInterval(() => {
            currentIndexAddition();
            if (currentIndex === 5) {
              clearInterval(animationSliderTwo);
              animationSlider();
            }
          }, 5000);
        } else {
          return;
        }
      } else {
        if (currentIndex < 7 && currentIndex !== 0) {
          currentIndexAddition();
        } else if (currentIndex === 7) {
          clearInterval(interval);
          const animationSliderTwo = setInterval(() => {
            currentIndexSubtraction();
            if (currentIndex === 0) {
              clearInterval(animationSliderTwo);
              animationSlider();
            }
          }, 5000);
        } else if (currentIndex === 0) {
          clearInterval(interval);
          const animationSliderTwo = setInterval(() => {
            currentIndexAddition();
            if (currentIndex === 7) {
              clearInterval(animationSliderTwo);
              animationSlider();
            }
          }, 5000);
        } else {
          return;
        }
      }
    }, 2000);
  };

  animationSlider();

  window.addEventListener("resize", function () {
    allUpdateSlides();
  });
});

const divContactUs = document.querySelector(".div-contact-us");
const boxContactUs = document.querySelectorAll(".box-contact-us");

const removeAllClass = function () {
  boxContactUs.forEach((box) => {
    box.classList.remove("height-different");
    box.childNodes[3].firstElementChild.classList.remove(
      "height-different-two"
    );
    box.childNodes[3].childNodes[5].classList.remove(
      "padding-button-hover-one",
      "padding-button-hover-two",
      "padding-button-hover-three"
    );
  });
};

boxContactUs.forEach((box) => {
  box.addEventListener("mouseover", function () {
    removeAllClass();

    this.classList.add("height-different");
    this.childNodes[3].firstElementChild.classList.add("height-different-two");

    const button = this.childNodes[3].childNodes[5];
    const buttonText = this.childNodes[3].firstElementChild.innerHTML;

    if (buttonText === "Press") {
      button.classList.add("padding-button-hover-one");
    } else if (buttonText === "Help and Support") {
      button.classList.add("padding-button-hover-two");
    } else if (buttonText === "Sales") {
      button.classList.add("padding-button-hover-three");
    }
  });
});

const toggleButton = document.querySelector(".toggle-button");
const overNavbar = document.querySelector(".over-navbar");
const divLogo = document.querySelector(".div-logo");

toggleButton.addEventListener("click", function () {
  toggleShouldnt();

  if (this.classList.contains("shouldnt")) {
    removeNone();

    document.body.classList.add("overflow-y-hidden");
    overNavbar.classList.add("overflow-y-scroll");
  } else {
    addNone();

    document.body.classList.remove("overflow-y-hidden");
    overNavbar.classList.remove("overflow-y-scroll");
  }
  this.firstElementChild.classList.toggle("rotate-line-1");
  this.childNodes[3].classList.toggle("none-line-2");
  this.lastElementChild.classList.toggle("rotate-line-3");
});

overNavbar.addEventListener("scroll", function () {
  divLogo.style.transform = `translateY(-${this.scrollTop}px)`;
  toggleButton.style.transform = `translateY(-${this.scrollTop}px)`;
});

window.addEventListener("resize", function () {
  if (this.innerWidth > 1199) {
    toggleButton.classList.add("none");
    addNone();

    document.body.classList.remove("overflow-y-hidden");
    overNavbar.classList.remove("overflow-y-scroll");
  } else if (this.innerWidth < 1200) {
    toggleButton.classList.remove("none");
    if (toggleButton.classList.contains("shouldnt")) {
      removeNone();

      document.body.classList.add("overflow-y-hidden");
      overNavbar.classList.add("overflow-y-scroll");
    }
  }
});

if (window.innerWidth < 1200) {
  toggleButton.classList.remove("none");
}
function addNone() {
  overNavbar.classList.add("none");
}
function removeNone() {
  overNavbar.classList.remove("none");
}
function toggleShouldnt() {
  toggleButton.classList.toggle("shouldnt");
}
