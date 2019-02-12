$(".pskills").on("click","li", function(event){ 
	$(this).toggleClass("completed");
});

$("input").on('keypress', function(e){

	if(e.which== 13){
		var valor= $(this).val();
		console.log(valor);
		var num= Math.round(Math.random() * (100 - 1) + 1);
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		$("ul.pskills").append(' <li> <span class="delete"> <i class="fas fa-trash"></i> </span> <p>'+valor+'</p><div class="progress"><div class="progress-bar" role="progressbar" style="width:'+num+'%; background-color: #'+randomColor+';" aria-valuenow="'+num+'" aria-valuemin="0" aria-valuemax="100">'+num+'%</div></div> </li>');
		$(this).val('');
	}
});

$(".pskills").on("click", "span", function(event){
    $(this).parent().remove();
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
    target: '#sideNav'
});


