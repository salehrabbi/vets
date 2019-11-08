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
