var y0=window.screen.availHeight;
var x0=window.screen.availWidth;

$.fn.resizeText0 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText0.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText0.interval)
            clearTimeout($.resizeText0.interval)

        $.resizeText0.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText0();
	    }, 300);
    });
}

$.resizeText0 = {
    increaseSize: function (increment, start, newElem, width, height) {
        var fontSize = start;
        
        while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
            fontSize += increment;
            newElem.css("font-size", fontSize + "em");
        }
        
        if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
            fontSize -= increment;
            newElem.css("font-size", fontSize + "em");
            if (increment > 0.1) {
                $.resizeText0.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};


window.onload = function (){
    var d=document.getElementById("lista").children;
	var e=document.getElementsByClassName("textc");
    var m=document.getElementsByClassName("link");
    for(var i=0;i<=m.length-1;i++)
        {
            m[1].style.color='#16193B';
        }
    for(var i=0;i<=e.length-1;i++)
	{	
		e[i].innerHTML=tex[i][x];
	}
	
	for(var i=0;i<=d.length-1;i++)
	{
		d[i].style.fontSize=0.05*y0+"px";
        $(d[i]).hover(function(){
            for(var i=0;i<=d.length-1;i++)
                {
                    m[i].style.backgroundColor='#16193B';
                    m[i].style.color='#9DDFF7';
                    d[i].style.backgroundColor='#16193B';
                    d[i].style.color='#9DDFF7';
                }
            this.style.backgroundColor='#9DDFF7';
            this.style.color='#16193B';
            m[$("li").index(this)].style.backgroundColor='#9DDFF7';
            m[$("li").index(this)].style.color='#16193B';

        },function(){
            for(var i=0;i<=d.length-1;i++)
                {
                    m[i].style.backgroundColor='#16193B';
                    m[i].style.color='#9DDFF7';
                    d[i].style.backgroundColor='#16193B';
                    d[i].style.color='#9DDFF7';
                }
            d[1].style.backgroundColor='#9DDFF7';
            d[1].style.color='#16193B';
            m[1].style.backgroundColor='#9DDFF7';
            m[1].style.color='#16193B';
            
        })
	}
    document.getElementById("intro").style.marginTop=0.25*y0+'px';
    document.getElementById("intro").style.width=0.6*x0+'px';
    document.getElementById("intro").style.height=0.5*y0+'px';
    document.getElementById("intro").style.left=-0.6*x0+'px';
    
    setTimeout(function(){
        document.getElementById("intro").style.transitionDuration="2s";
        document.getElementById("intro").style.left=0.2*x0+'px';        
               }, 500);
    setTimeout(function(){
        document.getElementById("intro").style.transitionDuration="1s";
        document.getElementById("intro").style.transform="rotateY(360deg)";
    }, 2500);
    setTimeout(function(){
        document.getElementById("intro").style.marginTop=0.05*y0+'px';
        document.getElementById("intro").style.width=0.3*x0+'px';
        document.getElementById("intro").style.height=0.25*y0+'px';
        document.getElementById("intro").style.left=0.35*x0+'px';   document.body.style.backgroundSize="15%,15%"; document.body.style.backgroundImage="url(imagini/optic_left.png),url(imagini/optic_right.png)";
    },4000);
    setTimeout(function(){
        document.body.style.overflowY="scroll";
        document.getElementById("bara1").style.opacity=1;
        document.getElementById("lista").style.opacity=1;
    },5000);
    setTimeout(function(){
        document.getElementById("def_cont").style.opacity=1;
    },5500);
    setTimeout(function(){
        document.getElementById("elem_cont").style.opacity=1;
        document.getElementById("lege1").style.opacity=1;
        document.getElementById("lege2").style.opacity=1;
        document.getElementById("lege3").style.opacity=1;
        document.getElementById("lege4").style.opacity=1;
        document.getElementById("energie_cont").style.opacity=1;
    },6000);
    setTimeout(function(){
        document.getElementById("fotoe_header").style.opacity=1;
        document.getElementById("bara2").style.opacity=1;
        document.getElementById("lm_header").style.opacity=1;
        document.getElementById("bara3").style.opacity=1;
    },7000);
    
    var text=document.getElementsByClassName("text");
    for (var i = 0; i < text.length; i++) {
        text[i].style.marginLeft=0.0075*x0+'px';
        text[i].style.marginRight=0.0075*x0+'px';
    }
    
    document.getElementById("def_cont").style.marginLeft=0.04*x0+'px';
    document.getElementById("def_titlu").style.height=0.1*y0+"px";
    document.getElementById("def_titlu").style.width=0.3*x0+'px';
    document.getElementById("def_titlu").style.marginTop=0.05*y0+'px';
    document.getElementById("def_desc").style.width=0.3*x0+'px';
    document.getElementById("def_desc").style.height=0.3*y0+'px';
    
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    
    document.getElementById("elem_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("elem_cont").style.marginLeft=0.1*x0+"px";
    document.getElementById("aop_text").style.marginTop=0.05*y0+'px';
    document.getElementById("aop_text").style.width=0.5*x0+'px';
    document.getElementById("aop_text").style.height=0.2*y0+'px';
    document.getElementById("aop_img").style.width=0.5*x0+'px';
    document.getElementById("aop_img").style.height=0.35*y0+'px';
    document.getElementById("aop_img").style.marginLeft=0.0075*x0+'px';
    document.getElementById("elem_titlu").style.height=0.1*y0+'px';
    $(".resizeText2").resizeText0();
    $(".resizeText3").resizeText0();
    $(".resizeText4").resizeText0();
    
    document.getElementById("fotoe_header").style.fontSize=0.1*y0+'px';
    document.getElementById("fotoe_header").style.marginTop=0.05*y0+'px';
    
    var cont=document.getElementsByClassName("lege_cont");
    var enunt=document.getElementsByClassName("lege_en");
    var numar=document.getElementsByClassName("lege_numar");
    
    for (var i = 0; i < cont.length; i+= 3) {
        cont[i].style.marginTop=0.08*y0+'px';
        cont[i].style.marginLeft=0.25*x0+'px';
        enunt[i].style.width=0.5*x0+'px';
        enunt[i].style.height=0.3*y0+'px';
        numar[i].style.height=0.075*y0+'px';
    }
    for (var i = 1; i < cont.length-1; i+= 1) {
        cont[i].style.marginTop=0.08*y0+'px';
        cont[i].style.marginLeft=0.1*x0+'px';
        enunt[i].style.width=0.8*x0+'px';
        enunt[i].style.height=0.3*y0+'px';
        numar[i].style.height=0.075*y0+'px';
    }
    enunt[1].style.width=0.4*x0+'px';
    enunt[3].style.height=0.1*y0+'px';
    document.getElementById("lege_img").style.width=0.4*x0+'px';
    document.getElementById("lege_img").style.height=0.274*y0+'px';
    document.getElementById("lege_img").style.marginBottom=0.01*y0+'px';
    document.getElementById("lege_img").style.marginTop=0.05*y0+'px';
    
    $(".resizeText5").resizeText0();
    $(".resizeText6").resizeText0();
    $(".resizeText7").resizeText0();
    $(".resizeText8").resizeText0();
    $(".resizeText9").resizeText0();
    $(".resizeText10").resizeText0();
    $(".resizeText11").resizeText0();
    $(".resizeText12").resizeText0();
    
    document.getElementById("lm_header").style.fontSize=0.1*y0+'px';
    document.getElementById("lm_header").style.marginTop=0.1*y0+'px';
    
    document.getElementById("energie_cont").style.marginTop=0.05*y0+'px';
    document.getElementById("energie_cont").style.marginLeft=0.1*x0+'px';
    document.getElementById("energie_text").style.width=0.8*x0+'px';
    document.getElementById("energie_text").style.height=0.4*y0+'px';
    document.getElementById("energie_img").style.marginLeft=0.1*x0+'px';
    document.getElementById("energie_img").style.width=0.6*x0+'px';
    document.getElementById("energie_img").style.height=0.3*y0+'px';
    document.getElementById("energie_titlu").style.height=0.1*y0+'px';
    
    
    $(".resizeText13").resizeText0();
    $(".resizeText14").resizeText0();
    
}