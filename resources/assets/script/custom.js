$('[data-toggle="datepicker"]').datepicker({
  format: "dd/mm/yyyy"
});

$("input:radio").click(function() {
  $("input:radio")
    .parent()
    .removeClass("checked");
  $(this)
    .parent(this)
    .addClass("checked");
});

function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";
}
