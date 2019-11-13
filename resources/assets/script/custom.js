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
