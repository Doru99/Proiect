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
            m[1].style.color='#00261C';
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
                    m[i].style.backgroundColor='#00261C';
                    m[i].style.color='#97ED8A';
                    d[i].style.backgroundColor='#00261C';
                    d[i].style.color='#97ED8A';
                }
            this.style.backgroundColor='#97ED8A';
            this.style.color='#00261C';
            m[$("li").index(this)].style.backgroundColor='#97ED8A';
            m[$("li").index(this)].style.color='#00261C';

        },function(){
            for(var i=0;i<=d.length-1;i++)
                {
                    m[i].style.backgroundColor='#00261C';
                    m[i].style.color='#97ED8A';
                    d[i].style.backgroundColor='#00261C';
                    d[i].style.color='#97ED8A';
                }
            d[1].style.backgroundColor='#97ED8A';
            d[1].style.color='#00261C';
            m[1].style.backgroundColor='#97ED8A';
            m[1].style.color='#00261C';
            
        })
	}
    
    
    document.getElementById("def_titlu").style.height=0.1*y0+'px';
    document.getElementById("def_text").style.height= 0.2*y0+'px';
    document.getElementById("def_text").style.width= 0.5*x0+'px';
    document.getElementById("def_cont").style.marginLeft= 0.15*x0+'px';
    document.getElementById("def_cont").style.marginTop= 0.1*y0+'px';
    document.getElementById("def_cont").style.marginBottom= 0.1*y0+'px';
    document.getElementById("def_formula").style.height= 0.15*y0+'px';
    document.getElementById("def_formula").style.width= 0.1*x0+'px';
    document.getElementById("def_formula").style.marginRight= 0.15*x0+'px';
    document.getElementById("def_formula").style.marginTop= 0.15*y0+'px';
    $(".resizeText0").resizeText0();
    $(".resizeText1").resizeText0();
    
    document.getElementById("prop_header").style.fontSize= 0.1*y0+'px';
    document.getElementById("addf_titlu").style.height= 0.05*y0+'px';
    document.getElementById("addf_text").style.height= 0.2*y0+'px';
    document.getElementById("addf_text").style.width= 0.35*x0+'px';
    document.getElementById("addf_cont").style.marginLeft= 0.1*x0+'px';
    document.getElementById("addf_cont").style.marginRight= 0.1*x0+'px';
    document.getElementById("addf_cont").style.marginTop= 0.1*y0+'px';
    document.getElementById("addd_titlu").style.height= 0.05*y0+'px';
    document.getElementById("addd_text").style.height= 0.2*y0+'px';
    document.getElementById("addd_text").style.width= 0.35*x0+'px';
    document.getElementById("addd_cont").style.marginTop= 0.1*y0+'px';
    $(".resizeText2").resizeText0();
    $(".resizeText3").resizeText0();
    $(".resizeText4").resizeText0();
    $(".resizeText5").resizeText0();
    
    document.getElementById("spec_header").style.marginTop= 0.075*y0+'px';
    document.getElementById("spec_header").style.fontSize= 0.1*y0+'px';
    document.getElementById("lm_formula").style.marginLeft= 0.1*y0+'px';
    document.getElementById("lm_formula").style.marginTop= 0.25*y0+'px';
    document.getElementById("lm_formula").style.height= 0.15*y0+'px';
    document.getElementById("lm_formula").style.width= 0.1*x0+'px';
    document.getElementById("lm_cont").style.marginLeft = 0.1*x0+'px';
    document.getElementById("lm_cont").style.marginTop= 0.1*y0+'px';
    document.getElementById("lm_cont").style.marginBottom= 0.15*y0+'px';
    document.getElementById("lm_text").style.width= 0.6*x0+'px';
    document.getElementById("lm_text").style.height= 0.5*y0+'px';
    document.getElementById("lm_greutate").style.width= 0.1*x0+'px';
    document.getElementById("lm_greutate").style.height= 0.1*y0+'px';
    document.getElementById("lm_frecare").style.width= 0.1*x0+'px';
    document.getElementById("lm_frecare").style.height= 0.1*y0+'px';
    document.getElementById("lm_elastic").style.width= 0.1*x0+'px';
    document.getElementById("lm_elastic").style.height= 0.1*y0+'px';
    $(".resizeText6").resizeText0();
    $(".resizeText7").resizeText0();
    $(".resizeText8").resizeText0();
    $(".resizeText9").resizeText0();
    
    document.getElementById("bara3").style.marginBottom= 0.05*y0+'px';
    document.getElementById("tip_header").style.fontSize= 0.1*y0+'px';
    document.getElementById("cons_cont").style.marginLeft= 0.1*x0+'px';
    document.getElementById("cons_text").style.width= 0.35*x0+'px';
    document.getElementById("cons_text").style.height= 0.25*y0+'px';
    document.getElementById("cons_titlu").style.height= 0.1*y0+'px';
    document.getElementById("dis_cont").style.marginLeft= 0.1*x0+'px';
    document.getElementById("dis_text").style.width= 0.35*x0+'px';
    document.getElementById("dis_text").style.height= 0.25*y0+'px';
    document.getElementById("dis_titlu").style.height= 0.1*y0+'px';
    $(".resizeText10").resizeText0();
    $(".resizeText11").resizeText0();
    $(".resizeText12").resizeText0();
    $(".resizeText13").resizeText0();
    
    document.getElementById("grafic_header").style.marginTop= 0.05*y0+'px';
    document.getElementById("grafic_header").style.fontSize= 0.1*y0+'px';
    document.getElementById("grafic_cont").style.marginTop= 0.1*y0+'px';
    document.getElementById("grafic_cont").style.marginLeft= 0.05*x0+'px';
    document.getElementById("grafic_text").style.width= 0.5*x0+'px';
    document.getElementById("grafic_text").style.height= 0.45*y0+'px';
    document.getElementById("grafic_titlu").style.height= 0.1*y0+'px';
    document.getElementById("grafic_formula").style.height= 0.18*y0+'px';
    document.getElementById("img_cont").style.marginLeft= 0.1*x0+'px';
    document.getElementById("img_cont").style.marginTop= 0.1*x0+'px';
    document.getElementById("img_titlu").style.height= 0.1*y0+'px';
    document.getElementById("img_gr").style.width= 0.3*x0+'px';
    document.getElementById("img_gr").style.height= 0.35*y0+'px';
    $(".resizeText14").resizeText0();
    $(".resizeText15").resizeText0();
    $(".resizeText16").resizeText0();
}

var a=[["url('imagini/ecu2.png')","<red>Lucrul mecanic al greutăţii</red> este egal cu produsul dintre <green>forţa de greutate</green> si diferenţa cu semn schimbat dintre <green>înălţimea iniţială şi cea finală</green>."],["url('imagini/ecu3.png')", "<red>Lucrul mecanic al forţei elastice</red> este egal cu diferenţa semiproduselor dintre <green>constanta de elasticitate</green> şi <green>pătratul coordonatei</green> iniţiale, respectiv finale."],["url('imagini/ecu5.png')", "<red>Lucrul mecanic al forţei de frecare</red> este egal cu produsul dintre <green>forţa de frecare</green> şi diferenţa cu semn schimbat dintre <green>coordonata iniţială şi cea finală</green>"]];
function schimba(x) {
    document.getElementById("lm_text").innerHTML= a[x][1];
    $(".resizeText6").resizeText0();
    document.getElementById("lm_formula").style.backgroundImage= a[x][0];
}