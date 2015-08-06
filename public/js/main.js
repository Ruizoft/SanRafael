var url = window.location.href ;
$( document ).ready(function() {
   
    if(url.search("hospedaje") != -1){
        $( "li" ).removeClass( "active" );  
         $(".hospedajeRow").height($( window ).height());
        $( "#hospedaje" ).closest( "li" ).addClass("active");  
        
    }
    if(url.search("actividades") != -1){
         if($( window ).width() < 701){
         }else{
            $(".jumbotron").height($( window ).height());
            $("ul.navbar-right > li").addClass("colorNav");
         }
        $( "li" ).removeClass( "active" );  
        $( "#actividades" ).closest( "li" ).addClass("active");
        
    }
    if(url.search("hospedaje") == -1 && url.search("actividades") == -1 ){
        if($( window ).width() < 701){
            if($( window ).height() > $( window ).width()){
     $(".jumbotron").height($( window ).height()/ 2);
     $(".main-cover").height($( window ).height()/ 2);
     $(".main-shade").height($( window ).height()/ 2);
 }else{$(".jumbotron").height($( window ).height()-20);$(".main-cover").height($( window ).height()-20);$(".main-shade").height($( window ).height()-20);}
}else {$(".jumbotron").height($( window ).height());$(".main-cover").height($( window ).height());$(".main-shade").height($( window ).height());
        

     $("#logo").toggleClass("moveLogo");   
}
    $( ".rightDiv" ).addClass( "animatedRight" );
    $( ".leftDiv" ).addClass( "animatedLeft" );
	
     
    }

    $( ".hospedajee" ).click(function(event) {
        event.preventDefault();
        $("ul.navbar-right > li").removeClass("colorNav");
        $("#logo").removeClass("moveLogo"); 
        $("div").removeClass("fadeInLeft");
        if($( window ).width() > 600){
        $(".hospedajeRow").height($( window ).height());
    }
        $( ".rightDiv" ).removeClass( "animatedRight" );
        $( ".leftDiv" ).removeClass( "animatedLeft" );
        $( "li" ).removeClass( "active" );  
        $( "#hospedaje" ).closest( "li" ).addClass("active");
         window.history.pushState('obj', 'newtitle', '/hospedaje');
    	if($( ".hospedaje" ).hasClass( "right" ) == true){
         $( ".main" ).addClass( "moveLeft" );
         $( ".right" ).addClass( "moveLeft" );

          setTimeout(function(){

         	$( ".principal" ).addClass( "left" ).removeClass("main");
         	$( ".hospedaje" ).addClass( "main" ).removeClass("right");
         	$( ".actividades" ).addClass( "right" ).removeClass("left");
            $( "div" ).removeClass( "moveLeft" );  
            }, 1101);
         } else if ($( ".hospedaje" ).hasClass( "left" ) == true) {
         	$( ".main" ).addClass( "moveRight" );
            $( ".left" ).addClass( "moveRight" );
         setTimeout(function(){
         	$( ".principal" ).addClass( "left" ).removeClass("right");
         	$( ".hospedaje" ).addClass( "main" ).removeClass("left");
         	$( ".actividades" ).addClass( "right" ).removeClass("main");
            $( "div" ).removeClass( "moveRight" );  
            }, 1101);
         }
        
    });
    $( "#principal" ).click(function(event) {

        if($( window ).width() < 701){
     $(".jumbotron").height($( window ).height()/ 2);
}else { $("#logo").toggleClass("moveLogo");$(".jumbotron").height($( window ).height());$(".main-cover").height($( window ).height());$(".main-shade").height($( window ).height());}
        $( ".rightDiv" ).addClass( "animatedRight" );
        $( ".leftDiv" ).addClass( "animatedLeft" );
         $("ul.navbar-right > li").removeClass("colorNav");
        event.preventDefault();
         
        $( "li" ).removeClass( "active" );  
        $( "#principal" ).closest( "li" ).addClass("active");
        window.history.pushState('obj', 'newtitle', '/'); 
    	if($( ".principal" ).hasClass( "right" ) == true){
         $( ".main" ).addClass( "moveLeft" );
         $( ".right" ).addClass( "moveLeft" );
         setTimeout(function(){
         	$( ".principal" ).addClass( "main" ).removeClass("right");
         	$( ".hospedaje" ).addClass( "right" ).removeClass("left");
         	$( ".actividades" ).addClass( "left" ).removeClass("main");
            $( "div" ).removeClass( "moveLeft" );  
            }, 1101);
     } else if ($( ".principal" ).hasClass( "left" ) == true){

         $( ".main" ).addClass( "moveRight" );
            $( ".left" ).addClass( "moveRight" );
         setTimeout(function(){
            $( ".principal" ).addClass( "main" ).removeClass("left");
            $( ".hospedaje" ).addClass( "right" ).removeClass("main");
            $( ".actividades" ).addClass( "left" ).removeClass("right");
            $( "div" ).removeClass( "moveRight" ); 
             
            }, 1101);
     }
    });
        $( ".actividadess" ).click(function(event) {
            event.preventDefault();
            if($( window ).width() < 701){
}else {$(".jumbotron").height($( window ).height()); $("ul.navbar-right > li").addClass("colorNav");}
         $("#logo").removeClass("moveLogo");
         $( ".rightDiv" ).removeClass( "animatedRight" );
         $( ".leftDiv" ).removeClass( "animatedLeft" );
         $( "li" ).removeClass( "active" );  
         $( "#actividades" ).closest( "li" ).addClass("active");
         window.history.pushState('obj', 'newtitle', '/actividades');
         if($( ".actividades" ).hasClass( "right" ) == true){
         $( ".main" ).addClass( "moveLeft" );
         $( ".right" ).addClass( "moveLeft" );

          setTimeout(function(){

            $( ".principal" ).addClass( "right" ).removeClass("left");
            $( ".hospedaje" ).addClass( "left" ).removeClass("main");
            $( ".actividades" ).addClass( "main" ).removeClass("right");
            $( "div" ).removeClass( "moveLeft" );  
            }, 1101);
         } else if ($( ".actividades" ).hasClass( "left" ) == true){
            $( ".main" ).addClass( "moveRight" );
            $( ".left" ).addClass( "moveRight" );
         setTimeout(function(){
            $( ".principal" ).addClass( "right" ).removeClass("main");
            $( ".hospedaje" ).addClass( "left" ).removeClass("right");
            $( ".actividades" ).addClass( "main" ).removeClass("left");
            $( "div" ).removeClass( "moveRight" );  
            }, 1101);

         }
    });
        $(".actiImg").width($(window).width() * 0.2306);
        if($(window).height() > $(window).width()){
        $(".actiImg").width($(window).height() * 0.2406);
        }
    

$(window).scroll(function() {
        $('.animatedLeft').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+450) {
                $(this).addClass("fadeInLeft");
            }
            else{$(this).removeClass("fadeInLeft");}
        });
        $('.animatedRight').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+450) {
                $(this).addClass("fadeInRight");
            }
            else{$(this).removeClass("fadeInRight");}
        });

    });
    
    if (isMobile() == true) {
        $(".clickLoad").attr("ontouchstart","loadModal(this)");
        $(".clickLoad").attr("onclick","");
    }

   

});


function loadModal(x){
    $("html").addClass("noYScroll");
    switch($(x).data("tipo") ){
        case "camping":
        $( "#modalContent" ).load( "camping.html", function() {
        } );
        $("#mainModal").modal("show");
        break;
        case "cabañas":
        $( "#modalContent" ).load( "cabañas.html", function() {
        });
        $("#mainModal").modal("show");
        break;
        case "cabalgata":
        $( "#modalContent" ).load( "cabalgata.html", function() {
        });
         $("#mainModal").modal("show");
        break;
        case "pesca":
        $( "#modalContent" ).load( "pesca.html", function() {
        } );
        $("#mainModal").modal("show");
        break;
        case "restaurante":
        $( "#modalContent" ).load( "restaurante.html", function() {
        });
        $("#mainModal").modal("show");
        break;
         case "caminata":
        $( "#modalContent" ).load( "caminatas.html", function() {
        });
        $("#mainModal").modal("show");
        break;
        case "ciclismo":
        $( "#modalContent" ).load( "ciclismo.html", function() {
        });
        $("#mainModal").modal("show");
        break;
        case "contacto":
        $( "#modalContent" ).load( "contacto.html", function() {
        });
        $("#mainModal").modal("show");
        break;
        case "close":
        console.log("hmm");
        $( "#modalContent" ).empty();
        $("html").removeClass("noYScroll");
        $('#mainModal').modal('hide');
        break;
    }
}
function imgMove(x){
    switch($(x).data("move") ){
        case "next":
        $( "div" ).find( ".imgMain" ).addClass( "oldMain" ).removeClass("imgMain");
        $( "div" ).find( ".imgRight" ).addClass( "imgMain" ).removeClass("imgRight");
        $( "div" ).find( ".imgLeft" ).addClass( "imgRight" ).removeClass("imgLeft");
        $( "div" ).find( ".oldMain" ).addClass( "imgLeft" ).removeClass("oldMain");
        break;
        case "previous":
        $( "div" ).find( ".imgMain" ).addClass( "oldMain" ).removeClass("imgMain");
        $( "div" ).find( ".imgLeft" ).addClass( "imgMain" ).removeClass("imgLeft");
        $( "div" ).find( ".imgRight" ).addClass( "imgLeft" ).removeClass("imgRight");
        $( "div" ).find( ".oldMain" ).addClass( "imgRight" ).removeClass("oldMain");
        break;
    }
}
function imgMove2(x){
    switch($(x).data("move") ){
        case "next":
        $( ".imgContainer" ).toggleClass('imgMain');
        
        break;
        case "previous":
         $( ".imgContainer" ).toggleClass('imgMain');
        break;
    }
}

 $(".parkSVG").width($( window ).width() * 0.2306);
 $(".parkSVG").height($( window ).height() * 0.2203);

if($( window ).width() < 701){
     $("#logo").width(80);
}

if($( window ).width() < 701){
     $(".parkSVG").hide();
}

 if (isMobile() != true) {

$( window ).resize(function() { 
 $(".jumbotron").height($( window ).height());
 $(".main-cover").height($( window ).height());
 $(".main-shade").height($( window ).height());
 $(".hospedajeRow").height($( window ).height());
  $(".parkSVG").width($( window ).width() * 0.2306);
 $(".parkSVG").height($( window ).height() * 0.2203);

});
}

function isMobile() {
    if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            || navigator.userAgent.match(/Opera Mini/i)
            || navigator.userAgent.match(/IEMobile/i)
            ) {
        return true;
    }
}

$(window).load(function() { 
   spinner.stop();
   $("#loader").hide();
   if(url.search("hospedaje") == -1 && url.search("actividades") == -1 ){
        $( "#feature2" ).attr("src","images/restaurante-sanrafael.jpg");
        $( "#feature3" ).attr("src","images/noche-sanrafael.jpg");
        $( ".right" ).load( "hospedaje.html" );
        $( ".left" ).load( "actividades.html" );
   }
   if(url.search("hospedaje") != -1){
       $( ".right" ).load( "actividades.html" );
       $( ".left" ).load( "principal.html" );
   }
   if(url.search("actividades") != -1){
       $( ".left" ).load( "hospedaje.html" );
       $( ".right" ).load( "principal.html" );
   }
});
