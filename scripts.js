$(function () {
  var arr = [];

  setInterval(() => {
    $(".userList").empty();

    arr.forEach((e) => {
      $(".userList").append(
        "<p><b>" + e + " </b><i>sent by TheSkateVeteran</i></p>"
      );
    });
  }, 1000);

  $("#submit").click(function () {
    arr.push($("#textBox").val());
    $("#textBox").val("");
  });
  //alert("It works");
});
