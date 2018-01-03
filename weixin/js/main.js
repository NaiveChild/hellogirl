var video = document.getElementById('Bvideo');
var audio = document.getElementById('audio');
var can = document.getElementById('canvas');
var ctx = can.getContext('2d');

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; 
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 

window.onresize = function(){
	setTimeout(function(){
		fitScreen();
	},100);
	
}

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

function fitScreen(){
	var preratio = 540/878 ;
	var nowratio = innerWidth/innerHeight;

	if(nowratio.toFixed(2)>preratio.toFixed(2)){
			
			can.width = innerHeight*preratio*2;
			can.height = innerHeight*2;
			$('.video').css('height',innerHeight+'px').css('width',innerHeight*preratio+'px').css('top','0').css('margin-top','0').css('left','50%').css('margin-left',-(innerHeight*preratio)/2+'px');
			$('#canvas').css('top','0').css('margin-top','0').css('left','50%').css('margin-left',-(innerHeight*preratio*2)/2+'px').css('transform-origin','50% 0%');
			$('.last-bg').css('height',innerHeight+'px').css('width',innerHeight*preratio+'px').css('top','0').css('margin-top','0').css('left','50%').css('margin-left',-(innerHeight*preratio)/2+'px');
			$('.Q1-page').css('width',innerHeight*preratio+'px').css('height',innerHeight+'px').css('top','0').css('margin-top','0').css('left','50%').css('margin-left',-(innerHeight*preratio)/2+'px');
		}else{
			
			$('.video').css('width',innerWidth+'px').css('height',(innerWidth/preratio)+'px').css('left','0').css('margin-left','0').css('top','50%').css('margin-top',-(innerWidth/preratio)/2+'px');
			can.width = innerWidth*2;
			can.height = (innerWidth/preratio)*2;
			$('#canvas').css('left','0').css('left','0').css('margin-left','0').css('top','50%').css('margin-top',-((innerWidth/preratio)*2)/2+'px').css('transform-origin','0% 50%');
			$('.last-bg').css('width',innerWidth+'px').css('height',(innerWidth/preratio)+'px').css('left','0').css('margin-left','0').css('top','50%').css('margin-top',-(innerWidth/preratio)/2+'px');
			$('.Q1-page').css('width',innerWidth+'px').css('height',innerWidth/preratio+'px').css('left','0').css('margin-left','0').css('top','50%').css('margin-top',-(innerWidth/preratio)/2+'px');
			$('.white-1').css('width',innerWidth+'px').css('top',((innerHeight-(innerWidth/preratio))/2)+'px');
			$('.white-2').css('width',innerWidth+'px').css('bottom',((innerHeight-(innerWidth/preratio))/2)+'px');
		}
}

fitScreen();

var isCanplay = false;
document.addEventListener('WeixinJSBridgeReady',function(){
	isCanplay = true;
	video.load();
	audio.load();
	audio.play();
});

video.addEventListener('x5videoenterfullscreen',function(){	
	setTimeout(function(){
		fitScreen();
	},100);
	
});

var vkey1 = false,vkey2 = false,vkey3 = false,vkey4 = false,vkey5 = false;
var ckey1 = false,ckey2 = false,ckey3 = false,ckey4 = false;
var Vtimer = setInterval(function(){
	var vtime = video.currentTime;
	if(vtime>=5&&!ckey1){
		$('.Q1-page').addClass('topindex');
		ckey1 = true;
	}else if(vtime>=6&&!vkey1){
		video.pause();
		$('.last-page').removeClass('hide');
		$('.video').removeClass('topindex');
		$('#canvas').addClass('topindex');
		imgturn(imglist1);
		MtaH5.clickStat("05");
		vkey1 = true;
	}else if(vtime>=11&&!ckey2){
		$('.Q1-page').addClass('topindex');
		ckey2 = true;
	}else if(vtime>=parseFloat(12+11/24)&&!vkey2){
		video.pause();
		$('.video').removeClass('topindex');
		$('#canvas').addClass('topindex');
		imgturn(imglist2);
		MtaH5.clickStat("06");
		vkey2 = true;
	}else if(vtime>=17&&!ckey3){
		$('.Q1-page').addClass('topindex');
		ckey3 = true;
	}else if(vtime>=parseFloat(19+7/24)&&!vkey3){
		video.pause();
		$('.video').removeClass('topindex');
		$('#canvas').addClass('topindex');
		imgturn(imglist3);
		MtaH5.clickStat("07");
		vkey3 = true;
	}else if(vtime>=22&&!ckey4){
		$('.Q1-page').addClass('topindex');
		ckey4 = true;
	}else if(vtime>=26&&!vkey4){
		video.pause();
		$('.video').removeClass('topindex');
		$('#canvas').addClass('topindex');
		imgturn(imglist4);
		MtaH5.clickStat("08");
		vkey4 = true;
	}else if(vtime>=parseFloat(26+24/24)&&!vkey5){
		audio.pause();
		vkey5 = true;
	}else if(video.ended){
		if(isAndroid){
			$('.video').addClass('hide');
			$('.last-page').addClass('topindex');
		}else{
			$('.video').removeClass('topindex');
			$('.last-page').addClass('topindex');
		}
		clearInterval(Vtimer);
	}
},10);
	
var imglist1 = [];
var imglist2 = [];
var imglist3 = [];
var imglist4 = [];

function initImageList(){
	for(var i=0;i<23;i++){
		var img = new Image();
		img.src = 'img/Q1/'+i+'.jpg';
		imglist1.push(img);
	}
	for(var i=0;i<23;i++){
		var img = new Image();
		img.src = 'img/Q2/'+i+'.jpg';
		imglist2.push(img);
	}
	for(var i=0;i<23;i++){
		var img = new Image();
		img.src = 'img/Q3/'+i+'.jpg';
		imglist3.push(img);
	}
	for(var i=0;i<23;i++){
		var img = new Image();
		img.src = 'img/Q4/'+i+'.jpg';
		imglist4.push(img);
	}

}

var aaa = false;
var iscanclick = true;
var lastTime = (new Date()).getTime();

function imgturn(imgdata){

	var imglist = imgdata;
	var imgK = 0;

	var timer = function(){
		var nowTime = (new Date()).getTime();
		if((nowTime - lastTime) <= 1000/24){
			imgK--;
		}else{
			lastTime = nowTime;	
		}
		
		if(imgK>22&&aaa){
			$('.video').addClass('topindex');
			$('#canvas').removeClass('topindex');
			setTimeout(function(){
				$('.Q1-page').removeClass('topindex');
				$('.submit-img').removeClass('submit');
				iscanclick = true;
			},200);
			video.play();
			aaa = false;
			return;
		}
		if(imgK>22)imgK=0;
		ctx.drawImage(imglist[imgK],0,0,540,878,0,0,can.width,can.height);
		
		imgK++;	
		requestAnimationFrame(timer);
	}
	timer();
}

$('.btn-enter').click(function(){

	MtaH5.clickStat("04");
	$('.loading-page').removeClass('topindex').css('opacity','0');
	$('.video').addClass('topindex');
	for(var i=0;i<100;i++){
		console.log(111);
	}
	video.play();
});

$('.answer-wrap').click(function(){

	if(!iscanclick)return;
	$(this).children(".submit-img").addClass('submit');
	aaa = true;
	iscanclick = false;
});


$('.btn-jump').click(function(){

	MtaH5.clickStat("03");
	window.location.href = 'https://v.qq.com/x/page/e0505xlno0j.html';
});

$('.btn-share').click(function(){

	MtaH5.clickStat("09");
	$('.last-page').removeClass('topindex');
	$('.shade-page').removeClass('hide').addClass('topindex');
});

$('.shade-page').click(function(){

	$('.shade-page').addClass('hide').removeClass('topindex');
	$('.last-page').addClass('topindex');
});