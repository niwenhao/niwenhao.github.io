 // Customized by CSS HappyLife
 //  Licensed under the MIT License:

// jQuery_Auto 0.9 + yuga.js 0.3.0 + heightLine customize

/* -----------------------------------------------------------------
- Original

+  jQuery_Auto.js
     http://sputnik.pl/code/javascript/jquery_auto

+  yuga.js
     http://kyosuke.jp/portfolio/javascript/yuga.html

+ heightLine.js
    http://blog.webcreativepark.net/2007/07/26-010338.html

----------------------------------------------------------------- */


// jQuery_Auto 0.9
// Automatic functions for webpages (using the wonderful jQuery library)

// Copyright: (c) 2006, Michal Tatarynowicz (tatarynowicz@gmail.com)
// Licenced as Public Domain (http://creativecommons.org/licenses/publicdomain/)
// $Id: jquery_auto.js 426 2006-05-06 19:54:39Z Michał $


// Initialization

$.auto = {
	init: function() {
		for (module in $.auto) {
			if ($.auto[module].init)
				$.auto[module].init();
		}
	}
};

$(document).ready($.auto.init);


// Auto-hidden elements

$.auto.hide = {
	init: function() {
		$('.noScript').hide();
	}
};


// Auto-submitting SELECTs

$.auto.submit = {
	init: function() {
		$('select.changeSubmit').bind('change', this.on_change);
	},

	on_change: function() {
		if (this.value) this.form.submit();
	}
};


// Auto-selected text in text fields after a label click

$.auto.select = {
	init: function() {
		$('label.fieldSelect').each(this.label_action);
		$('input.fieldSelect').bind('click', function(){ this.select(); });
	},

	label_action: function() {
		var field = $('#'+this.htmlFor).get(0);
		if (field && field.focus && field.select) {
			$(this).bind('click', function(){ field.focus(); field.select(); });
		}
	}
};


// Switches tabs on click

$.auto.tabs = {

	init: function() {

		$('.tabContainer').each(function(){
			var f = $.auto.tabs.click;
			var group = this;
			$('.tab li, li.tab', group).each(function(){
				this.group = group;
				$(this).click(f);
				$('#'+this.id+'Body').hide();
			}).filter(':first').trigger('click');
		});

	},

	click: function() {
		var tab = $('#'+this.id+'Body').get(0);
		$('.tab li, li.tab', this.group).each(function(){
			$(this).removeClass('active');
			$('#'+this.id+'Body').hide();
		});

		$(this).addClass('active');
		$(tab).show();
		this.blur();

		return false;
	}

};



/*
 * yuga.js 0.3.0 - 優雅なWeb制作のためのJS
 *
 * Copyright (c) 2007 Kyosuke Nakamura (kyosuke.jp)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Since:     2006-10-30
 * Modified:  2007-06-18
 *
 * jQuery 1.1.2
 * ThickBox 3
 * Interface 1.2 (Effects scroll)
 */

/* yuga.js内で使っているfunction群 */
var yuga = {
	// imageのプリローダー
	preloader: {
		loadedImages: [],
		load: function (url){
			var img = this.loadedImages;
			var l = img.length;
			img[l] = new Image();
			img[l].src = url;
		}
	},
	// URIを解析したオブジェクトを返すfunction
	URI: function(s){
		this.originalPath = s;

		//絶対パスを取得
		this.getAbsolutePath = function(path){
			var img = new Image();
			img.src = path;
			path = img.src;
			img.src = '#';
			return path;
		};

		this.absolutePath = this.getAbsolutePath(s);

		//同じ文書にリンクしているかどうか
		this.isSelfLink = (this.absolutePath == location.href);

		//絶対パスを分解
		var a = this.absolutePath.split('://');
		this.schema = a[0];
		var d = a[1].split('/');
		this.host = d.shift();
		var f = d.pop();
		this.dirs = d;
		this.file = f.split('?')[0].split('#')[0];
		var fn = this.file.split('.');
		this.fileExtension = (fn.length == 1) ? '' : fn.pop();
		this.fileName = fn.join('.');
		var fq = f.split('?');
		this.query = (fq[1]) ? fq[1].split('#')[0] : '';
		var ff = f.split('#');
		this.fragment = (ff[1]) ? ff[1].split('?')[0] : '';
	}
};

$(function(){

    // 画像１
    $("#bknImage1").click(function(){
    	var src = $('#bknImage1').attr('src').replace(/_[0-9]+_[0-9]+_[0-9]+\.(.*)$/, "_600_450_3.$1");
	    $('#bknImage0').attr('src', src);
    });
     
    // 画像２
    $("#bknImage2").click(function(){
    	var src = $('#bknImage2').attr('src').replace(/_[0-9]+_[0-9]+_[0-9]+\.(.*)$/, "_600_450_3.$1");
	    $('#bknImage0').attr('src', src);
    });
    
    // 画像３
    $("#bknImage3").click(function(){
    	var src = $('#bknImage3').attr('src').replace(/_[0-9]+_[0-9]+_[0-9]+\.(.*)$/, "_600_450_3.$1");
	    $('#bknImage0').attr('src', src);
    });
    
    // 画像４
    $("#bknImage4").click(function(){
    	var src = $('#bknImage4').attr('src').replace(/_[0-9]+_[0-9]+_[0-9]+\.(.*)$/, "_600_450_3.$1");
	    $('#bknImage0').attr('src', src);
    });
    
    // 画像５
    $("#bknImage5").click(function(){
    	var src = $('#bknImage5').attr('src').replace(/_[0-9]+_[0-9]+_[0-9]+\.(.*)$/, "_600_450_3.$1");
	    $('#bknImage0').attr('src', src);
    });
    
    // 画像６
    $("#bknImage6").click(function(){
    	var src = $('#bknImage6').attr('src').replace(/_[0-9]+_[0-9]+_[0-9]+\.(.*)$/, "_600_450_3.$1");
	    $('#bknImage0').attr('src', src);
    });
    
    // 画像７
    $("#bknImage7").click(function(){
    	var src = $('#bknImage7').attr('src').replace(/_[0-9]+_[0-9]+_[0-9]+\.(.*)$/, "_600_450_3.$1");
	    $('#bknImage0').attr('src', src);
    });
    
    // 画像８
    $("#bknImage8").click(function(){
    	var src = $('#bknImage8').attr('src').replace(/_[0-9]+_[0-9]+_[0-9]+\.(.*)$/, "_600_450_3.$1");
	    $('#bknImage0').attr('src', src);
    });
    
    // 画像９
    $("#bknImage9").click(function(){
    	var src = $('#bknImage9').attr('src').replace(/_[0-9]+_[0-9]+_[0-9]+\.(.*)$/, "_600_450_3.$1");
	    $('#bknImage0').attr('src', src);
    });

	//class="imgbt"でロールオーバーを設定（src属性を_over付きのものに差し替える）
	$('.bt input, .bt img, img.bt').each(function(){
		this.originalSrc = $(this).attr('src');
		this.rolloverSrc = this.originalSrc.replace(/(\.gif|\.jpg|\.png)/, "_on$1");
		yuga.preloader.load(this.rolloverSrc);
	}).hover(function(){
		$(this).attr('src',this.rolloverSrc);
	},function(){
		$(this).attr('src',this.originalSrc);
	});



});



/*--------------------------------------------------------------------------*
 *
 *  heightLine JavaScript Library beta4
 *
 *  MIT-style license.
 *
 *  2007 Kazuma Nishihata
 *  http://www.webcreativepark.net
 *
 *--------------------------------------------------------------------------*/
new function(){

	function heightLine(){

		this.className="height";
		this.parentClassName="heightParent"
		reg = new RegExp(this.className+"-([a-zA-Z0-9-_]+)", "i");
		objCN =new Array();
		var objAll = document.getElementsByTagName ? document.getElementsByTagName("*") : document.all;
		for(var i = 0; i < objAll.length; i++) {
			var eltClass = objAll[i].className.split(/\s+/);
			for(var j = 0; j < eltClass.length; j++) {
				if(eltClass[j] == this.className) {
					if(!objCN["main CN"]) objCN["main CN"] = new Array();
					objCN["main CN"].push(objAll[i]);
					break;
				}else if(eltClass[j] == this.parentClassName){
					if(!objCN["parent CN"]) objCN["parent CN"] = new Array();
					objCN["parent CN"].push(objAll[i]);
					break;
				}else if(eltClass[j].match(reg)){
					var OCN = eltClass[j].match(reg)
					if(!objCN[OCN]) objCN[OCN]=new Array();
					objCN[OCN].push(objAll[i]);
					break;
				}
			}
		}

		//check font size
		var e = document.createElement("div");
		var s = document.createTextNode("S");
		e.appendChild(s);
		e.style.visibility="hidden"
		e.style.position="absolute"
		e.style.top="0"
		document.body.appendChild(e);
		var defHeight = e.offsetHeight;

		changeBoxSize = function(){
			for(var key in objCN){
				if (objCN.hasOwnProperty(key)) {
					//parent type
					if(key == "parent CN"){
						for(var i=0 ; i<objCN[key].length ; i++){
							var max_height=0;
							var CCN = objCN[key][i].childNodes;
							for(var j=0 ; j<CCN.length ; j++){
								if(CCN[j] && CCN[j].nodeType == 1){
									CCN[j].style.height="auto";
									max_height = max_height>CCN[j].offsetHeight?max_height:CCN[j].offsetHeight;
								}
							}
							for(var j=0 ; j<CCN.length ; j++){
								if(CCN[j].style){
									var stylea = CCN[j].currentStyle || document.defaultView.getComputedStyle(CCN[j], '');
									var newheight = max_height;
									if(stylea.paddingTop)newheight -= stylea.paddingTop.replace("px","");
									if(stylea.paddingBottom)newheight -= stylea.paddingBottom.replace("px","");
									if(stylea.borderTopWidth && stylea.borderTopWidth != "medium")newheight-= stylea.borderTopWidth.replace("px","");
									if(stylea.borderBottomWidth && stylea.borderBottomWidth != "medium")newheight-= stylea.borderBottomWidth.replace("px","");
									CCN[j].style.height =newheight+"px";
								}
							}
						}
					}else{
						var max_height=0;
						for(var i=0 ; i<objCN[key].length ; i++){
							objCN[key][i].style.height="auto";
							max_height = max_height>objCN[key][i].offsetHeight?max_height:objCN[key][i].offsetHeight;
						}
						for(var i=0 ; i<objCN[key].length ; i++){
							if(objCN[key][i].style){
								var stylea = objCN[key][i].currentStyle || document.defaultView.getComputedStyle(objCN[key][i], '');
									var newheight = max_height;
									if(stylea.paddingTop)newheight-= stylea.paddingTop.replace("px","");
									if(stylea.paddingBottom)newheight-= stylea.paddingBottom.replace("px","");
									if(stylea.borderTopWidth && stylea.borderTopWidth != "medium")newheight-= stylea.borderTopWidth.replace("px","")
									if(stylea.borderBottomWidth && stylea.borderBottomWidth != "medium")newheight-= stylea.borderBottomWidth.replace("px","");
									objCN[key][i].style.height =newheight+"px";
							}
						}
					}
				}
			}
		}

		checkBoxSize = function(){
			if(defHeight != e.offsetHeight){
				changeBoxSize();
				defHeight= e.offsetHeight;
			}
		}
		changeBoxSize();
		setInterval(checkBoxSize,1000)
		window.onresize=changeBoxSize;
	}

	function addEvent(elm,listener,fn){
		try{
			elm.addEventListener(listener,fn,false);
		}catch(e){
			elm.attachEvent("on"+listener,fn);
		}
	}
	addEvent(window,"load",heightLine);
}