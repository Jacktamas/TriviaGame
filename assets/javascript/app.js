var gameQuestions = [
  {question: 'Whats your name', answer: 'Jack', options:['Jack', 'Rita', 'Stephen']},
  {question: 'what is your age', answer: '29', options: ['27', '28', '29']}
  // {questions3: 'how tall are you'}
]


gameObj = {

  displayQuestions: function (){

    //iterate over our array and get each question
    for( var i=0; i < gameQuestions.length; i++){
      var question = $('<div>');
      var options = $('<ul>');
      question.append(gameQuestions[i].question)
      var test = gameQuestions[i].options.length;
      console.log(test);
      for(var j=0; j < test; j++){
        console.log('options[j]', gameQuestions[i].options[j]);
        options.append('<li>' + gameQuestions[i].options[j]);
        console.log('options', options);
      }
      question.append(options)
      $('#game-questions').append(question);
    }
    //append the text of this question to our question div

  }


}

//document ready 
gameObj.displayQuestions();

// quest - append options -
// //append qestion to game quesitons
