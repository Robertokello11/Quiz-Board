var pos = 0,test,test_status,question,choice,choices,chA,chB,chC,chD,chE,correct = 0;
var questions = [
        [ "The script tag must be placed in", "head" ,"head and body", "title and head" ,"all of the mentioned", "B"],
        [ "JavaScript is ideal to", "make computations in HTML simpler", "minimize storage requirements on the web server", "increase the download time for the client", "none of the mentioned", "B"],
        [ "JavaScript Code can be called by using", "RMI", "Triggering Event", "Preprocessor", "Function/Method", "D"],
        [ "JavaScript can be written", "directly into JS file and included into HTML", "directly on the server page", "directly into HTML pages", "all of the mentioned", "A"],
        [ "Which of the following Attribute is used to include External JS code inside your HTML Document", "src", "ext", "script", "link", "A"]
];
function _(x) {
     return document.getElementById(x);
}
function renderQuestion() {
    test = _("test");
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos] [0];
     chA = questions[pos] [1];
     chB = questions[pos] [2];
     chC = questions[pos] [3];
     chD = questions[pos] [4];
     chE = questions[pos] [5];
     test.innerHTML = "<h3>"+question+"</h3>";
     test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
     test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
     test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
     test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br>";
     test.innerHTML += "<input type='radio' name='choices' value='E'> "+chE+"<br>";
     test.innerHTML += "<button onclick='checkAnswer()'>submit Answer</button>";
}
function checkAnswer() {
   choices = document.getElementsByName("choices");
   for(var i=0; i<choices.length; i++) {
       if(choices[i].checked) {
           choice = choices[i].nodeValue;
       }
   }
   if(choice == questions[pos] [4]) {
       correct++
   }
   pos++;
   renderQuestion();
   if(pos >= question.length){
    test.innerHTML = "<h2>You have "+correct+" of "+questions.length+" questions correct</h2>";
   _("test_status").innerHTML = "Test completed";
   pos = 0;
   correct= 0; 
}

}
window.addEventListener("load", renderQuestion, false)