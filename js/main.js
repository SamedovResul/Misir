const text = document.querySelectorAll('.text')
const question = document.querySelector('.question')
const questionArray = ['Ən böyük piramida hansı firon üçün ucaldılıb?', 'Qədim Misirin ərazisinidən hansı çay axırdı?' , 'Qədim Misirdə hansı heyvan müqəddəs hesab olunurdu?']

const answerArray = {
    One:[ 'Xeops', 'Tutanxamon','Kleopatra' ,'Amenhotep'],
    Two:[ 'Kür', 'Nil','Amazon' ,'Araz'],
    Three:[ 'İt', 'Qurbağa','Pişik' ,'At'],
}
	
	let random = Math.floor(Math.random() * questionArray.length);
	console.log(random)
for (let i = 0; i < questionArray.length; i++) {
	question.innerHTML = questionArray[random]
	
	
}

console.log(random)

const questions =   Math.floor(Math.random() * 3);
console.log()
let answer = 0
let trueAnswer;
for (let i = 0; i < text.length; i++) {
    console.log(random.length)
    if(questionArray[random] === questionArray[0]){
        text[0].innerHTML = answerArray.One[0]
        text[1].innerHTML = answerArray.One[1]
        text[2].innerHTML = answerArray.One[2]
        text[3].innerHTML = answerArray.One[3]
        trueAnswer = "Xeops" 
    }else if(questionArray[random] === questionArray[1]){
        text[0].innerHTML = answerArray.Two[0]
        text[1].innerHTML = answerArray.Two[1]
        text[2].innerHTML = answerArray.Two[2]
        text[3].innerHTML = answerArray.Two[3]
        trueAnswer = "Nil" 
    }else if(questionArray[random] === questionArray[2]){
        text[0].innerHTML = answerArray.Three[0]
        text[1].innerHTML = answerArray.Three[1]
        text[2].innerHTML = answerArray.Three[2]
        text[3].innerHTML = answerArray.Three[3]
        trueAnswer = "Pisik"
    }
}
let value;
console
trueAnswercss = 
$(document).ready(function () {
    $(".quiz-option").click(function () {
        $(".quiz-option").css('border', 'none')
        value = $(this).children("label").text()
        trueAnswercss = $(this)
        $(this).css("border", '1px solid black')
        console.log(value);
    });
    $(".click").click(function(){
        if (value == trueAnswer) {
            console.log(true)
            $(".click").fadeOut(0.1)
            $(".warning").fadeOut(0.1);
            $(".gamelink").fadeIn(1000);
            trueAnswercss.css("background-color", "green")
            console.log(trueAnswer)
        } else {
            $(".gamelink").fadeOut();
            $(".warning").fadeIn();
        }
    })
});