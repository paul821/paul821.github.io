jQuery(function($){
    $('.collapsible').click(function(){
        $(this).next().stop(true, true).slideToggle();
        if ($(this).css('opacity')==='1')
  {
    $(this).css({
      'opacity': '0.5',
    });
  }
  else //We know the opacity is not 0 lets make it 0.
  {
    $(this).css({
      'opacity': '1'
    });
  }
    }).next().hide()
    
})
