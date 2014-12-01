$(document).ready(function{
  
  $("p").click(function() {
    $(this).toggle();
  });

  $('.class').change({
  	$(this).fadeToggle('slow');
  });

});
