function addFavorite() {
	if(document.all) {
		try {
			window.external.addFavorite(window.location.href, document.title);
		} catch (e) {
			alert("您的浏览器不支持加入收藏，请使用Ctrl+D进行添加");
		}
	} else if (window.sidebar) {
		window.sidebar.addPanel(document.title, window.location.href, "");
	}else{
		alert("您的浏览器不支持加入收藏，请使用Ctrl+D进行添加");
	}
}

//弹框
var plusBankBg,showForm1,showForm;

function showCon_0(){
	plusBankBg=$('.plusBankBg');
	showForm=$('.plusBank');
	plusBankBg.show();
	showForm.slideDown();
}


function showCon_1(){
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank1');
	plusBankBg.show();
	showForm1.slideDown();
	if($('.inputFocus1').size()>0){
		$('.inputFocus1').focus();
	}
}
function showPop () {
	$('.plusBankBg').show();
	$('.pop1').slideDown();
	$('.box').show();
	$('.box2').hide();
	$('.next_out').show();
	$('.next_out2').hide();
	$('.nextli').addClass('next');
    $('.nextstp2').removeClass('step-3').addClass('step-2');

}
function showCon_2(){
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank2');
	plusBankBg.show();
	showForm1.slideDown();
}
function showCon_3(){  //微信专用弹层
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank3');
	plusBankBg.show();
	showForm1.slideDown();
}
function showCon_4(){ //全局实名认证专用
	plusBankBg=$('.plusBankBg');
	showForm1=$('.real-name');
	plusBankBg.show();
	showForm1.slideDown();
}

function showCon_5(){ //全局实名认证专用
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank5');
	plusBankBg.show();
	showForm1.slideDown();
}

function closeAll_0(){
	plusBankBg=$('.plusBankBg');
	showForm=$('.plusBank');
	plusBankBg.hide();
	showForm.slideUp();
}

function closeAll_1(){
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank1');
	showForm=$('.plusBank');
	plusBankBg.hide();
	showForm1.slideUp();
	showForm.slideUp();
}
function closeAll_2(){
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank2');
	plusBankBg.hide();
	showForm1.slideUp();
}
function closeAll_5(){
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank5');
	plusBankBg.hide();
	showForm1.slideUp();
}
function surebank(){
		$('#mybank').hide();
		$('.bankMegTab').show();
		$('#myotherbank').show();
		$('.new-shortcut-1 ul').empty();
		var newmybank=($('.new-shortcut-allbank li.selectli').html());
		var newbankshow= $('#newmyseceltbankshowa ul').append('<li>'+newmybank+'</li><li class=otherbank><a href=#>选择其他银行</a></li>');
		closeAll_5();
	}
function closeAll_3(){ //微信专用弹层
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank3');
	plusBankBg.hide();
	showForm1.slideUp();
}
function closeAll_4(){ //全局实名认证专用
	plusBankBg=$('.plusBankBg');
	showForm1=$('.real-name');
	plusBankBg.hide();
	showForm1.slideUp();
}

$(function($) {
	// 关闭所有弹框 | zhenhua.xi | 20140922
	$("a.fr").each(function(){
		$(this).click(function(){
			closeAll_0();
			closeAll_1();
			closeAll_2();
			closeAll_3();
		});
	});
});

function onMessage(){
	var box_mes=$('.box_mes');
	var right=box_mes.css('width');
	if(right=='0px'){
		$('#maxlengthMsg').html("您还可输入200字");
		/*box_mes.css('display','block').animate({'width':'230px','padding':'15px','border':'#5ca9dc 1px solid'},500).children().fadeIn();*/
		box_mes.css('display','block').animate({'width':'230px','padding':'15px','border':'#5ca9dc 1px solid'},500).children().fadeIn();
	}else{
		//清空反馈框里的内容
		$('#feedbackText').val("");
		//清空msg
		$('#maxlengthMsg').html("");
		box_mes.animate({'width':'0','padding':'0','border':'0'},500).css('display','none').children().fadeOut();
	}
}




function strTrim(str){ //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

//反馈完成关闭
function Boxhide(){
	var box_mes=$('.box_mes');
	box_mes.animate({'width':'0px','padding':'0','border':'0'},500).children().hide();
	//清空反馈框里的内容
	$('#feedbackText').val("");
	//清空消息
	$('#maxlengthMsg').html("");
}

function change(obj){
	//内容
	var feedbackVal = $('#feedbackText').val();
	var length = 200 - feedbackVal.length;
	$('#maxlengthMsg').html("您还可输入"+length+"字");

}


(function(){
	$(function(){
	//index
	var _dl=$('.header .login dl');
	_dl.hover(function(){
		$(this).children('dt').addClass('hover').children().css('color','#333');
		$(this).children('dd').show();
	},function(){
		$(this).children('dd').hide(10,function(){
			$(this).siblings('dt').removeClass('hover').children().css('color','#fff');
		});
	})

	
	//首页banner下面的三个交互效果
	var oThre=$('.left .mb_10 .li');
	oThre.hover(function(){
		$(this).children('em').css('text-decoration','underline');
	},function(){
		$(this).children('em').css('text-decoration','none');
	})
	var three=$('.left .mb_10 .li i');
	three.hover(function(){
		var _index=$(this).parent().index();
		switch(_index){
			case 0:
				$(this).removeClass('pos1').addClass('pos1a');
			break;
			case 1:
				$(this).removeClass('pos2').addClass('pos2a');
			break;
			case 2:
				$(this).removeClass('pos3').addClass('pos3a');
			break;
			default:;
		}
	})
	
	//nav hover事件
	
	/*var navLi=$('.nav li');
	navLi.hover(function(){
		if($(this).index()==1||$(this).index()==3||$(this).index()==5){
			$(this).addClass('cur_two').children('dl').show();
		}
	},function(){
		if($(this).index()==1||$(this).index()==3||$(this).index()==5){
			$(this).children('dl').hide(10,function(){
				$(this).parent().removeClass('cur_two');
			});
		}
	})*/
	var navLi=$('.nav li');
	navLi.hover(function(){
		if($(this).index()==1){
			$(this).addClass('cur_two').children('dl').show();
		}
	},function(){
		if($(this).index()==1){
			$(this).children('dl').hide(10,function(){
				$(this).parent().removeClass('cur_two');
			});
		}
	})
	
	//得到失去焦点
	$('.module .money,.userName,.input-all').focus(function(){
		$(this).css('background','none').removeClass('gray_border').addClass('blue_border');
	}).blur(function(){
		var Val=$(this).val();
		if(Val==""){
		$(this).removeClass('blue_border').addClass('gray_border').css('background','');
		}else{
			
		$(this).removeClass('blue_border').addClass('gray_border');	
		}
	})
	
	//.input_all,
	/*$('.input-all').focus(function(){
		$(this).css('background','none').removeClass('gray_border').addClass('blue_border');
	}).blur(function(){
		$(this).removeClass('blue_border').addClass('gray_border');
	})*/
	
	$('.userName1').focus(function(){
		$(this).removeClass('gray_border').addClass('blue_border');
	}).blur(function(){
		$(this).removeClass('blue_border').addClass('gray_border');
	})
	
	//倒计时
	try{
		$('.imgLists').jcarousel({
			wrap: 'circular',
			auto: 0,
			scroll:1,
			animation:1500
		});
		
		//
	   function toDouble(num){
			if(num<10){
				return '0'+num;
			}else{
				return ''+num;
			}
		}
	   var oImg=document.getElementById('div1_index').getElementsByTagName('img');
		function GetRTime(){
		   var EndTime= new Date('2014/11/4 23:59:00'); //截止时间3/
		   var NowTime = new Date();
		   var t =EndTime.getTime() - NowTime.getTime();
		   var d=Math.floor(t/1000/60/60/24);
		   var h=Math.floor(t/1000/60/60%24);
		   var m=Math.floor(t/1000/60%60);
		   var s=Math.floor(t/1000%60);
		   var str1=""+toDouble(h)+toDouble(m)+toDouble(s);
		   for(var i=0;i<oImg.length;i++){
				oImg[i].src='images/'+str1.charAt(i)+'.jpg';
		   }
		   
		   
	   }
	   setInterval(GetRTime,1000);
	   GetRTime();
	   
	   //登录轮播
	
	   
	}catch(err){
	}
	
		/*function GetRTimes(date){
		   var EndTime= new Date(date); 
		   var NowTime = new Date();
		   var t =EndTime.getTime() - NowTime.getTime();
		   var d=Math.floor(t/1000/60/60/24);
		   var h=Math.floor(t/1000/60/60%24);
		   var m=Math.floor(t/1000/60%60);
		   var s=Math.floor(t/1000%60);
		   $('.W650 .top span').html('剩余时间 ：'+d+'天'+h+'时'+m+'分'+s+'秒');
		   $('#begin').html('即将开始'+"<span class='white font14 pl20'>("+d+'天'+h+'时'+m+'分'+s+'秒)</span>');
		}
		 
		GetRTimes('2014/10/18 23:00:00');
		setInterval(function(){
			GetRTimes('2014/10/18 23:00:00');
		},1000)*/
		
		
		
	//投标hover事件
	$('.table_index tr:last').find('td').css('border-bottom','none');
	var tabTr=$('.table_index tr:not(:first)');
	tabTr.hover(function(){
		$(this).css('background','#fbfbfb');
	},function(){
		$(this).css('background','none');
	})
	
	//理财中心/////////////////////////////////////////////////
	//金额加减
	try{
		var oPlus=document.getElementById('plus');
		var oJian=document.getElementById('jian');
		var oText=document.getElementsByName('num')[0];
		
		
		oJian.onclick=function(){
			var oFvalue=parseInt(oText.value);
			if(oFvalue>2000){
				if(oFvalue%1000=='0'){
					oFvalue-=1000;
					oText.value=oFvalue;
					this.style.backgroundPosition='-42px -44px';
				}else{
					alert('亲，您输入的数值不是1000的整数倍，请重新输入^_^！')
				}
				
			}else{
				this.style.backgroundPosition='-1px -44px';
			}
		}
		oJian.onmouseover=function(){
			
			this.style.backgroundPosition='-83px -44px';
			
			
		}
		oJian.onmouseout=function(){
			var oFvalue=parseInt(oText.value);
			if(oFvalue<=2000){
				this.style.backgroundPosition='-1px -44px';
			}else{
				this.style.backgroundPosition='-42px -44px';
			}
			
		}
		oPlus.onclick=function(){
			var oFvalue=parseInt(oText.value);
			if(oFvalue<100000){
				if(oFvalue%1000=='0'){
					oFvalue+=1000;
					oText.value=oFvalue;
					oJian.style.backgroundPosition='-42px -44px';
				}else{
					alert('亲，您输入的数值不是1000的整数倍，请重新输入^_^！')
				}
				
			}else{
				this.style.backgroundPosition='-1px -1px';
			}
		}
		oPlus.onmouseover=function(){
			this.style.backgroundPosition='-83px -1px';
		}
		oPlus.onmouseout=function(){
			var oFvalue=parseInt(oText.value);
			if(oFvalue>=100000){
				this.style.backgroundPosition='-1px -1px';
			}else{
				this.style.backgroundPosition='-42px -1px';
			}
			
		}
	}catch(err){
	}
	//selected
		
		$('.tabSelect .topa li').click(function(){
			var oIndex=$(this).index();
			$(this).addClass('cur').siblings().removeClass('cur');
			$('.show-Div .com').eq(oIndex).show().siblings().hide();
		})
		$('.tabSelect .topa li').eq(0).click();
	
		$('.check a img').hover(function(){
			$(this).parent('a').siblings('span').show();
		},function(){
			$(this).parent('a').siblings('span').hide();
		})
		
	
	//在线客服//////////////////////////////////////////////////////////
	//返回顶部
	
	function goTopEx(){
        
        function getScrollTop(){
                return document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
            }
        function setScrollTop(value){
                document.documentElement.scrollTop?document.documentElement.scrollTop=value:document.body.scrollTop=value;
            }    
        window.onscroll=function(){
			getScrollTop()>0?obj.style.display="block":obj.style.display="none";
			var scrollTop=$(document).scrollTop();
			var wHeight=$(window).height();
			if($('.foot1').size()>0){
				var fTop=$('.foot1').offset().top;
			}
			
			
			
		}
		var obj=document.getElementById("tbar");
        obj.onclick=function(){
            var goTop=setInterval(scrollMove,10);
            function scrollMove(){
                    setScrollTop(getScrollTop()/1.1);
                    if(getScrollTop()<1)clearInterval(goTop);
                }
        }
    }
	//--三国用----
	function goTopEx02(){
        
        function getScrollTop(){
                return document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
            }
        function setScrollTop(value){
                document.documentElement.scrollTop?document.documentElement.scrollTop=value:document.body.scrollTop=value;
            }    
        window.onscroll=function(){
			//getScrollTop()>0?obj.style.display="block":obj.style.display="none";
			var scrollTop=$(document).scrollTop();
			var wHeight=$(window).height();
						
		}
		var obj=document.getElementById("tbarout");
		var fanhui=document.getElementById("tbar");
        fanhui.onclick=function(){
            var goTop=setInterval(scrollMove,10);
            function scrollMove(){
                    setScrollTop(getScrollTop()/1.1);
                    if(getScrollTop()<1)clearInterval(goTop);
                }
        }
    }
	//--三国end----
	
	// 获取mid
	var midNum,onOff;
	function getMid(){
	    $.ajax({
	      url: '/custom/mid.do',
	      type: 'get',
	      async: false,
	      dataType: 'json',
	      data: {},
	      success: function(data){
	    	  midNum = data.mid;
	      }
	    })
	}
	function getOnOff(){
	    $.ajax({
	      url: '/custom/switch.do',
	      type: 'get',
	      async: false,
	      dataType: 'json',
	      data: {},
	      success: function(data){
	    	  onOff = data.customSwitch;
	      }
	    })
	}
	
	function toolbar(){
		getMid();
		getOnOff();
		var custUrl="<a id='onlineQQService_blank' onclick='ysf.open();return false;' rel='nofollow'  class='linka onlineqq'></a>";
		if (onOff != null && onOff != ""){
		 if("ON" == onOff){
		   custUrl="<a href='/ikefu/xiaojia.do?mbid="+ midNum +"' rel='nofollow'  class='linka onlineqq' target='_blank'>&nbsp;</a>";
		 }
		}

		var html = "<div class='floatbox01'>"+
		"<a href='http://www.niwodai.com/daikuan' rel='nofollow'  class='linka daikuan' target='_blank'>&nbsp;</a>"+
		"<a href='/userFeedback/opinion.html' rel='nofollow'  class='linka feedback' target='_blank'>&nbsp;</a>"+ custUrl +
		"<a href='javaScript:;' rel='nofollow'  class='linka onlinewx' style='cursor:default'><i>&nbsp;</i></a>"+
		"<a href='javaScript:;' rel='nofollow' class='back-top' rel='nofollow'  id='tbar' style='display:none; z-index:9999'><i></i></a></div>";
			
				
	//	var html1 = "<div class='floatbox01'>"+"<a href='/daikuan/jiekuan.html' rel='nofollow' class='float-top blue' target='_blank'>&nbsp;</a>"+"<a href='/userFeedback/opinion.html' rel='nofollow'  class='linka feedback' target='_blank'>&nbsp;</a>"+"<a href='javascript:;' rel='nofollow'  class='float-top blue' onClick='onMessage()'>&nbsp;</a>"+"<div class='box_mes'><textarea class='textarea' id='feedbackText' maxlength='200' onkeyup='change(this)'></textarea><span id='maxlengthMsg' class='fl'></span><a class='btn btnSize_4 btn_blue fr mt_5' rel='nofollow'  id='feedbackBtn' href='javascript:;' onClick='feedbackSubmit()'>提交</a></div>"+
	//			"<a id='onlineQQService' rel='nofollow'  class='serving blue'>"+
	//			"<i></i>&nbsp</a>"+
	//			"<a href='javascript:;' rel='nofollow' class='back-top' rel='nofollow'  id='tbar' style='display:none; z-index:9999'><i></i></a></div>";
		// var html2 = "<div class='floatbox02'>"+"<a href='/daikuan/jiekuan.html' rel='nofollow'  class='linka daikuan' target='_blank'>&nbsp;</a>"+"<a href='/userFeedback/opinion.html' rel='nofollow'  class='linka feedback' target='_blank'>&nbsp;</a>"+"<a id='onlineQQService' onclick='ysf.open();return false;' rel='nofollow'  class='linka onlineqq'>&nbsp</a>"+
		// "<a href='javaScript:;' rel='nofollow'  class='linka onlinewx' style='cursor:default'><i><em>&nbsp;</em>关注微信公众号“你我贷”。随时随地尊享一对一客服服务，您就是我们的VIP。</i></a>"+
		// "<a href='javaScript:;' rel='nofollow' class='back-top' rel='nofollow'  id='tbar' style='display:none; z-index:9999'><i></i></a></div>";
				
				
				
				
		if($(document.body).hasClass('index_niwo_1000')){
			$('body').append(html1);
		}else{
			$('body').append(html);
		}	
		
	}
	if($(document.body).width() > 1024){
		if($('div.worldClub').size()>0){
			goTopEx02();//--三国活动用到---
			
			
		}else{
			toolbar();
			goTopEx();
		}
		
	}
	$(function(){
		
		if ($(document.body).hasClass('index_niwo')) {
			var newright = $("body").width()/2+605;
			$(".floatbox01").css({"left":newright,"bottom":"40px","position":"fixed"})
		}
		else if($(document.body).hasClass('index_niwodaiNew')){
			var newright = $("body").width()/2+605;
			$(".floatbox01").css({"left":newright,"bottom":"40px","position":"fixed"})
		}
		else{
			var newright = $("body").width()/2+605;
			$(".floatbox01").css({"left":newright,"bottom":"40px","position":"fixed"})
		}
		
	})
	
	//右border消失
	$('.center .class dd:last').css('border-right','none');
	
	//banner
	
	
		//accound center Start
		// Cookie操作方法只被该模板调用 | zhenhua.xi | 20140903
		function setcookie_common(name, value, expires){
			var expDays = expires;
			var expDate = new Date();
			expDate.setTime(expDate.getTime() + expDays);
			var expString = expires ? "; expires=" + expDate.toGMTString() : "";
			var pathString = ";path=/";
			document.cookie = name + "=" +escape(value) + expString + pathString;
		}
		var oNav=$('.user_nav h4');
		var oLis=oNav.nextAll().children();
		var selectLi=$('.select li');
		var oClose=$('.history .top img');
		var oDl=$('.pl24 dl');
		var oDt=$('.pl24 dl dt');
		var oDd=$('.pl24 dl dd');
		var selectplatform=$('.platform .select li')
		var selectshortcut=$('.new-shortcut li')
		var dialogbank=$('.new-shortcut-allbank li')
		var newselectshortcut=$('.new-shortcut-1 li')
		var newselectshortcut2=$('.new-shortcut-2 li')
		var newselectshortcut3=$('.new-shortcut-3 li')
		var tixianbank=$('#tixianbank li')
		
		var oT;
		oNav.click(function(){
			if($(this).next().css('display')=='block'){
				$(this).next().slideUp();
				$(this).find('i').css('background-position','0 -8px');
				//$(this).parent('h4').siblings('h4').children('i').css('background-position','0 0')
				
			}else{
				$(this).siblings('ul').slideUp();
				$(this).next().slideDown();
				$(this).children('i').css('background-position','0 0');
				$(this).siblings('h4').find('i').css('background-position','0 -8px')
			}
		})
		oLis.click(function(){
			$(this).parent('ul').siblings('h4').children('i').css('background-position','0 -8px');
			$(this).parent('ul').siblings('ul').slideUp();
			$(this).parent('ul').prev('h4').children('i').css('background-position','0 0');
			$(this).parent('ul').siblings('ul').find('li').attr('class','');
			$(this).addClass('active').siblings().removeClass('active');
			// uco：用户点击对象
			var uco = $(this).attr("pdata");
			// ucpo：用户点击父对象
			var ucpo =  $(this).parent('ul').attr("pdata");
			setcookie_common("uco",uco,1000*60*30);
			setcookie_common("ucpo",ucpo,1000*60*30);
		})
		// Cookie操作方法只被该模板调用 | zhenhua.xi | 20140903 | end
	
		// 帮助中心左侧菜单栏 | 区分账户中心左侧菜单栏 | 老样式 | zhenhua.xi | 20140904
		var helpNav = $('.help_nav h4');
		var helpLis = helpNav.next().children();

		helpNav.click(function(){
			if($(this).next().css('display')=='block'){
				$(this).next().slideUp();
				$(this).find('i').css('background-position','0 -8px');
			}else{
				$(this).next().slideDown();
				$(this).find('i').css('background-position','0 0');
			}
		})
		helpLis.click(function(){
			$(this).parent('ul').siblings('ul').find('li').attr('class','');
			$(this).addClass('active').siblings().removeClass('active');
		})		
		//bank select
		
		selectLi.bind('click',function(){//此处图片路劲根据开发改的，可以随意改
				$(this).children('img').attr('src','/2014/images/selected.gif').siblings('input').attr('checked',true)
				.parent().siblings().children('img').attr('src','/2014/images/null.png').siblings('input').attr('checked',false);
				$(this).parents('.other').siblings('.other').find('li').children('img').attr('src','/2014/images/null.png');
			
			$(this).parents('.bankSelect').hide(5,function(){
				oT=$('.main_wrapper');
				if(oT.hasClass('page5')){
					oDl.children('dd').html('请选择<i></i>');
				}else{
					oDl.children('dd').html('选择银行<i></i>');
				}		
			});
			if($(this).children('input').attr('checked')=='checked'){
				var className=$(this).attr('class');
				oDt.attr('class',className);
			}
			
			$("#bank101paymentDetail").hide();
			$("#bank102paymentDetail").hide();
			$("#bank103paymentDetail").hide();
			$("#bank104paymentDetail").hide();
			$("#bank105paymentDetail").hide();
			$("#bank106paymentDetail").hide();
			$("#bank107paymentDetail").hide();
			$("#bank108paymentDetail").hide();
			$("#bank109paymentDetail").hide();
			$("#bank110paymentDetail").hide();
			$("#bank111paymentDetail").hide();
			$("#bank112paymentDetail").hide();
			$("#bank113paymentDetail").hide();
			$("#bank114paymentDetail").hide();
			$("#bank115paymentDetail").hide();
			$("#bank116paymentDetail").hide();
			$("#"+$(this).attr('class')+"paymentDetail").show();
			
			
		})
		
		selectplatform.bind('click',function(){
			$(this).children('img').attr('src','images/selected.gif').siblings('input').attr('checked',true)
				.parent().siblings().children('img').attr('src','images/null.png').siblings('input').attr('checked',false);
				$(this).parents('.other').siblings('.other').find('li').children('img').attr('src','images/null.png');
			})
			
		//老用户已经绑定	
		selectshortcut.bind('click',function(){
				if($(this).hasClass('otherbank')){
						showCon_5();
					}
				else{
					$(this).addClass('selectli').siblings().removeClass('selectli');
					$('.bankMegTab').show();
					}
				  	  }
				)
		//新用户未绑定			
		newselectshortcut.bind('click',function(){
				if($(this).hasClass('otherbank')){
						showCon_5();
					}
				else{
					$(this).addClass('selectli').siblings().removeClass('selectli').hide();
					$('.otherbank').show();
					$('.bankMegTab').show();
					}
				  	 }
				)
				
		//弹出银行
		dialogbank.bind('click',function(){
				$(this).addClass('selectli').siblings().removeClass('selectli')
					}
				)
		//网银支付			
		newselectshortcut3.bind('click',function(){
				$(this).addClass('selectli').siblings().removeClass('selectli');
		})
		newselectshortcut2.bind('click',function(){
				$(this).addClass('selectli').siblings().removeClass('selectli');
				var newselectbank= $(this).children().children().attr('src');
				//alert(newselectbank)
				$('#newbank').attr('src',newselectbank)
		})
		
		tixianbank.bind('click',function(){
				$(this).addClass('selectli').siblings().removeClass('selectli');
				var newselectbank= $(this).children().children().attr('src');
				//alert(newselectbank)
				$('#newbank').attr('src',newselectbank)
		})
		
		oClose.click(function(){
			$(this).parents('.bankSelect').hide();
			var bankNo = "";
		    	//验证银行
		    	if(bankNo==""){
		    		$("input[name=bankRadio]").each(function () {
		        		if($("#"+this.id).attr("checked")=="checked"){
		        			bankNo = $("#"+this.id).val();
		        		}
		        	});
		    	}
		if(bankNo!='on'){
			$('#bank'+bankNo+'paymentDetail').show();
		}
			oT=$('.main_wrapper');
			if(oT.hasClass('page5')){
				oDl.children('dd').html('请选择<i></i>');
			}else{
				oDl.children('dd').html('选择银行<i></i>');
			}			
		})

		
		oDl.click(function(){
			var banS=$('.pl24 .bankSelect')[0];
			if(banS.style.display=='block'){
				$(this).siblings('.bankSelect').hide();
				oT=$('.main_wrapper');
				if(oT.hasClass('page5')){
					$(this).children('dd').html('请选择<i></i>');
				}else{
					$(this).children('dd').html('选择银行<i></i>');
}				
				var bankNo = "";
				//验证银行
				if(bankNo==""){
					$("input[name=bankRadio]").each(function () {
						if($("#"+this.id).attr("checked")=="checked"){
							bankNo = $("#"+this.id).val();
						}
					});
				}
				if(bankNo!='on'){
					$('#bank'+bankNo+'paymentDetail').show();
				}				
				//$(this).siblings('table').show();
			}else{
				$(this).siblings('.bankSelect').show();
				$(this).children('dd').html('收起<i></i>').children('i').css('background','url(/2014/images/jup.png) left top no-repeat');
				$(this).siblings('table').hide();
			}
		})
		

		//点击添加银行弹框
			//var oWinHeight,scrollTop;
			var plus=$('.history .plus');
			var plusBankBg=$('.plusBankBg');
			var showDiv=$('.plusBankBg');
			var showForm=$('.plusBank');
			var confir=$('.module .submit');
			var showForm1=$('.plusBank1');
			var oConfir=$('.confirm_cc');
			var btn_white=$('.bottom .btn_white');
			var closeBank=showForm.find('.plus_c');
			var closeBank1=showForm1.find('.plus_c');
			var closeConfirm=showForm1.find('.close_confirm');
			
			closeConfirm.click(function(){
				$(this).parents('.plusBank1').slideUp().siblings('.plusBankBg').hide(100);
			})
			
			
			plus.click(function(){
				showDiv.show();
				showForm.slideDown();
			})
			btn_white.click(function(){
				showDiv.hide();
				showForm1.slideUp();
			})
			closeBank.click(function(){
				$(this).parents('.plusBank').slideUp().siblings('.plusBankBg').hide(100);
			})
			
			
			confir.click(function(){
				showDiv.show();
				showForm1.slideDown();
			})
			closeBank1.click(function(){
				$(this).parents('.plusBank1').slideUp().siblings('.plusBankBg').hide(100);
			})
			//40%背景满屏
			function changeHeight(){
				oWinHeight=$(document).innerHeight()+'px';
				plusBankBg.css('height',oWinHeight);
			}
			changeHeight();
			window.onresize=function(){
				changeHeight();
			}
			
			//名字焦点
			
			$('.table_2 .back_e4').focus(function(){
				$(this).val('');
			})
		//accound center End
		
		//Safety Center Start
		
		var showNext=$('.showNext');
		showNext.click(function(){
			var $next=$(this).parents('tr').next();
			$next.find('.rightside').children('input').val('');
			$next.find('.error_1').hide();
			$next.find('#bankCardAdd').addClass('none').siblings().removeClass('none');
			$next.find('#changePhoneByOld').addClass('none').siblings().removeClass('none');
			$next.toggleClass('none').siblings('.only').addClass('none');
		})
		
		
		$('.why i').hover(function(){
			$(this).siblings().show();
		},function(){
			$(this).siblings().hide();
		})
		//Safety Center End
		
		//我的特权 Start
		try{
			$('.imglist').jcarousel({
				wrap: 'circular',
				auto: 0,
				scroll:1,
				animation:1000
			});
			$('.btbanner .jcarousel-container .jcarousel-prev').hover(function(){
				$(this).css({'background-position':'54px 0'});
			},function(){
				$(this).css({'background-position':'0 0'});
			})
			$('.btbanner .jcarousel-container .jcarousel-next').hover(function(){
				$(this).css({'background-position':'18px 0'});
			},function(){
				$(this).css({'background-position':'36px 0'});
			});
		}catch(err){}
		
		var _aLis=$('.imglist li');
		_aLis.hover(function(){
			var jcarouselindex=$(this).attr('jcarouselindex');
			if(jcarouselindex%6==0){
				return false;
			}
			$(this).addClass('f7f');
			var oIndex=jcarouselindex%6-1;
			$('.showDiv .showDiv-child').eq(oIndex).show().siblings().hide();	
		},function(){
			$(this).removeClass('f7f');
		})
		_aLis.eq(0).trigger('mouseover');
		_aLis.each(function(){
			var oClass=$(this).children('.w60').attr('class')
			var reg=/[a-z]$/;
			var _boolean=reg.test(oClass);
			if(!_boolean){
				$(this).click(function(){
					$(this).addClass('cur').siblings().removeClass('cur');	
				})
			}
		})
		
		//我的特权 End
		
		//Tab切换
		$('.module .tab_u span').click(function(){
			//var _index=$(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('.classc-con .classc-com').eq($(this).index()).show().siblings().hide();
		})
		
		$('.table_2 .textarea').focus(function(){
			$(this).text('');
		})
		
		//
		var perLi=$('.stepCon .percent li');
		perLi.click(function(){
			$(this).addClass('cur').children('img').css('display','block').parent().siblings().removeClass('cur').children('img').css('display','none');
			
		})
		perLi.eq(0).click();
		
		
		$('.stepCon .hover').hover(function(){
			$('.zhekou').show();
		},function(){
			$('.zhekou').hide();
		})
		
		$('.table35 .why').hover(function(){
			$(this).siblings().show();
		},function(){
			//$(this).siblings().hide();
		})
		
		
		
		//激活礼品券
		
		
		$("#sn1").focus();
        //自动跳到下一个输入框  
        $("input[name^='sn']").each(function() {
            $(this).keyup(function(e) {
                e = window.event || e;
                var k = e.keyCode || e.which;
                if (k == 8) {   //8是空格键
                    if ($(this).val().length < 1) {
                        $(this).prev().focus();
                        $(this).prev().focus(function() {
                            var obj = e.srcElement ? e.srcElement: e.target;
                            if (obj.createTextRange) { //IE浏览器
                                var range = obj.createTextRange();
                                range.moveStart("character", 4);
                                range.collapse(true);
                                range.select();
                            }
                        });
                    }
                } else {
                    if ($(this).val().length > 3) {
                        $(this).next().focus();
                    }
                }
            })
        });

        $("input[type='text'][id^='sn']").bind('keyup',
        function() {
            var len = $("#sn1").val().length + $("#sn2").val().length + $("#sn3").val().length + $("#sn4").val().length;
            /*if (len == 16) device_verify();*/
        });
		
		
		//contact
		var a=[ '地址：义乌市稠州北路800号金福源C区717-720室　　联系电话：0579-85138490', 
				'地址：郑州市金水区经三路32号财富广场4号楼1302室　　联系电话：0371-55195698', 
				'地址：天津市和平区新华路1、3、5号 多伦道23、25号 佳木斯道18号12B07室　　联系电话：022-60769032', 
				'地址：福州市鼓楼区五四路159号世界金龙大厦18楼C3、D2　　联系电话：0591-28065538', 
				'地址：武汉市新华路316号良友大厦6楼CD　　联系电话：027-85552165', 
				'地址：沈阳市沈河区中山路355号高登国际大厦806室　　联系电话：024-22818668', 
				'地址：重庆市江北区建新北路36号伊美大厦2302、2303室　　联系电话：023-67096300', 
				'地址：广州市天河区天河路490号壬丰大厦1806号房　　联系电话：020-38834006', 
				'地址：大连市中山区人民路23号虹源大厦2702、2703室　　联系电话：0411-39986918', 
				'地址：合肥市庐阳区濉溪路278号财富广场首座1301室　　联系电话：0551-65776750', 
				'地址：南昌市青云谱区解放西路49号明珠广场H座2205、2206室　　联系电话：0791-88463893', 
				'地址：济南市市中区经四路万达商业广场B座1910、1911室　　联系电话：0531-55700336', 
				'地址：北京市朝阳区建国路93号院8号楼2308、2309室　　联系电话：010-52473373', 
				'地址：深圳市罗湖区嘉宾路与南湖路交汇处北侧深华商业大厦办公1008室　　联系电话：0755-82117671', 
				'地址：南京市中山南路49号南京商茂世纪广场16层A1座　　联系电话：025-66673351', 
				'地址：成都武侯区人民南路四段27号1栋1单元9楼8号、7号　　联系电话：028-85569761', 
				'地址：无锡市崇安区人民中路220号1504、1505室　　联系电话：0510-88570201', 
				'地址：苏州市新区狮山路88号7层715、717室　　联系电话：13584298785' 
			];

		var conLis=$('.content .contact li');
		conLis.click(function(){
			var _index=$(this).index();
			var adres=$('.address');
			adres.show().html(a[_index]);
			$(this).addClass('cur').siblings().removeClass('cur');
		})
		conLis.eq(0).trigger('click');
		//banner点位置
		
		
		
		
		//你我贷对象 Text Xi {
		try{
			function NWD(){
				// 日期控件配置 | foramt | yy-mm-dd | yy/mm/dd
				this.getDatepickerParam = function (foramt){
				return {
						closeText : '关闭',
						prevText : '&#x3c;上月',
						nextText : '下月&#x3e;',
						changeMonth : true,
						changeYear : true,
						yearRange : '-100:+100',
						currentText : '今天',
						monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月',
								'九月', '十月', '十一月', '十二月' ],
						monthNamesShort : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月',
								'九月', '十月', '十一月', '十二月' ],
						dayNames : [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
						dayNamesShort : [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ],
						dayNamesMin : [ '日', '一', '二', '三', '四', '五', '六' ],
						weekHeader : '周',
						dateFormat : foramt || "yy-mm-dd",
						firstDay : 1,
						isRTL : false,
						showMonthAfterYear : true,
						yearSuffix : '年'
					};
				};
			}
			var nwd = new NWD(); 
			
		}catch(err){}
		
	});
})()





$(function(){
	(function(){
		
		 ////用户中心首页投资贷款切换-----------
		 $('.tab01 span').click(function(){
			var _index=$(this).index();
			$(this).addClass('active').siblings('span').removeClass('active');
			$('.content').children('.in').eq(_index).show().siblings('.in').hide();
			$('.content .imgout').hide();
			if($(this).html()=='我的借款'){
				$('.tab01 .r').hide();
				$('.iJkr').show();
				$('.iTzr').hide();
				}else{
					$('.tab01 .r').show();
					$('.iTzr').show();
					$('.iJkr').hide();
					};
		})
		$('.tab01 .r div').click(function(){
			$(this).hide().siblings().show();
			$('.content .imgout').slideToggle(500);		
		});
		//-------投资抵用券选-------------------------
		/*(function (D, L,C) {
				L.hide();
				D.toggle(
					function () {
					
						D.parents(".nr").addClass("tan");
						L.show(300).focus();
					},
					function () {
						var F = L.is(':hidden');
						L.hide(300);
						if (F != true) {
							setTimeout(function () {
								D.parents(".nr").removeClass('tan');
							}, 300);
						}
					}
				);
				C.click(function(){
					var F = L.is(':hidden');
						L.hide(300);
						if (F != true) {
							setTimeout(function () {
								D.parents(".nr").removeClass('tan');
							}, 300);
						}
					});
			})($('.xialai'), $('.xiala-kuai'), $('.sq'));*/
			//--投资详情页--输入框-------------
			$(".touzi02").each(function(){
				var thisText=$(this).text();
				$(this).focus(function(){
					if(thisText=='请输入您的留言内容...'){
						$(this).text('').removeClass('fc_9');	
					}else{
						return false;
						}
					}).blur(function(){
						if(thisText==''){
							$(this).text('请输入您的留言内容...').addClass('fc_9');	
						}else{
							return false;
							}	
					})
			});
			//--输入框内提示-------------
			$(".touzi01 .input_1").each(function(){
				 var thisVal=$(this).val();
				 if(thisVal!=""){
				   $(this).siblings("span").hide();
				  }else{
				   $(this).siblings("span").show();
				  }
				 $(this).focus(function(){
				   $(this).siblings("span").hide();
				  }).blur(function(){
					var val=$(this).val();
					if(val!=""){
					 $(this).siblings("span").hide();
					}else{
					 $(this).siblings("span").show();
					} 
				  });
				});	
			//--小图标上的提示弹框----------------------	
			$('.tkOut').hover(function(){
				$(this).children('.tkIn').show();	
			},function(){
				$(this).children('.tkIn').hide();
			});
		//---领礼添加修改地址-----------------
		$('.xugai1').click(function(){
				$('.add_out').slideDown();	
		});
		$('.add_btn').click(function(){
			$('.add_out').slideUp();
		});
		   var $hoverLi=$('.add_0 .line1');
		   $hoverLi.children('a').hide();
		   $hoverLi.live('mouseover',function(){
			  var $clickA=$(this).children('a:first')
				if($(this).attr('class')=='line1'){
					$(this).addClass('bg').children('a').show();
				}else{
					return false;
				}
				$clickA.click(function(){
					$(this).parent().addClass('bg1').children('a').show().siblings('input').attr('checked',true);
					$(this).siblings('.line1').siblings('.line2').slideDown(); 
					$(this).parent('.line1').each(function() {
						$(this).siblings().removeClass('bg1 bg').children('input').attr('checked',false).siblings('a').hide();
                    })
				})
				
			})
			
			
			 $hoverLi.live('mouseout',function(){
				if($(this).attr('class')=='line1 bg'){
						
						$(this).removeClass('bg').children('a').hide()
					}else{
						return false;
						}	
			})
		   
		   
			
			$('.add_0 .add_l').click(function(){
				$(this).addClass('bg1').children('input').attr('checked',true);
				$(this).siblings('.line1').removeClass('bg1 bg').children('input').attr('checked',false).siblings('a').hide();
				$(this).siblings('.line2').slideDown();	
			});
		//--用户中心TAB切换----------------
		function SwapTab(name,title,content,Sub,cur){
		  $(name+' '+title).mousedown(function(){
			  $(this).addClass(cur).siblings().removeClass(cur).parent().siblings('.tab_content').find('.tj_nr01').hide();
			  $(content+' '+Sub).eq($(name+' '+title).index(this)).show().siblings().hide();
		  });
		};
		new SwapTab(".tab_u","span",".tab_content",".nr","active");
		new SwapTab(".tab_y","span",".tab_content",".nr","active"); 
		new SwapTab(".login_tit",".tab_btn",".tab_box",".nr","active");/*全局登录*/
		//理财计划里小问号上的注释-----2014-8-18作废
		$('.tishi_w').hover(function(){
			$(this).parent('a').siblings('.showCon').show();
		},function(){
			$(this).parent('a').siblings('.showCon').hide();
		})
		//--理财计划---修改下的弹框 2014-8-18作废------------
		$('.w250 .xg0').click(function(){
			var tkDiv=$('.w250 .tk').css("display");
			if(tkDiv=="block"){
				$(this).siblings('.tk').slideUp(200);
			}else{
				$(this).siblings('.tk').slideDown(200);
			}
		})
		$('.w250 .tk .xg1').click(function(){
			$(this).parents('.tk').slideUp(200);
		});
		//--理财计划---修改下的弹框 2014-8-18启动------------	
		$('.last .xg0').click(function(){
			var tkDiv=$('.last .tk').css("display");
			if(tkDiv=="block"){
				$(this).siblings('.tk').slideUp(200);
			}else{
				$(this).siblings('.tk').slideDown(200);
			}
		})
		$('.last .tk .xg1').click(function(){
			$(this).parents('.tk').slideUp(200);
		});
		//--消息设置中的隔行换色----------------
		$('.msg_set dd:even').addClass('ddbg');
	//-消息中心-----------
	$('.msg_all li:even').addClass('bg')
		var selectAll=$('.all_0');
		var oBtn=$('.remove0');
		var aLis=$('.msg_all li:gt(0)');
		var _index=aLis.children('.haead').find('span').not('.col_1');
		_index.click(function(){
			var cDiv=$(this).parent().siblings('.content')
			$(this).parent('div').removeClass('aHold')
			if(cDiv.css('display')!='block'){
			$(this).parent().siblings().slideDown().parents('li').siblings().children('.content').slideUp();
			$(this).parent('div').removeClass('aHold')	
			}else{
				$(this).parent().siblings().slideUp();	
			}
		})
		
		selectAll.click(function(){
			$(this).parents('li').siblings().find('.col_1').children().attr('checked',this.checked);
		})	
		oBtn.click(function(){
			var oLis=$(this).parent('.top').siblings('.msg_all').find("li:not('.diyi')");
			for(var i=0;i<oLis.length;i++){
				if(oLis.eq(i).find('input').attr('checked')=='checked'){
					oLis.eq(i).remove();
				}
			}
			
		});
		//---用户中心搜索分类----------------
		$('.a_btn span a:gt(6)').hide();
		$('.a_btn .more').toggle(function(){
			$(this).text('隐藏').siblings().children('a').show()
			
			},function(){
				$(this).text('更多').siblings().children('a:gt(6)').hide();	
			});
		
		$('.a_btn .lei').click(function(){
			$(this).addClass('active').siblings('.lei').removeClass('active');
		});

		$('.tj_btn01').toggle(
		  function () {
			$('.tj_nr01').slideDown();
		  },
		  function () {
			$('.tj_nr01').slideUp();
		  });
		  
		  //---底部SEO用---------------
			(function(){
				var O = $('.lunbo1'),
					H = _H = O.children('li').height(),
					N = O.children('li').length;
					for(var i = 0; i<N-1; i++){
						$(".lunbo1").animate({marginTop: '-'+_H+'px'}, 1000);
						_H = H+_H;
					}
			})();
		//---标详情页表单初始文字---------
			
			function Focus(ele,className){
				$(ele).focus(function(){
					$(this).removeClass(className);
				});
				$(ele).blur(function(){
					
					var txtVal = $(this).val();
					if(txtVal == ""){
						
						$(this).addClass(className);
					};	
				});
			}
			Focus('.inputval1','ibg1');
			Focus('.userName1','user_bg1');
			Focus('.userName2','user_bg2');
			Focus('.yu','user_bg3');
		//----协议选择-------
		$('.xieyi22 .xieyibox').click(function(){
			$(this).siblings('.xieyidown').slideToggle(100);
			$('.xieyidown .close').click(function(){
				$(this).parents('.xieyidown').slideUp(100);
			})
		});
		
		
		//--用户中心新用户提示泡泡------------
		/*$('.bubble_t3 .pp').click(function(){
			$(".bubble_t3").hide();	
		});
		$('.airal').mousemove(function(){
			$(".bubble_t2").show();	
		});
		$('.bubble_t2 .close1').click(function(event) {
			$(".bubble_t2").hide();
		});*/
		
		//--用户中心新用户提示泡泡------------
		$('.yellow_pp .pp').click(function(){
			$(this).parents('.yellow_pp').parent("span").removeAttr("style");
			$(this).parents('.yellow_pp').remove();
			
		});

		//--2014-9-25-头部顶加的新浪和微信泡泡--
		$('.toptk').hover(function(){
			$(this).children('.tk').show()
		},function(){
			$(this).children('.tk').hide()
		});
		//----充值页底下，选择充值方式----------------
		var $aBtn = $('.top_up .modify');
		var $options1 = $('.top_up .way_box :radio');
		$aBtn.click(function(){
			$(this).hide().next('.way_box').show();
		});
		$options1.click(function(){
			$(this).parents('.way_box').removeClass('gray_out').addClass('blue_out').siblings('.way_box').removeClass('blue_out').addClass('gray_out');
		});
		
		//---债权列表筛选
		$(".type .line_1 label").click(function(){
			$(this).parent().siblings('').children('label').removeClass('first');
			$(this).toggleClass('cur');
		})
		$(".type .all").click(function(){
			$(this).parent().siblings().children('label').removeClass('cur')
			$(this).addClass('first');
		});
		//--债权列表筛选的展开收起---
		$('.on_off a').toggle(function(){
			$(this).html('收起'+' <i></i>').attr('class','a_off')
			$(this).parents('.itmo_off').siblings('.on_off_box').slideDown(200);
		},function(){
			$(this).html('展开'+ '<i></i>').attr('class','a_on')
			$(this).parents('.itmo_off').siblings('.on_off_box').slideUp(200);
			
		});
		
		//----债权列表悬停加框--------
		$('.add_bor').hover(
			function () {
				$(this).siblings().addClass('mod_bor_col')
			},
			function () {
				$(this).siblings().removeClass('mod_bor_col')
			}
		);
		//--债权列表上的排序-----
		$('.item_sorting a').toggle(
			function () {
				$(this).siblings('a').removeClass();
				$(this).attr('class','up')
			},
			function () {
				$(this).siblings('a').removeClass();
				$(this).attr('class','down')
			}
		);
		//----债权列表侧边导航------
		$('.item_nav li a').click(function(){
			//alert($(this).parent().siblings().children().html())
			$(this).addClass('cur').parent().siblings().children().removeClass();	
		});

		
		
	})();//------end---------
	
});

//银行卡分段输出
  $(document).ready(function() {
        $("#i_bank").keyup(function(event) {
        	this.value =this.value.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
            var str = $('#i_bank').val();
            $(".j_bank").html(str);
        })
     
        $("#i_bank").focus(function(){
        	$(".touzi01 i").fadeTo(300,1)
            $(".touzi01 i").show();

        }).blur(function(){
            $(".touzi01 i").hide();
        });
    });

//6月19右下角在线客服
$(function(){
    var protocol = document.location.protocol.toLowerCase();
    
	// Adobe | Begin | zhenhua.xi | 20141103
	$("#onlineQQService,#onlineQQService1").click(function(){
		var s = s_gi(s_account);
		s.linkTrackVars = "events";
		s.linkTrackEvents = "event22";
		s.events = "event22"; //在线客服点击事件
		npo.tl(this,'o','zxkfdj');
		
		var uuid,cururl,referer,channel,sw,sh,bw,bh,isSetCookie,pvUrl,src,userid,pagetype,headerUrl;
		if(protocol == "https:"){
			headerUrl="https://collector.niwodai.com/?";
		}else{
			headerUrl="http://collector.niwodai.net/?";
		}
		
		src=getSrc();
		uuid = getUuid('UNQID');
		cururl = document.location.href.replace(/&/g,'~@~');
		referer = document.referrer.replace(/&/g,'~@~');
		channel=getChannel();
		sw=screen.width;
		sh=screen.height;
		bw = document.body.clientWidth;
		bh = document.body.clientHeight;
		isSetCookie=window.navigator.cookieEnabled;

		var buttonStr="uuid="+encodeURIComponent(uuid)+"&uid=null&t=button&src="+encodeURIComponent(src)+"&cid="+ encodeURIComponent(channel)+
        "&sr="+encodeURIComponent(sw)+"_"+encodeURIComponent(sh)+""+"&bp="+encodeURIComponent(bw)+"_"+encodeURIComponent(bh)+ "&cookie="+encodeURIComponent(isSetCookie)+
        "&refer="+encodeURIComponent(referer)+"&cururl="+encodeURIComponent(cururl)+"&pagetype="+encodeURIComponent(pagetype)+"&time="+encodeURIComponent(new Date().valueOf()) +
        "&buttonid=onlineQQService";
		var buttonUrl=headerUrl+buttonStr;
		var img = document.createElement("img");
		img.src = buttonUrl;
		
	});
	// Adobe | End
    //公共右下角在线客服
    var onlineQQService = $("#onlineQQService");
    if(onlineQQService){
    	if(protocol == "https:"){
            onlineQQService.attr("href","http://crm2.qq.com/page/portalpage/wpa.php?uin=4007910888&f=1&ty=1&aty=0&a=&from=5");
            onlineQQService.attr("target","_blank");
        }else{
            onlineQQService.attr("href","http://crm2.qq.com/page/portalpage/wpa.php?uin=4007910888&f=1&ty=1&aty=0&a=&from=5");
            onlineQQService.attr("target","_blank");
        }
    }
    
    //解决输入框有值的情况下出现提示语bug
	$(".user_bg1").each(function(){
		var unameVal=$(this).val();
		if(unameVal){
			$(this).removeClass("user_bg1");
		}
	});
	$(".user_bg2").each(function(){
		var unameVal=$(this).val();
		if(unameVal){
			$(this).removeClass("user_bg2");
		}
	});
    
});
 
 	$('.jiekuaniphone').hover(function(){
 		$('.webdownjiekuan').css('display','block');
 	},function(){
 		$('.webdownjiekuan').css('display','none');
 	});
<!-- WPA Button End -->

$(document).ready(function(){
//banner
//账户中心banner
(function($){$.fn.extend({"banner":function(options){var defaluts={eml:".page,.prev,.next,.title",direction:"lr",mode:"slide",pages:true,btns:true,title:true,autoanimate:true,ease:"easeInOutElastic",cycle:true,cycleType:true,auto:2000,animation:1000};var options=$.extend(defaluts,options);return this.each(function(){var op=options,obj=$(this),objLi=obj.find("li"),objSpan=obj.find(".page span"),lenB=obj.find("li").length,prev=obj.find(".prev"),next=obj.find(".next"),title=obj.find(".title"),f=true;if(op.direction=="ud"&&op.mode=="slide"){var Scr=obj.find("ul");var Scrw=Scr.find("li").outerWidth();var Scrh=Scr.find("li").outerHeight();Scr.find("li").height(Scrh);Scr.height(Scrw*lenB);Scr.height(Scrh)}if(op.direction=="lr"&&op.mode=="slide"){var Scr=obj.find("ul");var Scrw=Scr.find("li").outerWidth();var Scrh=Scr.find("li").outerHeight();Scr.find("li").width(Scrw);Scr.width(Scrw*lenB);Scr.height(Scrh)}obj.find(".cont").text(lenB);var page="<div class='page'>";for(i=1;i<=lenB;i++){page+="<span>"+i+"</span>"}page+="</div>";obj.append(page);var page=obj.find(".page span");page.eq(0).addClass("current");var imgAlt=objLi.eq(0).find("img").attr("alt");obj.find(".alt").text(imgAlt);if(op.pages==false){obj.find(".page").hide()}if(op.btns==false){prev.hide();next.hide()}if(op.title==false){title.hide()}if(op.mode=="slide"){objLi.css({"float":"left"})}else{if(op.mode=="fade"){objLi.css({"position":"absolute","top":0,"left":0,"display":"none"});objLi.eq(0).show()}}if(op.unlimited==true){var n=0;objLi.each(function(){$(this).attr("indexNum",n++)})}if(op.cycle==true&&op.cycleType==true){if(op.direction=="ud"&&op.mode=="slide"){objLi.closest("ul").css({"position":"relative","top":-Scrh});objLi.css({"position":"absolute","left":0,"display":"none","top":Scrh,"z-index":1});objLi.eq(0).css({"display":"block","z-index":5})}else{if(op.direction=="lr"&&op.mode=="slide"){objLi.closest("ul").css({"position":"relative","left":-Scrw});objLi.css({"position":"absolute","top":0,"display":"none","left":Scrw,"z-index":1});objLi.eq(0).css({"display":"block","z-index":5})}}}page.live("mousemove",function(){if(!$(this).hasClass("current")){var curr=page.index(this)+1;imgAlt=objLi.eq(page.index(this)).find("img").attr("alt");obj.find(".curr").text(curr);obj.find(".alt").text(imgAlt);if(op.direction=="ud"&&op.mode=="slide"&&!Scr.is(":animated")){if(op.cycle==true&&op.cycleType==true){var ui=obj.find(".page span.current").index();var ut=$(this).index();if(ut==lenB-1&&ui==0){f=false}else{if(ut==0&&ui==lenB-1){f=true}else{if(ut>ui){f=true}else{f=false}}}if(f){Scr.css("top",-Scrh);Scr.find("li").eq($(this).index()).css({"top":Scrh*2,"display":"block"});Scr.stop(true,true).animate({"top":-Scrh*2},op.animation,op.ease,function(){Scr.css("top",-Scrh);Scr.find("li").eq(ui).hide();Scr.find("li").eq(ui).css({"z-index":1});Scr.find("li").eq(ut).css({"z-index":5,"top":Scrh})})}else{Scr.css("top",-Scrh);Scr.find("li").eq($(this).index()).css({"top":0,"display":"block"});Scr.stop(true,true).animate({"top":0},op.animation,op.ease,function(){Scr.css("top",-Scrh);Scr.find("li").eq(ui).hide();Scr.find("li").eq(ui).css({"z-index":1});Scr.find("li").eq(ut).css({"z-index":5,"top":Scrh})})}}else{Scr.stop(true,true).animate({marginTop:-Scrh*($(this).index())},op.animation,op.ease)}$(this).addClass("current").siblings().removeClass("current")}else{if(op.direction=="lr"&&op.mode=="slide"&&!Scr.is(":animated")){if(op.cycle==true&&op.cycleType==true){var i=obj.find(".page span.current").index();var t=$(this).index();if(t==lenB-1&&i==0){f=false}else{if(t==0&&i==lenB-1){f=true}else{if(t>i){f=true}else{f=false}}}if(f){Scr.css("left",-Scrw);Scr.find("li").eq($(this).index()).css({"left":Scrw*2,"display":"block"});Scr.stop(true,true).animate({"left":-Scrw*2},op.animation,op.ease,function(){Scr.css("left",-Scrw);Scr.find("li").eq(i).hide();Scr.find("li").eq(i).css({"z-index":1});Scr.find("li").eq(t).css({"z-index":5,"left":Scrw})})}else{Scr.css("left",-Scrw);Scr.find("li").eq($(this).index()).css({"left":0,"display":"block"});Scr.stop(true,true).animate({"left":0},op.animation,op.ease,function(){Scr.css("left",-Scrw);Scr.find("li").eq(i).hide();Scr.find("li").eq(i).css({"z-index":1});Scr.find("li").eq(t).css({"z-index":5,"left":Scrw})})}}else{Scr.stop(true,true).animate({marginLeft:-Scrw*($(this).index())},op.animation,op.ease)}$(this).addClass("current").siblings().removeClass("current")}else{if(op.mode=="fade"){if(objLi.eq(page.index(this)).is(":hidden")){objLi.stop(true,true).fadeOut(op.animation).eq(page.removeClass("current").index($(this).addClass("current"))).fadeIn(op.animation)}}}}}});if(op.autoanimate==true){var index=1;var time=setInterval(function(){page.eq(index).mousemove();index++;if(index==lenB){index=0}},op.auto);obj.find(op.eml).hover(function(){clearInterval(time)},function(){index=obj.find(".page span.current").index()+1;if(index==lenB){index=0}time=setInterval(function(){page.eq(index).mousemove();index++;if(index==lenB){index=0}},op.auto)});objLi.hover(function(){clearInterval(time)},function(){index=obj.find(".page span.current").index()+1;if(index==lenB){index=0}time=setInterval(function(){page.eq(index).mousemove();index++;if(index==lenB){index=0}},op.auto)})}prev.mousemove(function(){index=obj.find(".page span.current").index()-1;prev.removeClass("disabled");next.removeClass("disabled");if(op.cycle!=true){if(index==-1||index==0){prev.addClass("disabled")}if(index==-1){return false}}page.eq(index).mousemove()});next.mousemove(function(){prev.removeClass("disabled");next.removeClass("disabled");index=obj.find(".page span.current").index()+1;if(op.cycle!=true){if(index==lenB||index==lenB-1){index=lenB-1;if(index==lenB-1||index==lenB){next.addClass("disabled")}}}else{if(index==lenB){if(op.cycle!=true){index=lenB-1}else{index=0}}}page.eq(index).mousemove()})})}})})(jQuery);
$('.user_banner').banner({
		mode:'fade', //动画方式 fade(渐隐渐现) / slide (左右滑入)
		pages:true,	 //是否需要pages true/false
		btns:true,	//是否需要btns true/false
		title:true,	//是否需要title true/false
		auto:4000,	//停留时间
		animation:1000 //动画时间
	});
	});
	
$(function(){


// 头部导航条鼠标浮动
	var navLi = $(".new_nav li");
		navLi.hover(
			function(){
			if($(this).index()==1||$(this).index()==2||$(this).index()==3||$(this).index()==5){
				$(this).children('.investCon').addClass('investbox');
				$(this).find(".invest_list").stop(true).slideDown("fast");
			}
		},function(){
			if($(this).index()==1||$(this).index()==2||$(this).index()==3||$(this).index()==5){
				$(".invest_list").stop(true).slideUp("fast");
				$(this).children(".investCon").removeClass('investbox');
		}
		}
		);//导航菜单
		
	var loginNavLi = $(".new_nav li .LedgerCon");
		loginNavLi.hover(
			function(){
				$(this).addClass("Ledgerbox");
				$(".Ledger_list").stop(true).slideDown();
			},function(){
				$(".Ledger_list").stop(true).slideUp();
				$(this).removeClass("Ledgerbox");
			}	
		);//我的账户
})