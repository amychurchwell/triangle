$(document).ready(function() {
  $("#data").submit(function(event) {
    var animal = $("input:radio[name=animal]:checked").val();
    var dob = $("#date").val();
    var name1 = $("#name").val();
    $(".name").text(name1);
    if(animal === 'cat'){
      $('#area-goat').show();
      $('#area-dog').hide();

    }
    if(dob >= 1990){
      $('#area-pig').show();
      $('#area-goat').hide();
      $('#area-dog').hide();
    }
    else{
      $('#area-dog').show();

    }
    event.preventDefault();
  });
});
