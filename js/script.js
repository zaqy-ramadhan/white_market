// Fungsi untuk menambahkan kelas "scrolled" pada navbar saat di-scroll
function updateNavbarBackground() {
    if (window.scrollY > 50) {
        document.querySelector('#navbar').classList.add('scrolled');
    } else {
        document.querySelector('#navbar').classList.remove('scrolled');
    }
}

// Panggil fungsi saat halaman dimuat dan di-scroll
window.addEventListener('load', updateNavbarBackground);
window.addEventListener('scroll', updateNavbarBackground);

document.addEventListener('DOMContentLoaded', function() {
  new Splide('#car1', {
  perPage: 1,
  height: 'auto',
  pagination: false,
  arrows: false,
  rewind: true,
  autoplay: true,
  interval: 3000,
  breakpoints: {
    768: {
      height: 'auto',
    }
  },
  }).mount();
});

document.addEventListener('DOMContentLoaded', function() {
  new Splide('#car2', {
  type: 'slide',
  perPage: 4,
  perMove: 1,
  arrows: false,
  pagination: false,
  breakpoints: {
    768: {
      perPage: 1,
      perMove: 1
    }
  },
  rewind: true,
  autoplay: true,
  height: '25rem',
  }).mount();
}); 

//animasi slide up
let elements = document.querySelectorAll('.slide-up');

function isInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkElements() {
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkElements);



// animasi fade
let fade = document.querySelectorAll('.fade-in');

function isInViewportFade(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkElementsFade() {
  fade.forEach(function(element) {
    if (isInViewportFade(element)) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkElementsFade);

//jalan pertama dibuka belum scroll
window.addEventListener('load', function() {
  let elements = document.querySelectorAll('.slide-up, .fade-in');
  elements.forEach(function(element) {
    element.classList.add('visible');
  });
});

function showProduct() {
  // Hide other section and show contact section
  document.getElementById("landing").style.display = "none";
  document.getElementById("product").style.display = "block";
  document.getElementById("shop").style.display = "none";
  document.getElementById("checkout").style.display = "none";
  document.getElementById("cart").style.display = "none";
  document.getElementById("blogs").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("history").style.display = "none";
}

function showLanding() {
  // Hide other section and show contact section
  document.getElementById("landing").style.display = "block";
  document.getElementById("product").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById("checkout").style.display = "none";
  document.getElementById("cart").style.display = "none";
  document.getElementById("blogs").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("history").style.display = "none";
}

function showShop() {
  // Hide other section and show contact section
  document.getElementById("landing").style.display = "none";
  document.getElementById("product").style.display = "none";
  document.getElementById("shop").style.display = "block";
  document.getElementById("checkout").style.display = "none";
  document.getElementById("cart").style.display = "none";
  document.getElementById("blogs").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("history").style.display = "none";
}

function showContact() {
  // Hide other section and show contact section
  document.getElementById("home").style.display = "none";
  document.getElementById("contact").style.display = "block";
  document.getElementById("product").style.display = "none";
  document.getElementById("checkout").style.display = "none";
  document.getElementById("cart").style.display = "none";
  document.getElementById("blogs").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("history").style.display = "none";
}

function showCheckout() {
  // Hide other section and show contact section
  document.getElementById("landing").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById("product").style.display = "none";
  document.getElementById("checkout").style.display = "block";
  document.getElementById("cart").style.display = "none";
  document.getElementById("blogs").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("history").style.display = "none";
}

function showCart() {
  // Hide other section and show contact section
  document.getElementById("landing").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById("product").style.display = "none";
  document.getElementById("checkout").style.display = "none";
  document.getElementById("cart").style.display = "block";
  document.getElementById("blogs").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("history").style.display = "none";
}

function showBlogs() {
  // Hide other section and show contact section
  document.getElementById("landing").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById("product").style.display = "none";
  document.getElementById("checkout").style.display = "none";
  document.getElementById("cart").style.display = "none";
  document.getElementById("blogs").style.display = "block";
  document.getElementById("blog").style.display = "none";
  document.getElementById("history").style.display = "none";
}

function showBlog() {
  // Hide other section and show contact section
  document.getElementById("landing").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById("product").style.display = "none";
  document.getElementById("checkout").style.display = "none";
  document.getElementById("cart").style.display = "none";
  document.getElementById("blogs").style.display = "none";
  document.getElementById("blog").style.display = "block";
  document.getElementById("history").style.display = "none";
}

function showHistory() {
  // Hide other section and show contact section
  document.getElementById("landing").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById("product").style.display = "none";
  document.getElementById("checkout").style.display = "none";
  document.getElementById("cart").style.display = "none";
  document.getElementById("blogs").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("history").style.display = "block";
}

function changeImage(element) {
  var main_prodcut_image = document.getElementById("main_product_image");
  main_prodcut_image.src = element.src;
}

