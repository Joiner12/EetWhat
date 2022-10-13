$i = 0;
$("#start").click(function () {
  $i++;
  if ($i >= 6) {
    if (true) {
      $("#start").hide();
      $("#stop").show();
    } else {
      alert(i);
    }
  }
});
$("#stop").click(function () {
  alert("这么作？今天别吃了！");
  $(this).hide();
});
