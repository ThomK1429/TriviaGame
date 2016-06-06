 


$(document).ready(function() {

    var questionCtr = 0;
    var questionsRight = 0;
    var questionsWrong = 0;
    var questionsUnanswered = 0;

    var ctrTimer = 5;
    var timerId1000 = 0;
    var timerId5000 = 0;

    var clickSound  = new Audio("assets/sounds/click_sound.mp3");




    /* ****************************************************************************************************** */

    var trivia = [];

        //   Begin -- load TriviaFunc processing 
       function triviaFunc(quest, choice_01, choice_02, choice_03, choice_04, ans) {
          this.question = quest;
          this.choices = [choice_01, choice_02, choice_03, choice_04];
          this.answer = ans;
        } //   End TriviaFunc processing 


        trivia.push( new triviaFunc("Question 1 - What country were the Beatles from?",
                                    "England", "Belgium", "Ireland", "Germany", 
                                    0));

        trivia.push( new triviaFunc("question 2 - Most of the Beatles were born in ?",
                                    "London", "Liverpool", "Birmingham", "Glasgow", 
                                    1));
        trivia.push( new triviaFunc("question 3 - What year did the Beatles first arrive in the USA?", 
                                    "1961", "1962", "1963", "1964",  
                                    3));

        trivia.push( new triviaFunc("question 4 - What was the name of the Beatles manager?", 
                                    "Freddie Epstein", "Billy J. Epstein", "Brian S. Epstein", "S. Wm. Epstein", 
                                    2));

        trivia.push( new triviaFunc("question 5 - Who was the fifth Beatle?", 
                                    "Paul McCartney", "George Martin", "Ringo Starr", "George Harrison", 
                                    1));

        trivia.push( new triviaFunc("question 6 - Who was the first drummer for the Beatles?",   
                                    "Ringo Starr", "Pete Best", "Buddy Rich", "Billy Preston", 
                                    1));

        trivia.push( new triviaFunc("question 7 - Who was the Beatles original bass guitarist?",   
                                    "Paul McCartney", "Pete Best", "Stuart Sutcliffe", "Billy Preston", 
                                    2));

        trivia.push( new triviaFunc("question 8 - Who who also was considered the 'fifth Beatle?",  
                                    "John Lennon", "George Harrison", "Pete Best", "Billy Preston", 
                                    3));

        trivia.push( new triviaFunc("question 9 - Which was not an album produced by the Beatles?",  
                                    "Revolver", "Abbey Road", "Dr. Pepper's Lonely Hearts Club Band", "Something New", 
                                    2));

        trivia.push( new triviaFunc("question 10 - Which was not an song produced by the Beatles?",  
                                    "Something", "Let It Be Me", "She Loves You", "The Long and Windy Road", 
                                    1));





    /* ****************************************************************************************************** */
    
    function initVars(){

      questionCtr = 0;
      questionsRight = 0;
      questionsWrong = 0;
      questionsUnanswered = 0;

      ctrTimer = 5;
      

    }


    
    /* ****************************************************************************************************** */
    



    //  Begin - On window load, display start screen
    window.onload = function () {
        initVars();



        dispFirstScreen();
        //alert("LOADED!");
        $("#button1").click(function(){
            clickSound.play();
            $("#insertHere").empty();
          
            if(questionCtr <= trivia.length){
                displayQuestions(questionCtr);
                start1();
              }
              else
                displayLastScreen();

        });

    }

    /* ****************************************************************************************************** */

    function start1(){
      //timerId1000 = setInterval(next1, 1000);
      timerId1000 = setInterval(next1, 1000);
    }


    function start5000(){
      //timerId1000 = setInterval(next1, 1000);
      timerId5000 = setInterval(next1, 5000);
    }

    /* ****************************************************************************************************** */

    function next1(){
      clearInterval(timerId5000);
      ctrTimer--;
      //alert("ctrTimer=" + ctrTimer);
            
      //console.log("questionCtr" + questionCtr);
      //console.log("trivia length" + trivia.length);
      //if(questionCtr >=   (trivia.length - 1) && (ctrTimer === 0) ){
      if(questionCtr >=   (trivia.length - 1) ){  
          //alert("questionCtr > trivia.length");
          clearInterval(timerId1000);
          $("#insertHere").empty();
          ctrTimer = 5;
          $("#insertHere").html("Time Remaining: " + ctrTimer + " seconds." + "<br><br>"); 
          displayLastScreen();
        } 




     if(ctrTimer === 0){
          //alert('time\'s up');
          clearInterval(timerId1000);
          questionsUnanswered++;

          
          // Display "Out of Time" screen
          $("#insertHere2").empty();
          ctrTimer = 5;
          dispTimeOut( );
          questionCtr++;


          //displayQuestions(questionCtr);
          clearInterval(timerId5000);
          start1();

          return false;
        }

      //if(questionCtr <   (trivia.length - 1)){
      if(questionCtr <    (trivia.length - 1)){

        displayQuestions(questionCtr);
        } 

       console.log('check for click events');
      
       choiceClickEvents();

    }


    /* ****************************************************************************************************** */

    function updateQRight(){
        questionsRight++;
    }

    /* ****************************************************************************************************** */

    function updateQWrong(){
        questionsWrong++;

        clearInterval(timerId1000);
         
        // Display "Correct Answer" screen
          $("#insertHere2").empty();
          ctrTimer = 5;
          //alert("wrong answer");
          dispCorrectAns( );
          questionCtr++;
          
          //displayQuestions(questionCtr);
          clearInterval(timerId5000);
          start1();

          //return false;



    }

    /* ****************************************************************************************************** */

    function choiceClickEvents() {


        $("#choice00").click(function(){
            clickSound.play();
            //alert("choice00h");
            //alert("trivia[questionNum].answer=" + trivia[1].answer);

            if(0 === trivia[questionCtr].answer){
              //alert("choice01");
              updateQRight();
            } else { 
               updateQWrong()
               return false;
            };   

            $("#choice00").off('click');   //disables click event
              clearInterval(timerId1000);
              ctrTimer = 5;
              
              questionCtr++;
              displayQuestions(questionCtr);
              start1();
        });


        $("#choice01").click(function(){
            clickSound.play();
            if(1 === trivia[questionCtr].answer){
              //alert("choice01");
              updateQRight();
            }  else { 
               updateQWrong();
               return false;
            };   


            $("#choice01").off('click');   //disables click event
              clearInterval(timerId1000);
              ctrTimer = 5;
              
              questionCtr++;
              displayQuestions(questionCtr);
              start1();
        });


        $("#choice02").click(function(){
            clickSound.play();
            if(2 === trivia[questionCtr].answer){
              //alert("choice02");
              updateQRight();
            }  else { 
               updateQWrong();
               return false;
            };   
 

            $("#choice02").off('click');   //disables click event
              clearInterval(timerId1000);
              ctrTimer = 5;
              
              questionCtr++;
              displayQuestions(questionCtr);
              start1();
        });


        $("#choice03").click(function(){
            clickSound.play();
            if(3 === trivia[questionCtr].answer){
              //alert("choice03");
              updateQRight();
            }  else { 
               updateQWrong();
               return false;
            };   
   

            $("#choice03").off('click');   //disables click event
              clearInterval(timerId1000);
              ctrTimer = 5;
              
              questionCtr++;
              displayQuestions(questionCtr);
              start1();
        });

    }

    





    
    /* ****************************************************************************************************** */

    function dispFirstScreen() {
        var div = document.getElementById('insertHere');
        var btn = document.createElement('button');

        var txt = document.createTextNode(String("START"));
           btn.appendChild(txt);

      btn.setAttribute('type', 'button');
      
      btn.setAttribute('id', 'button1' );
      btn.setAttribute('class', 'btn btn-primary btn-lg btn-block');
      div.appendChild(btn);
    };  

      
    /* ****************************************************************************************************** */


    function displayLastScreen(){
        $("#insertHere").append($("<div></div>").text("All done, here's how you did." ));  
        $("#insertHere").append($("<br>").text("  " ));
        $("#insertHere").append($("<div></div>").text("Correct Answers: "  + questionsRight));
        $("#insertHere").append($("<div></div>").text("Incorrect Answers: " + questionsWrong ));
        $("#insertHere").append($("<div></div>").text("Unanswered Questions: " + questionsUnanswered));
        $("#insertHere").append($("<br>").text("  " ));
        $("#insertHere").append($("<div id='startOver'></div>").text("Start Over?" ));

        $("#startOver").click(function(){
          //alert("Start Over");
          initVars()                      // init the variables
          displayQuestions(questionCtr);  // display the question page
          start1();                       // start the timer
        }); 
    }


    /* ****************************************************************************************************** */


    function displayQuestions(questionNum) {

        $("#insertHere").html("Time Remaining: " + ctrTimer + " seconds." + "<br><br><br>"); 

        $("#insertHere").append($("<div id='insertHere2'></div>").text(trivia[questionNum].question ));  

        $("#insertHere").append($("<div class='choices' id='choice00'></div><br>").text(trivia[questionNum].choices[0] )); 
        $("#insertHere").append($("<div class='choices' id='choice01'></div><br>").text(trivia[questionNum].choices[1] )); 
        $("#insertHere").append($("<div class='choices' id='choice02'></div><br>").text(trivia[questionNum].choices[2] )); 
        $("#insertHere").append($("<div class='choices' id='choice03'></div><br>").text(trivia[questionNum].choices[3] )); 

        /*$("#choice00").hover(function(){
          clickSound.play();
          $(this).css("background-color", "yellow"  );

        });

        //$('#choice00').off('hover');
        //$('#choice01').off('hover');


        $("#choice01").hover(function(){
          clickSound.play();
          $(this).css("background-color", "yellow"  );

        });

        $("#choice02").hover(function(){
          clickSound.play();
          $(this).css("background-color", "yellow"  );

        });

         $("#choice03").hover(function(){
          clickSound.play();
          $(this).css("background-color", "yellow"  );

        }); */
    

        //  alert(trivia[0].question + trivia[0].choices[trivia[0].answer] );
    };   


    /* ****************************************************************************************************** */

    function dispTimeOut( ){

        // alert("Disp Time Out");

        $("#insertHere").html("Time Remaining: " + ctrTimer + " seconds." + "<br><br>"); 

        $("#insertHere").append($("<div></div>").text("Out of Time!" ));  
        $("#insertHere").append($("<br>").text("  " ));
        $("#insertHere").append($("<div></div>").text("The Correct Answer was: " 
          + trivia[questionCtr].choices[trivia[questionCtr].answer]));
    }



    

    
    /* ****************************************************************************************************** */

    function dispCorrectMsg( ){

        $("#insertHere").html("Time Remaining: " + ctrTimer + " seconds." + "<br><br>"); 

        $("#insertHere").append($("<div></div>").text("Correct!" ));  
        
    }

    /* ****************************************************************************************************** */

     function dispCorrectAns( ){

        // alert("Disp Correct Answer");

        $("#insertHere").html("Time Remaining: " + ctrTimer + " seconds." + "<br><br>"); 

        
        $("#insertHere").append($("<div></div>").text("The Correct Answer is: " 
          + trivia[questionCtr].choices[trivia[questionCtr].answer]));
    }



    

    
    /* ****************************************************************************************************** */

          
  });





      


 



  

