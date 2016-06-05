 


  $(document).ready(function() {

      var firstFlag = true;


      var trivia = [];
      trivia.push( new triviaFunc( "question 1 - why is the sky blue?",
                                   "choice 1", "choice 2", "choice 3", "choice 4",  0));
      trivia.push( new triviaFunc("g", "h", "i", "j", "k", 3));

     
      if(firstFlag){
          firstFlag = false;
          startScreen();
          $("#button1").click(function(){
              $("#insertHere").empty();
              //$('#insertHere').text("SOME TEXT");
              theGame();
          })
      } /*  end  if(firstFlag){ */  



    /*   Begin -- load TriviaFunc processing */   
    function triviaFunc(quest, choice_01, choice_02, choice_03, choice_04, ans) {
        this.question = quest;
        this.choices = [choice_01, choice_02, choice_03, choice_04];
        this.answer = ans;
    } /*   End TriviaFunc processing */



    /*   Begin -- startScreen processing */

    function startScreen() {
     var div = document.getElementById('insertHere');
     var btn = document.createElement('button');

     var txt = document.createTextNode(String("START"));
     btn.appendChild(txt);

      btn.setAttribute('type', 'button');
      
      btn.setAttribute('id', 'button1' );
      btn.setAttribute('class', 'btn btn-primary btn-lg btn-block');
      div.appendChild(btn);

    };   /*   End startScreen processing */



    /*   Begin -- displayQuestions processing */
    function displayQuestions(questionNum) {
        var questionLine = $("<div></div>").text(trivia[questionNum].question );
        var choice1Line = $("<div></div>").text(trivia[questionNum].choices[0] );
        var choice2Line = $("<div></div>").text(trivia[questionNum].choices[1] );
        var choice3Line = $("<div></div>").text(trivia[questionNum].choices[2] );
        var choice4Line = $("<div></div>").text(trivia[questionNum].choices[3] );

         trivia[0].choices
         $("#insertHere").append(questionLine);  
         $("#insertHere").append(choice1Line); 
        $("#insertHere").append(choice2Line); 
        $("#insertHere").append(choice3Line); 

        $("#insertHere").append(choice4Line); 

          alert(trivia[0].question + trivia[0].choices[trivia[0].answer] );
    };   /*   End displayQuestions processing */




    /*   game processing    */
    function theGame() {


  
      var div = document.getElementById('insertHere');
      var self = this;
      var ctrTimer = 10;


      displayQuestions(1);

     $('#insertHere').text("Time Remaining: " + ctrTimer + " seconds.");

      var intervalId =  setInterval(function(){ 
        ctrTimer--;
        //alert("ctrTimer" + ctrTimer);

       $('#insertHere').text("Time Remaining: " + ctrTimer + " seconds.");

        if(ctrTimer === 0){
          alert('time\'s up');
          clearInterval(intervalId);
        }


      }, 1000);


      window.reload;  // restart/reload code

      
    }







          
  });





      


 



  

