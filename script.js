// Business Logic

var nameInput = $("input#name").val();
var emailInput = $("input#email".val();
var commentTextarea = $("textarea#commentBox").val();

// User Interface Logic

$(document).ready(function () {
  $(".form-group").submit(function () {
    $("").text(nameInput);
    $("").text(emailInput);
    $("").text(commentTextarea);
    alert("Thank you for your feedback.")
  });
});