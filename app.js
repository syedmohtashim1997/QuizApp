window.onload=function(){
show(0);    
}
var questions=[{
id:1,
question:"Who is the father of Computer??",
answer:"Charles Babbage",
options:
[
    
     "Allen Turing",
     "Charles Babbage",
     "Simur Cray",
     "Augusta Adaming",

]
},
{
id:2,
question:"If a computer has more than one processor then it is known as?",
answer:"Multiprocessor",
options:
[
    
    "Uni-process",
     "Multiprocessor",
     "Multi-programming",
     "Multi-threaded",
]
},
{
id:3,
question:"WWW stands for?",
answer:"World Wide Web",
options:
[
    
     "World Whole Web",
     "Wide World Web",
    "Web World Wide",
     "World Wide Web",
]
},
{
id:4,
question:"Which technology is used in compact disks?",
answer:"Laser",
options:
[
        
"Mechanical",
"Electrical",
 "Electro Magnetic",
"Laser",
 ]
},

{
id:5,
question:"Who is the best teacher of programming?",
answer:"All of them",
options:
["Sir Ali Mughal",
"Sir Ghous",
"Sir Basit",
"All of them",
 ]
 },

{
id:6,
question:"Gigabyte is equal to?",
answer:"1024 megabytes",
options:
[              
"1024 bits",
"1000 megabytes",
"1024 kilobytes",
"1024 megabytes",
 ]
},

{
id:7,
question:"The brain of any computer system is?",
answer:"CPU",
 options:
[
 "ALU",
"Memory",
"CPU",
"Control unit",
 ]
},      
{
 id:8,
 question:"The computer that process both analog and digital is called?",
 answer:"Hybrid computer",
options:
[
"Analog computer",
" Digital computer",
"Hybrid computer",
"Mainframe computer",
]
 },
 {
id:9,
question:"CD-ROM stands for____________?",
 answer:"Compact Disk Read Only Memory",
 options:
 [
 "Compactable Read Only Memory",
 "Compact Data Read Only Memory",
"Compactable Disk Read Only Memory",
"Compact Disk Read Only Memory",
]
 },
{
id:10,
question:"ALU stands for____________?",
  answer:"Arithmetic Logic Unit",
 options:
[
 "Arithmetic Logic Unit",
"Array Logic Unit",
"Application Logic Unit",
"None of above", ]
},         
]

function submitform(e){
    e.preventDefault();
    var name=document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name",name);
    location.href="quiz.html";
}
let question_count=0;
let point=0;

function next()
{
    let user_answer=document.querySelector("li.option.active").innerHTML;
    if(user_answer==questions[question_count].answer){
        point+=1;
        sessionStorage.setItem("points",point);
        }  
if(question_count==questions.length-1){
location.href="end.html";
return;
}

question_count++;
show(question_count);
console.log(question_count)
}
function show(count){
var quest=document.getElementById("questions");
quest.innerHTML=`<h2>Q${question_count+1}. ${questions[count].question }</h2>
<ul class="option-group">
<li class="option">${questions[count].options[0] }</li>
 <li class="option">${questions[count].options[1] }</li>
 <li class="option">${questions[count].options[2] }</li>
 <li class="option">${questions[count].options[3] }</li>
 </ul> `;
 toggleactive();
}
 function toggleactive(){
     let option=document.querySelectorAll("li.option");
     for(let i=0;i<option.length;i++){
        option[i].onclick=function(){
             for (let j=0;j<option.length;j++){
                 if(option[j].classList.contains("active")){
                     option[j].classList.remove("active");
                 }
             }
            option[i].classList.add("active");
            }
        }
    }