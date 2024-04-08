
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 1
          },
          780: {
              items: 1
          },
          1000: {
              items: 1
          }
      }
  });
});



var menulist = document.getElementById('menulist');
menulist.style.maxHeight = "0px";

function menutoggle() {
  if (menulist.style.maxHeight == "0px") {
      menulist.style.maxHeight = "100vh";
  } else {
      menulist.style.maxHeight = "0px";
  }
}

$('.owl-carousel1').owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  dots: false,

  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  responsive: {
      0: {
          items: 2
      },
      780: {
          items: 3 // Change from 2 to 3 items for screen width 780px and above
      },
      1000: {
          items: 3
      }
  }
});

$('.owl-carousel1').owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTime: 3000,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  responsive: {
      0: {
          items: 1
      },
      780: {
          items: 4 // Change from 2 to 3 items for screen width 780px and above
      },
      1000: {
          items: 4
      }
  }
});


$('.owl-carousel2').owlCarousel({
  loop: true,
  margin: 40,
  nav: false,
  dots: true,
  responsive: {
      0: {
          items: 1
      },
      780: {
          items: 1
      },
      1000: {
          items: 1
      }
  },
  // Custom pagination
 
});

$(document).ready(function() {
  // Function to scroll to a specific section
  function scrollToSection(sectionSelector) {
      $('html, body').animate({
          scrollTop: $(sectionSelector).offset().top
      }, 1000);
  }

  // Click event for menu links
  $('#menuList a').on('click', function(event) {
      event.preventDefault();
      var targetSelector = $(this).attr('href');
      scrollToSection(targetSelector);
  });

  // Click event for "BOOK NOW" buttons
  $('.button').on('click', function() {
      // Display a confirmation message to the user
      alert('Thank you for choosing Kampala Serena Hotel! Your booking was successful.');
  });

  // Owl Carousel initialization
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 1
          },
          780: {
              items: 1
          },
          1000: {
              items: 1
          }
      }
  });

  // Toggle menu
  $('#menuToggle').on('click', function() {
      var menuList = $('#menuList');
      var maxHeight = menuList.css('maxHeight');
      menuList.css('maxHeight', maxHeight === '0px' ? '100vh' : '0px');
  });

  // Event listener for "Book Now" button in navigation bar
  $('.navlinks .primary-btn').on('click', function() {
      console.log('Order placed!');
  });

  // Event listener for all "Book Now" buttons
  $('.button').on('click', function() {
      alert('Thank you for choosing Kampala Serena Hotel! Your booking was successful.');
  });

  // Owl Carousel initialization
  $('.owl-carousel1').owlCarousel({
      loop: true,
      margin: 40,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTime: 3000,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 1
          },
          780: {
              items: 4 // Change from 2 to 3 items for screen width 780px and above
          },
          1000: {
              items: 4
          }
      }
  });

  // Owl Carousel initialization
  $('.owl-carousel2').owlCarousel({
      loop: true,
      margin: 40,
      nav: false,
      dots: true,
      responsive: {
          0: {
              items: 1
          },
          780: {
              items: 1
          },
          1000: {
              items: 1
          }
      },
      // Custom pagination
  });
});

const emailInput=document.getElementById('email');

function validateEmail(email){
  const va = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return va.test(email);
}

function subscribe(){
  const email = emailInput.value;

  if (validateEmail(email)){
      alert('you have subscribed to our newsletter!');
  }
  else{
      alert('Please enter a valid email address. ')
  }
}

document.getElementById('Subscribe-btn').addEventListener('click', subscribe);