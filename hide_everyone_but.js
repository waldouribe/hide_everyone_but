$.fn.hideEveryoneBut = function() {
  this.on('click', function(event){
    handleClickEvent(this);
    event.preventDefault();
  });

  function handleClickEvent(button) {
    hideEveryoneWithSelector($(button).data('hidden-selector'));
    showEveryoneWithSelector($(button).data('visible-selector'));
  }

  function hideEveryoneWithSelector(selector) {
    $elements_to_hide = $(selector);
    $elements_to_hide.each(function(index, element){
      if(!$(element).hasClass('hidden')) {
        $(element).addClass('hidden');
      }
    });
  }

  function showEveryoneWithSelector(selector) {
    $elements_to_show = $(selector);
    $elements_to_show.removeClass('hidden');
  }
};
