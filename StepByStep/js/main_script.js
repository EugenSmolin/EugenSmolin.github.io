// ================= ПЛАВНАЯ АНИМАЦИЯ ================= //
$(function(){
	$(document).ready(function() {
		$(".justscroll").click(function() {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top
			}, {
				duration: 1000,
				});
			return false;
		});
	});
});

// ========================================================== //

// ================ ОТКИДНАЯ ЧАСТЬ В ПОРТФОЛИО ============== //
function openbox(id){
    display = document.getElementById(id).style.display;
    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
};

// ========================================================== //

// ==================== КНОПКА ВВЕРХ ======================== //

$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		});
		$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});

// =========================================================== //