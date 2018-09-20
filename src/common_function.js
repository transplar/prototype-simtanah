function close_modal()
{
	$.modal.close(); 	
}

function slider_content(num)
{
	var active = $('.slider .kiri div.active');
	if(active.next().length == 1 )
	{
		var next = active.next();
		num = num + 1;
	}
	else
	{
		var next = $('.slider .kiri div:first');
		num = 0;
	}
    active.addClass('last_active');
	next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            active.removeClass('active last_active');
			$('.slider .kanan li').removeClass('current');
			$('.slider .kanan li:eq('+num+')').addClass('current');
			// ulangi setiap 3 detik
			setTimeout(function() {
			slider_content(num);
			}, 3000 );
    });
}

function setCursorPosition(obj,pos) 
{
  	$(obj).each(function(index, elem) {
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  });
  return this;
};


function show_modal(id,width,height) {
$("#"+id).modal({onOpen: function (dialog) {
	dialog.overlay.fadeIn('fast', function () {
		dialog.container.slideDown('fast', function () {
			dialog.data.fadeIn('fast');
			$("#simplemodal-container .content").css("min-height",(height-66)+'px');
		});
	});
	},
	minHeight:height,
	minWidth:width
	});
}

function hide_header(obj)
{
	var cur_class = $(obj).attr("class");
	if(cur_class=="arrow_top")
	{
		$("#header").slideUp("slow", function() {
			$("#header_small").slideDown();
			$("#top_menu").animate({paddingLeft: "0px"});	
		});
		$(obj).removeClass("arrow_top").addClass("arrow_bottom");
	}
	else
	{
		$("#header_small").slideToggle("slow", function() {
			$("#header").slideToggle();
			$("#top_menu").animate({paddingLeft: "100px"});	
		});
		$(obj).removeClass("arrow_bottom").addClass("arrow_top");
	}
}

function num_only(obj)
{
   var current_val =  $(obj).val();
   $(obj).val(current_val.replace(/[^\d]/g,""));
}

function hanyaangka(obj)
{
   var current_val =  $(obj).val();
   $(obj).val(current_val.replace(/[^\d]/g,""));
}

function format_angka(obj)
{
  var nStr = $(obj).val();
  var hasil = decimal(nStr);
  $(obj).val(nStr);
 
}

function decimal(nStr)
{
  nStr = nStr.replace(/[^\d]/g,"");
  nStr += '';
  x = nStr.split(',');
  x1 = x[0];
  x2 = x.length > 1 ? ',' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) 
  {
    x1 = x1.replace(rgx, '$1' + '.' + '$2');
  }
  return x1 + x2;
}

function page_only(obj)
{
   var current_val =  $(obj).val();
   $(obj).val(current_val.replace(/[^0-9^\-\,]/g,""));
}

function date_only(obj)
{
   var current_val = $(obj).val();
   $(obj).val(current_val.replace(/[^0-9^\-]/g,""));
}

/* Date Pick */
function pick_it(selector)
{
	$(selector).datepick({dateFormat: 'yyyy-mm-dd'});
}

function monthNamesShort()
{
	 var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	 return months;
}

function dayNamesMin()
{
    var days = ["Mg", "Sn", "Sl", "Rb", "Km", "Jm", "Sb"];
	return days;
}

function change_url(page_url)
{
	if(page_url!=window.location){
		window.history.pushState({path:page_url},'',page_url);
	}
	return false;
}

function input_cari_blur(obj,str)
{
	if($(obj).val()==str || $(obj).val()=="")
	{
		$(obj).val(str);	
	}
}

function input_cari_focus(obj,str)
{
	if($(obj).val()==str)
	{
		$(obj).val("");	
	}
}

function div_scrool(id,indung,add) 
{
	var scrollTop = $('#' + id).offset().top + $('#' + indung).scrollTop() + add;
    $('#' + indung).animate({
      scrollTop: scrollTop
    }, 500);
    return false;
}

function title_case(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function disableEnterKey(e)
{
     var key;     
     if(window.event)
          key = window.event.keyCode; //IE
     else
          key = e.which; //firefox     

     return (key != 13);
}