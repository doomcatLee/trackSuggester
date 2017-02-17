
$(function(){
  //global variables
  var name = "";
  //Attaching hover function to all buttons
  $("button").hover(function(){
    $("button").effect("shake","slow");
  });
  //user inputs name submit
  $("form#name").submit(function(){
    event.preventDefault();
    name = $("input#name").val();
    $(".main").hide();
    $(".survey").fadeIn(1000);
  });//End of submit name function
  //user inputs survey submit
  $("form#survey").submit(function(){
    event.preventDefault();
    //q's STAND FOR QUESTION
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question3]:checked").val();
    var q4 = $("input:radio[name=question4]:checked").val();
    var q5 = $("input:radio[name=question5]:checked").val();
    var q6 = $("input:radio[name=question6]:checked").val();
    //console.log(q1,q2,q3,q4,q5,q6);

    //Nasty nested if statements will be here
    //q=question, a=answer; q1a3 -> question1 answer 3
    if (q1 === "q1a1" && (q2 === "q2a3") && (q3 === "q3a2" || "q3a3") && (q4 === "q4a2" || "q4a3") && (q5 === "q5a1" || "q5a3")){
      $(".survey").hide("explode");
      $("#resultBox h1, #ruby").fadeIn(1000);
      $("span#name").text(name);
    }else if (q1 === "q1a2"){
      $(".survey").hide("explode");
      $("#resultBox h1, #java").fadeIn(1000);
      $("span#name").text(name);
    }else if(q1 === "q1a1" && (q2 === "q2a1") && q3 === "q3a1" && (q4 === "q4a1" || "q4a3" || "q4a2") && (q5 === "q5a1")){
      $(".survey").hide("explode");
      $("#resultBox h1, #php").fadeIn(1000);
      $("span#name").text(name);
    }else if (q1 === "q1a3"){
      $(".survey").hide("explode");
      $("#resultBox h1, #cs").fadeIn(1000);
      $("span#name").text(name);
    }else{
      $(".survey").hide("explode");
      $("#resultBox h1, #css").fadeIn(1000);
      // $("#resultBox h1, #css").fadeIn(1000);
      $("span#name").text(name);
    }//End of if statments
  });//End of survey submit function
});//End of jQuery doc ready
