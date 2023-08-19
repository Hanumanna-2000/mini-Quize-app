const questions=[
    {
        question:"which is smallest continent in the world",
        answer:[
            { text:'Asia',correct:false},
            { text:'Astrulia',correct:true},
            { text:'Europe',correct:false},
            { text:'Africa',correct:false}
        ]
    },
    {
        question:"which is biggest continent in the world",
        answer:[
            { text:'Asia',correct:true},
            { text:'Astrulia',correct:false},
            { text:'Europe',correct:false},
            { text:'Africa',correct:false}
        ]   
    },
    {
        question:"which is india capital city",
        answer:[
            { text:'Bengaluru',correct:false},
            { text:'Dheli',correct:true},
            { text:'chennai',correct:false},
            { text:'Belagavi',correct:false}
        ]
    },
    {
        question:"which is india national animal ",
        answer:[
            { text:'lion',correct:false},
            { text:'fox',correct:false},
            { text:'tiger',correct:true},
            { text:'Cow',correct:false}
        ]
    },
    {
        question:"which is smallest country in the world",
        answer:[
            { text:'Asia',correct:false},
            { text:'usa',correct:false},
            { text:'iran',correct:false},
            { text:'vatican city',correct:true}
        ]
    }
];

let  questionElement=document.getElementById('question')
let answerButton=document.getElementById('ans-btn')
let nextButton=document.getElementById('nextbtn')

let curqueIndex=0;
let score=0;

function startquiz(){
    let curqueIndex=0;
    let score=0;
    nextButton.innerHTML='Next'
    showQusetion();
}


function showQusetion(){
    resetstate()
    let currentQues=questions[curqueIndex];
    let questiono=curqueIndex+1;
    questionElement.innerHTML=questiono+'.'+currentQues.question;


    currentQues.answer.forEach(ans=>{
        let button=document.createElement('button');
        button.innerHTML=ans.text;
        button.classList.add("btn")
        answerButton.appendChild(button);
        if(ans.correct){
            button.dataset.correct=ans.correct
        }
        button.addEventListener('click',selectedAns)
    });
}
function resetstate(){
    nextButton.style.display="none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectedAns(e){
    const selectedbtn=e.target;
    const isCorrect=selectedbtn.dataset.correct==="true"
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("inCorrect")
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true
    })
    nextButton.style.display="block"
}
function showscore(){
    resetstate();
    
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play again";
    //startquiz();
    nextButton.style.display="block";
    
}
function handlenextButton(){
    curqueIndex++;
    if(curqueIndex<questions.length){
        showQusetion();
    }else{
        showscore();
    }
}
nextButton.addEventListener('click',()=>{
    if(curqueIndex<questions.length){
        handlenextButton();
    }
    else{
        startquiz();
    }
})
startquiz();

