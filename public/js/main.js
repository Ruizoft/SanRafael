$( document ).ready(function() {
    spinner.stop();
    $("#loader").hide();
    var url = window.location.href ;
    if(url.search("hospedaje") != -1){
        $( "li" ).removeClass( "active" );  
         $(".hospedajeRow").height($( window ).height());
        $( "#hospedaje" ).closest( "li" ).addClass("active");  
       $( ".right" ).load( "actividades.html" );
       $( ".left" ).load( "principal.html" ); 
    }
    if(url.search("actividades") != -1){
        $( "li" ).removeClass( "active" );  
        $( "#actividades" ).closest( "li" ).addClass("active");
       $( ".left" ).load( "hospedaje.html" );
       $( ".right" ).load( "principal.html" ); 
    }
    if(url.search("hospedaje") == -1 && url.search("actividades") == -1 ){
        if($( window ).width() < 601){
     $(".jumbotron").height($( window ).height()/ 2);
     $(".main-cover").height($( window ).height()/ 2);
     $(".main-shade").height($( window ).height()/ 2);
}else {$(".jumbotron").height($( window ).height()- 95);$(".main-cover").height($( window ).height());$(".main-shade").height($( window ).height());
        

     $("#logo").toggleClass("moveLogo");   
}
    $( ".rightDiv" ).addClass( "animatedRight" );
    $( ".leftDiv" ).addClass( "animatedLeft" );
	$( ".right" ).load( "hospedaje.html" );
	$( ".left" ).load( "actividades.html" );
     
    }

    $( "#hospedaje" ).click(function(event) {
        event.preventDefault();
        $("#logo").removeClass("moveLogo"); 
        $(".hospedajeRow").height($( window ).height());
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
        if($( window ).width() < 601){
     $(".jumbotron").height($( window ).height()/ 2);
}else {$(".jumbotron").height($( window ).height()- 95);$(".main-cover").height($( window ).height());$(".main-shade").height($( window ).height());}
        $( ".rightDiv" ).addClass( "animatedRight" );
        $( ".leftDiv" ).addClass( "animatedLeft" );
        event.preventDefault();
        $( "li" ).removeClass( "active" );  
        $( "#principal" ).closest( "li" ).addClass("active");
        window.history.pushState('obj', 'newtitle', '/');
         $("#logo").toggleClass("moveLogo"); 
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
        $( "#actividades" ).click(function(event) {
            event.preventDefault();
            if($( window ).width() < 601){
     $(".jumbotron").height($( window ).height());
}else {$(".jumbotron").height($( window ).height()- 96);}
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

});


function loadModal(x){
    console.log(1);
    $("html").addClass("noYScroll");
    switch($(x).data("tipo") ){
        case "camping":
        $( "#modalContent" ).load( "camping.html" );
        //$( ".modal-title" ).text( "Zona de camping" );
        break;
        case "contacto":
        console.log(2);
        $( "#modalContent" ).load( "contacto.html" );
        //$( ".modal-title" ).text( "Contacto" );
        /*setTimeout(function(){
             initialize();
            }, 1800);*/
        
        break;
        case "close":
        $("html").removeClass("noYScroll");
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

if($( window ).width() < 701){
     $("#logo").width(80);
}

if($( window ).width() < 901){
     $(".parkSVG").hide();
}

$( window ).resize(function() {
 $(".jumbotron").height($( window ).height()- 95);
 $(".main-cover").height($( window ).height());
 $(".main-shade").height($( window ).height());
 $(".hospedajeRow").height($( window ).height());

});