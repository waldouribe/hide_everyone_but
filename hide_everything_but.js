$.fn.hideEverythingBut = function() {
  this.on('click', function(event){
    handleClickEvent(this);
    event.preventDefault();
  });

  function handleClickEvent(button) {
    hideEverythingWithSelector($(button).data('to-hide-selector'));
    showEverythingWithSelector($(button).data('to-show-selector'));
  }

  function hideEverythingWithSelector(selector) {
    $elements_to_hide = $(selector);
    $elements_to_hide.each(function(index, element){
      if(!$(element).hasClass('hidden')) {
        $(element).addClass('hidden');
      }
    });
  }

  function showEverythingWithSelector(selector) {
    $elements_to_show = $(selector);
    $elements_to_show.removeClass('hidden');
  }
};
