//document ready method 
$(function(){
      // STORE JQUERY

   $(".menu").click(
    function(){
      $(".menu").fadeOut(0);
      $("#normal-live").fadeOut(0);
      $("#normal111").fadeOut(0);
      $(".purchase-tickets").fadeOut(0);
      $(".exit").fadeIn(0);
      $(".menucontainer").removeClass("hide");
    }
    );

   $(".exit").click(
      function(){
        $(".exit").fadeOut(0);        
        $(".menu").fadeIn(0);
        $("#normal-live").fadeIn(0);
        $("#normal111").fadeIn(0);
        $(".purchase-tickets").fadeIn(0);
        //$(".menucontainer").fadeOut(100);
        $(".menucontainer").addClass("hide");

      }
      );

   $(".buybutton").click(function(){
     alert("Thank you for your purchase!");
   });   

   $("#stobutton").click(function(){
     alert("Thank you for your purchase!");
   });

   $(".line-submit").click(function(){
     alert("We look forward to seeing you!");
   });


   $("#ab-butt").click(function(){
     alert("Thank you for subscribing!");
   });

   $(".nine-submit").click(function(){
     alert("Have fun at 11 1!");
   });



});