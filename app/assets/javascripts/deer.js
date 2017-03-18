// fullpage
function fullpage(){
	$('#fullpage').fullpage({
		anchors: ['Patty Hsu', 'Web', 'Graphic', 'Contact'],
		sectionsColor: ['#ffcc33', '#ffcc33', '#ffcc33', '#ffcc33'],
		menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
		// navigationTooltips: ['Patty Hsu', 'Web Design', 'Graphic Design', 'Contact Me'],
		responsiveWidth: 900,

		afterLoad: function(index, nextIndex, direction){
            var leavingSection = $(this);
               	if(nextIndex == 4){
               $(".contact li img").delay(500).velocity("transition.bounceIn", {stagger: 400});
               }
        }
	});
}

// menu
function menu(){
  $("#demosMenu").change(function(){
    window.location.href = $(this).find("option:selected").attr("id") + '.html';
  });

  $("#toggle").click(function() {
    $(this).toggleClass("on");
    $("nav").slideToggle();
  });

  $("nav li").click(function() {
    $("#toggle").toggleClass("on");
    $("nav").slideToggle();
  });
}


// gotop
$(".gotop").click(function() {
    $(".modal").animate({scrollTop:0},1000);
});

$(".modal").scroll(function() {
  if ( $(this).scrollTop() > 500){
    $(".gotop").fadeIn("fast");
  } else {
    $(".gotop").stop().fadeOut("fast");
  }
});

$(window).load(function(){
  fullpage();
  menu()
  $('.loading').delay(800).fadeOut('slow');
});