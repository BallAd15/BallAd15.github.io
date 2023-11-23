function openOverlay() {
    document.getElementsByClassName("overlay")[0].style.height = "100vh";
  }
  
function closeOverlay() {
    document.getElementsByClassName("overlay")[0].style.height = "7em";
    document.getElementsByClassName("overlay")[0].style.background = "rgb(18, 23, 42)";
    document.getElementsByClassName("overlay-about")[0].style.display = "none";
    document.getElementsByClassName("overlay-arrow")[0].style.display = "none";
    document.getElementsByClassName("navbar")[0].style.display = "flex";
}

function menubarShow(){
    const hiddenDiv = document.getElementById("nvbm");
    const menuIcon = document.getElementsByClassName("menubar-icon")[0];
    if ( hiddenDiv.classList.contains('navbar-menu')) {
        hiddenDiv.classList.remove('navbar-menu');
        hiddenDiv.classList.add('visible');
        document.getElementsByClassName("overlay")[0].style.height = "21em";
        document.getElementsByClassName("site-title")[0].style.borderBottom = "1px solid rgb(99, 95, 95)";
        menuIcon.textContent="expand_less"
    } else {
        hiddenDiv.classList.remove('visible');
        hiddenDiv.classList.add('navbar-menu');
        document.getElementsByClassName("overlay")[0].style.height = "7em";
        document.getElementsByClassName("site-title")[0].style.borderBottom = "none";
        menuIcon.textContent="menu"
    }
}

//Smooth scrolling when redirecting
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.classList.contains('smooth-scroll')) {
        e.preventDefault();
        var targetId = e.target.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

//Football bouncing effect
function bounceFootball() {
    var football = document.querySelector('.fun-animation-image');
    football.style.animation = 'none';  // Remove the current animation
    setTimeout(function() {
        football.style.animation = 'bounce 1.5s ease 1';  // Add the bounce animation again
    }, 10);
}

document.addEventListener("DOMContentLoaded", function () {
    const formGroups = document.querySelectorAll(".form-group");
  
    formGroups.forEach((formGroup) => {
      const input = formGroup.querySelector(".form-control");
  
      input.addEventListener("focus", () => {
        formGroup.classList.add("has-focus");
      });
  
      input.addEventListener("blur", () => {
        formGroup.classList.remove("has-focus");
      });
    });
});
  

window.onload = function() {
    /*closeOverlay();*/
    openOverlay();
}

// PROJECTS SCROLLBAR
const initSlider = () => {
    const cardList = document.querySelector(".slider-wrapper .card-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".slider-scrollbar");
    const scrollbarThumb = document.querySelector(".scrollbar-thumb");
    const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;

    //Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        //Slide the thumb according to the mouse
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            cardList.scrollLeft = scrollPosition;
        }

        //Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp)
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    //Slide images according to slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = cardList.clientWidth * direction;
            cardList.scrollBy({left: scrollAmount, behavior:"smooth"})
        });
    });

    //Hide buttons if end of scroll
    const handleSlideButtons = () => {
        slideButtons[0].style.display = cardList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = cardList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    //Update scrollbar thumb position according to the slide
    const updateScrollThumbPosition = () => {
        const scrollPosition = cardList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    cardList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });
    
}

window.addEventListener("load", initSlider);


/* OVERLAY */

// ScrollReveal JS

ScrollReveal({ distance: "50px" });

ScrollReveal().reveal(".title", {
  delay: 200,
  easing: "ease-in",
  origin: "top",
  distance: "70px",
  duration: 900,
});

ScrollReveal().reveal(".description", {
  delay: 1000,
  easing: "ease-in",
  origin: "top",
  distance: "30px",
  duration: 1000,
});

ScrollReveal().reveal(".btn", {
  delay: 2000,
  easing: "ease-in-out",
  duration: 1000,
});

ScrollReveal().reveal(".card-container", {
  delay: 400,
  easing: "ease-in-out",
  origin: "right",
  distance: "800px",
  duration: 2500,
});

ScrollReveal().reveal(".gradient-line", {
  delay: 200,
  easing: "ease",
  origin: "left",
  distance: "1800px",
  duration: 3600,
});

ScrollReveal().reveal(".featured-title", {
  delay: 400,
  easing: "ease-in",
  origin: "right",
  distance: "200px",
  duration: 1400,
});

ScrollReveal().reveal(".item", {
  delay: 1200,
  interval: 200,
  origin: "bottom",
  easing: "ease-in-out",
  duration: 400,
});

// Lightbox

document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".item img");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".img-container img");
  const lightboxTitle = document.querySelector(".img-header p");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const body = document.querySelector(".body-overlay");

  let currentIndex;

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", function () {
      currentIndex = index;
      updateLightbox();
      lightbox.style.display = "flex";
      body.classList.add("prevent-background-scroll");
    });
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      body.classList.remove("prevent-background-scroll");
    }
  });

  prevBtn.addEventListener("click", function () {
    currentIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateLightbox();
  });

  function updateLightbox() {
    const currentImage = galleryImages[currentIndex];
    lightboxImage.src = currentImage.src;
    lightboxTitle.textContent = currentImage.alt;
  }
});
