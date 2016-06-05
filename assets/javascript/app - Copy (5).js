 


$(document).ready(function() {


    //   Begin -- Declare Variables  
    var trivia = [];

        //   Begin -- load TriviaFunc processing 
       function triviaFunc(quest, choice_01, choice_02, choice_03, choice_04, ans) {
          this.question = quest;
          this.choices = [choice_01, choice_02, choice_03, choice_04];
          this.answer = ans;
        } //   End TriviaFunc processing 

        trivia.push( new triviaFunc("question 1 - why is the sky blue?",
                                    "choice 1", "choice 2", "choice 3", "choice 4", 
                                    0));
        trivia.push( new triviaFunc("question 2 - why is there air?", 
                                    "h", "i", "j", "k", 
                                    3));

        trivia.push( new triviaFunc("question 3 - Who is the man on the moon?", 
                                    "l", "m", "n", "k", 
                                    3));


    var questionCtr = 0;
    var questionsRight = 0;
    var questionsWrong = 0;
    var questionsUnanswered = 0;

    var ctrTimer = 10;
    var timerId = 0;

    //   End   -- Declare Variables 



    //  Begin - On window load, display start screen
    window.onload = function () {
        startScreen();
        //alert("LOADED!");
        $("#button1").click(function(){
            $("#insertHere").empty();


          $("#insertHere").html("Time Remaining: " + ctrTimer + " seconds." + "<br><br>"); 
           
            
            if(questionCtr <= trivia.length){
                //displayLast();
                displayQuestions(questionCtr);
                start1();
              }
              else
                displayLast();



        });
    }


    

    function displayLast(){
        $("#insertHere").append($("<div></div>").text("All done, here's how you did." ));  
        $("#insertHere").append($("<br>").text("  " ));
        $("#insertHere").append($("<div></div>").text("Correct Answers: "  + questionsRight));
        $("#insertHere").append($("<div></div>").text("Incorrect Answers: " + questionsWrong ));
        $("#insertHere").append($("<div></div>").text("Unanswered Questions: " + questionsUnanswered));
        $("#insertHere").append($("<br>").text("  " ));
        $("#insertHere").append($("<div></div>").text("Start Over?" ));
    }


    function start1(){
      timerId = setInterval(next1, 1000);
     
    }

    function next1(){
      ctrTimer--;
      //alert("ctrTimer=" + ctrTimer);
      
      $("#insertHere").html("Time Remaining: " + ctrTimer + " seconds." + "<br><br>"); 
      displayQuestions(questionCtr);


      console.log("questionCtr" + questionCtr);
      console.log("trivia length" + trivia.length);
      if(questionCtr ==   (trivia.length - 1) && (ctrTimer === 0) ){
          alert("questionCtr > trivia.length");
          clearInterval(timerId);
          $("#insertHere").empty();
          ctrTimer = 10;
          $("#insertHere").html("Time Remaining: " + ctrTimer + " seconds." + "<br><br>"); 
          displayLast();
        }

     if(ctrTimer === 0){
          alert('time\'s up');
          clearInterval(timerId);
          questionsUnanswered++;
          questionCtr++;

          ctrTimer = 10;
          

          ctrTimer = 10;
          $("#insertHere").html("Time Remaining: " + ctrTimer + " seconds." + "<br><br>"); 
          displayQuestions(questionCtr);
          start1();
        }


        console.log('3rd alert');
         $("#choice00").click(function(){
       //alert("choice00h");
        //alert("trivia[questionNum].answer=" + trivia[1].answer);
        if(0 === trivia[1].answer){
          //alert("choice01");
          questionsRight++;
        } else questionsWrong++; 

        $("#choice00").off('click');   //disables click event
        clearInterval(timerId);

        ctrTimer = 10;
          $("#insertHere").html("Time Remaining: " + ctrTimer + " seconds." + "<br><br>"); 
          questionCtr++;
          displayQuestions(questionCtr);
          start1();
       });


      $("#choice01").click(function(){
        if(1 === trivia[1].answer){
         //alert("choice01");
         questionsRight++;
        } else questionsWrong++;
        $("#choice01").off('click');   //disables click event
        clearInterval(timerId);
      });


      $("#choice02").click(function(){
        if(2 === trivia[1].answer){
         //alert("choice02");
         questionsRight++;
        } else questionsWrong++;
        $("#choice02").off('click');   //disables click event
        clearInterval(timerId);
      });


      $("#choice03").click(function(){
        if(3 === trivia[1].answer){
         //alert("choice03");
         questionsRight++;
        } else questionsWrong++;
        $("#choice03").off('click');   //disables click event
        clearInterval(timerId);
      });



    }







    function startTimer(){

       var intervalId =  setInterval(function(){ 
        ctrTimer--;
        //alert("ctrTimer" + ctrTimer);

         $("#insertHere").empty();
      $("#intTimer").text("Time Remaining: " + ctrTimer + " seconds.");  

        if(ctrTimer === 0){
          alert('time\'s up');
          clearInterval(intervalId);
          questionsUnanswered++;
          alert("questionsRight" + questionsRight);
          alert("questionsWrong" + questionsWrong);
          alert("questionsUnanswered" + questionsUnanswered);
        }

     
      }, 1000);


    }


    function startScreen() {
        var div = document.getElementById('insertHere');
        var btn = document.createElement('button');

        var txt = document.createTextNode(String("START"));
           btn.appendChild(txt);

      btn.setAttribute('type', 'button');
      
      btn.setAttribute('id', 'button1' );
      btn.setAttribute('class', 'btn btn-primary btn-lg btn-block');
      div.appendChild(btn);
    };  

    // End - On window load, display start screen

  


    /*   Begin -- displayQuestions processing */
    function displayQuestions(questionNum) {

        $("#insertHere").append($("<div></div>").text(trivia[questionNum].question ));  

        $("#insertHere").append($("<div class='choices' id='choice00'></div>").text(trivia[questionNum].choices[0] )); 
        $("#insertHere").append($("<div class='choices' id='choice01'></div>").text(trivia[questionNum].choices[1] )); 
        $("#insertHere").append($("<div class='choices' id='choice02'></div>").text(trivia[questionNum].choices[2] )); 
        $("#insertHere").append($("<div class='choices' id='choice03'></div>").text(trivia[questionNum].choices[3] )); 

        //  alert(trivia[0].question + trivia[0].choices[trivia[0].answer] );
    };   /*   End displayQuestions processing */


    function updateQR(){
        questionsRight++;
        questionsWrong++;

    }



    /*   game processing    */
    function theGame() {


  
      var div = document.getElementById('insertHere');
      var self = this;
      //var ctrTimer = 10;
     

      $("#insertHere").append($("<div id='intTimer'></div><br><br>").text("Time Remaining: " + ctrTimer + " seconds."));  
      displayQuestions(1);

      var intervalId =  setInterval(function(){ 
        ctrTimer--;
        //alert("ctrTimer" + ctrTimer);

      $("#intTimer").text("Time Remaining: " + ctrTimer + " seconds.");  

        if(ctrTimer === 0){
          alert('time\'s up');
          clearInterval(intervalId);
          questionsUnanswered++;
          alert("questionsRight" + questionsRight);
          alert("questionsWrong" + questionsWrong);
          alert("questionsUnanswered" + questionsUnanswered);
        }

     
      }, 1000);

      

     
      alert("xquestionsRight" + questionsRight);
          alert("questionsWrong" + questionsWrong);
          alert("questionsUnanswered" + questionsUnanswered);

      window.reload;  // restart/reload code




      
    }



    

          
  });





      


 



  

