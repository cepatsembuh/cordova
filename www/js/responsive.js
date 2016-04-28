$(document).ready(function() {
  var width = $(window).width(),
      costumizedWidth = width - 25,
      faskesImage = $('.faskes'),
      ads = $('.ads'),
      button = $('.button');
      
  faskesImage.css('width', costumizedWidth - 5)
  ads.css('width', costumizedWidth)
  button.css('width', 100%)
});
