function auto_grow(t){t.style.height="5px",t.style.height=t.scrollHeight+"px"}$('[data-toggle="datepicker"]').datepicker({format:"dd/mm/yyyy"}),$(".radio").click(function(){$(".radio").removeClass("checked"),$(this).addClass("checked")}),$("input:radio").checkradios({radio:{iconClass:"icon"}}),$("#demo").datetimepicker({date:new Date}),$('[data-toggle="slide-collapse"]').on("click",function(){$navMenuCont=$($(this).data("target")),$navMenuCont.animate({width:"toggle"},350)}),$(".navbar-toggler").click(function(){$(this).toggleClass("is-active"),$("body").toggleClass("is-active")});