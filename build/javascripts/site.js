console.log('this is working')


$(".icon").click(toggleIconDesc);
// we call the below function

function toggleIconDesc() {
  // here we are using $(this) to determine which icon we clicked on...
  let id = $(this).attr("id");

  let descName = `#${id}section`;
  $(".desc").hide();
  $(descName).slideToggle();
}

$(".closesection").click(function() {
  $(".desc").fadeOut("slow", function(c) {});
});
