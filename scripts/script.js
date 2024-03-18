$(document).ready(function(){
  $('.carousel-inner').slick({
    infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true, 
  autoplaySpeed: 8000,
  })

  $('.items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
      },
      {
        breakpoint: 776,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

    var maxHeight = 0;
    $('.jw_label').each(function(){
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });
    $('.jw_label').height(maxHeight);

    window.addEventListener('load', function() {
      var header = document.querySelector('.header');
      var headerHeight = header.clientHeight;
      document.body.style.paddingTop = headerHeight + 'px';
    });
});

let accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(function(item) {
  item.addEventListener('show.bs.collapse', function() {
    accordionItems.forEach(function(otherItem) {
      
      if (otherItem !== item) {
        let collapse = new bootstrap.Collapse(otherItem.querySelector('.accordion-collapse'), { toggle: false });
        collapse.hide();
      }
    });
  });
});

$(document).ready(function(){
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 110 
      });
    }
  });
});