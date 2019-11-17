$('[data-toggle="datepicker"]').datepicker({
  format: "dd/mm/yyyy"
});

$(".radio").click(function() {
  $(".radio").removeClass("checked");
  $(this).addClass("checked");
});

function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";
}

$("input:radio").checkradios({
  radio: {
    iconClass: "icon"
  }
});

$("#demo").datetimepicker({
  date: new Date()
});

// mobile menu slide from the left
$('[data-toggle="slide-collapse"]').on("click", function() {
  $navMenuCont = $($(this).data("target"));
  $navMenuCont.animate({ width: "toggle" }, 350);
});

$(".navbar-toggler").click(function() {
  $(this).toggleClass("is-active");
  $("body").toggleClass("is-active");
});

// $(".notification-bell").click(function() {
//   $(".notification").removeClass("show");
// });

$h = $(".main-header").outerHeight();
$f = $(".main-footer").outerHeight();
var total = $h + $f;
$(".caunselor-after-match > .d-grid").css(
  "grid-template-rows",
  "calc(100vh - " + total + "px)"
);

$(".caunselor-after-match .avator").click(function() {
  $(this)
    .parents(".caunselor-after-match")
    .toggleClass("show");
});

$(".back").click(function() {
  $(this)
    .parents(".caunselor-after-match")
    .removeClass("show");
});
