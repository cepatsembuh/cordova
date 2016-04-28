$(document).ready(function() {
  var width = $(window).width(),
      costumizedWidth = width - 25,
      faskesImage = $('.faskes'),
      ads = $('.ads');
      
  faskesImage.css('width', costumizedWidth - 5)
  ads.css('width', costumizedWidth)
});
