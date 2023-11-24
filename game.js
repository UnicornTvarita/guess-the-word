player1_name =localStorage.getItem("player1_name")
player2_name =localStorage.getItem("player2_name")
document.getElementById("player1_name").innerHTML=player1_name+": "
document.getElementById("player2_name").innerHTML=player2_name+": "
player1_score= 0
player2_score= 0
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_answer").innerHTML= "Answer Turn : "+player2_name
document.getElementById("player_question").innerHTML= "Question Turn : "+player1_name

function send(){
getword= document.getElementById("word").value
word= getword.toLowerCase()
c1= word.charAt(1)
l= word.length/2
r= Math.floor(l)
c2= word.charAt(r)
n=  word.length-1
c3 = word.charAt(n)
removec1 = word.replace(c1,"_")
removec2 = removec1.replace(c2,"_")
removec3 = removec2.replace(c3,"_")
g = "<h4 id='word_display'> Q "+removec3+"</h4>"
i =  "<br>A: <input type='text' id='ib'>"
b = "<br><br> <button onclick='check()'>CHECK^.^</button>"
x = g+i+b
document.getElementById("output").innerHTML=x
document.getElementById("word").innerHTML=""
}
questionturn = "player1"
answerturn   = "player2"

function check(){
getans = document.getElementById("ib"). value
ans = getans.toLowerCase()
if(ans== word){
if(answerturn== "player1"){
    player1_score=player1_score+1
    document.getElementById("player1_score").innerHTML =player1_score
}
else{
    player2_score=player2_score+1
    document.getElementById("player2_score").innerHTML =player2_score
}
if(questionturn =="player1" ){
    questionturn="player2"
    document.getElementById("player_question").innerHTML= "QUESTION TURN : "+player2_name
}
else{
    questionturn="player1"
    document.getElementById("player_question").innerHTML= "QUESTION TURN : "+player1_name
}
if(answerturn== "player1"){
    answerturn="player2"
    document.getElementById("player_answer").innerHTML="ANSWER TURN : "+player2_name
}
else{
    answerturn="player1"
    document.getElementById("player_answer").innerHTML="ANSWER TURN : "+player1_name
}

    document.getElementById("output").innerHTML=""



}
















    
}











