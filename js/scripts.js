$(document).ready(function() {
  $("#triangle-form").submit(function(event) {
    var one = parseInt($("input#side-one").val());
    var two = parseInt($("input#side-two").val());
    var three = parseInt($("input#side-three").val());

    if ((one === two) && (two === three) && (one === three)) {
      $('#equal').show();
      $('#iso').hide();
      $('#scal').hide();
      $('#no').hide();
    } else if ((one === two) || (two === three)){
        $('#iso').show();
        $('#equal').hide();
        $('#scal').hide();
        $('#no').hide();
    } else if ((one + three) <= two || (two + three) <= one){
      $('#no').show();
      $('#scal').hide();
      $('#equal').hide();
      $('#iso').hide();
    } else if ((one != two) && (two != three)){
        $('#scal').show();
        $('#iso').hide();
        $('#equal').hide();
        $('#no').hide();
      }

    event.preventDefault();
  });
});
