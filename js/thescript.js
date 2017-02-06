$(document).ready(function(){ 

    open = false; //Boolean indicating if bassecamp is expanded
    pos =0; //number of current locationn quadrant
    
    $("#load-screen").show();
    
    $('body').imagesLoaded( { background: true }, function() {
        $("#load-screen").hide();
    });
    

    
    //Handy handles on a few elements
    vW = $(window).width();
    vH = $(window).height();
    
    tl = $("#TL");
    tr = $("#TR");
    bl = $("#BL");
    br = $("#BR");
    
    basecamp = $("#basecamp");
    portfolio = $("#portfolio");
    whoarewe = $("#whoarewe");
    contact = $("#contact");
    canvas =$(".project");
    
    paraInfo =$("#whoarewe p span");
    
    itmBrand =$("#itm-brand");
    itmDesign =$("#itm-design");
    itmDevelop =$("#itm-develop");
    
    var tmr;
 
    ///Pause carousel from the start
        $('.carousel').carousel({
        pause: true,
        interval: false
    });

    //Expanding basecamp
    br.click(function(){
          
        tl.toggleClass("bigbang-tl basecamp_corner-live");
        tr.toggleClass("bigbang-tr basecamp_corner-live");
        bl.toggleClass("bigbang-bl basecamp_corner-live");
        br.toggleClass("basecamp_corner-live");
        
        
        if (open){
            tl.attr("src", "img/basecamp/TLb.svg");
            tr.attr("src", "img/basecamp/TRb.svg");
            bl.attr("src", "img/basecamp/BLb.svg");
            br.attr("src", "img/basecamp/BR.svg");
            
        } else{
            tl.attr("src", "img/basecamp/TL.svg");
            tr.attr("src", "img/basecamp/TR.svg");
            bl.attr("src", "img/basecamp/BL.svg");
            br.attr("src", "img/basecamp/BRb.svg");
            
        }
         
          open = !open;
       
    });
    
//    Navigation
    tl.click(function(){
       pos=1;
       whoarewe.toggleClass("Q1 Q0");
       basecamp.toggleClass("Q0 Q3");
    });
    
     tr.click(function(){
       pos=2;
       portfolio.toggleClass("Q2 Q0");
       basecamp.toggleClass("Q0 Q4");
    });
    
      bl.click(function(){
       pos=4;
       contact.toggleClass("Q4 Q0");
       basecamp.toggleClass("Q0 Q2");
       $("#contact-art").addClass("zoom");
    });
    
    $("#homeTab").hover(function(){
        $("#homeTab .cube").toggleClass("roll");
    });
    
    $("#homeTab").click(function(){
        goHome();
        console.log("floooppp");
    });
    
    $(".back_btn").click(goHome);
    
    $(".back_wrap").hover(function(){
        switch(pos){
            case 0:
                break;
            case 1:
                $(this).children(".back_btn").toggleClass("back_btn-tl");
                break;
            case 2:
                $(this).children(".back_btn").toggleClass("back_btn-tr");
                break;
            case 4:
                $(this).children(".back_btn").toggleClass("back_btn-bl");
                break;
        }
        
    });
    
         $(".portfolio_itm img").click(function(){
         $(".back_btn").removeClass("back_btn-tr");
         pos=5;
         var brand = $(this).data("brand");
         project = $("#"+brand);    
         portfolio.toggleClass("Q0 Q2R");
         project.toggleClass("Q2L Q0");

        });
    
    $(".mac-wrap div").hover(function(){
    
        $(this).next("h3").toggleClass("visible");
                    
    });
    
    paraInfo.bind('oanimationend animationend webkitAnimationEnd', function() { 
   paraInfo.removeClass("jitter"); 
});
    
    itmDesign.click(function(){
            
        clearTimeout(tmr);
        tmr = setTimeout(resetInfo, 10000);

        $(this).addClass("sel");
        itmDevelop.removeClass("sel");
        itmBrand.removeClass("sel");
       
        paraInfo.text("In design, as in life, it's simplicity that makes time stand still. We stubbornly apply this design philosophy across all platforms from cycling jerseys to digital logos to product packaging.");
        
        paraInfo.addClass("jitter");
        
    });
    
    itmDevelop.click(function(){
        
        clearTimeout(tmr);
        tmr = setTimeout(resetInfo, 10000);
        
         $(this).addClass("sel");
        itmDesign.removeClass("sel");
        itmBrand.removeClass("sel");
       
        paraInfo.text("The world doesn't need another cookie cutter website, trust us. Yosemite Labs develops unique, one-off sites with the mission of contributing to the online creative canvas");
        
        paraInfo.addClass("jitter");
        
    });
    
    itmBrand.click(function(){
        
        clearTimeout(tmr);
        tmr = setTimeout(resetInfo, 10000);
        
         $(this).addClass("sel");
        itmDevelop.removeClass("sel");
        itmDesign.removeClass("sel");
        
       
        paraInfo.text("There is nothing worse than a sharp image of a fuzzy concept.- Ansel Adams We help build brands from the ground up, formulating a clear brand-identity that is inline with your vision.");
        
        paraInfo.addClass("jitter");
        
    });
    
    function goHome(){
        
         if(pos==5){
         //go back to portfolio page   
         portfolio.toggleClass("Q2R Q0");
         project.toggleClass("Q0 Q2L");
         pos=2;
        }
        //go home
        else{ 
         //Orientatate back btn to neutral
                $(".back_btn").removeClass("back_btn-tl back_btn-tr back_btn-bl");

                //Remove zoom class just in case
                $("#contact-art").removeClass("zoom");
        
                $(".Q0").removeClass("Q0").addClass("Q"+pos);
                $("#basecamp").removeClass("Q2 Q3 Q4").addClass("Q0");
                pos =0;
        }  
       
        
                
       
    }
    
    function resetInfo(){
        itmBrand.removeClass("sel");
        itmDevelop.removeClass("sel");
        itmDesign.removeClass("sel");
        
        paraInfo.text("Yosemite Labs is a team of big thinkers- allergic to compromise, fugitives on the run from mediocrity. We specialise in the graphics, development and design needed to give your brand a digital hearbeat.");
    }
    
});

