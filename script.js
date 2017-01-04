$(document).ready( function(){
  $('h1').html('sOmEtHiNg ChEeKy');

  var $ourOl = $('<ol>');

  var listItemTexts = [`Change the <h1> to something cheeky`,
  'Inside the container for "Upcoming Traversals", create and insert an ordered list which corresponds to this one.',
      'Make all sad classes into happy ones.',
  "Make the annoying popup link point instead to http://www.cashcats.biz.",
  "Change the positioning of the annoying popup so it is on the right side of the screen (it's okay to use direct CSS here). Make it 30 pixels lower than its current position by utilizing its current top value.",
  "Replace the ellipsis ... in one of the suggested topics with content of your choice -- but do so by traversing from a different element.",
  'Replace the form input with a <textarea> instead of a <input type="text">.'];

  $.each(listItemTexts, function(index, el) {
    $('<li/>')
     .text(el)
     .appendTo($ourOl);
  });

  $('.info-box').append($ourOl);

  $('.sad').removeClass('sad').addClass('happy');

  $('#annoying-popup a').attr('href', 'http://cashcats.biz');

  $('#annoying-popup')
    .css('right', '0px')
    .css('top',  '+=30px');

  $('.suggested-topics ul')
   .children()
   .filter( function() { return $(this).text() === '...';} )
   .text("Admirable Cogent Collisions");

  $('input[type ="text"]').remove();

  $('<textarea>')
   .attr('placeholder', 'Tell me a story!')
   .insertBefore( $('input[type="submit"]'));
})
