$.fn.hideEverythingBut = function() {
  this.on('click', function(event){
    handleClickEvent(this);
    event.preventDefault();
  });

  function handleClickEvent(button) {
    hideEverythingBut($(button).data('to-hide-selector'));
    showEverythingBut($(button).data('to-show-selector'));
  }

  function hideEverythingBut(selector) {
    $elements_to_hide = $(selector);
    $elements_to_hide.each(function(index, element){
      if(!$(element).hasClass('hidden')) {
        $(element).addClass('hidden');
      }
    });
  }

  function showEverythingBut(selector) {
    $elements_to_show = $(selector);
    $elements_to_show.removeClass('hidden');
  }
};
