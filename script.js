$(document).ready(function () {
  $("#imageDesign").click(function () {
    $("#imageDesign").slideDown('').hide('');
    $("#design").show('');
  });
  $("#design").click(function () {
    $("#design").slideUp('');
    $("#design").slideDown('');
  });
});

$(document).ready(function () {
  $("#imageDev").click(function () {
    $("#imageDev").slideDown("").hide("");
    $("#development").show("");
  });
  $("#development").click(function () {
    $("#development").slideUp("");
    $("#development").slideDown("");
  });
});

$(document).ready(function () {
  $("#imageProducts").click(function () {
    $("#imageProducts").slideDown("").hide("");
    $("#products").show("");
  });
  $("#products").click(function () {
    $("#products").slideUp("");
    $("#products").slideDown("");
  });
});

