
var colors=["red","green","yellow","blue"];
var index=0;
var series=[];
$(".btn").click((event)=>{
    checkOrder(event.currentTarget.attributes.id.value)})
$(document).keypress(startGame)


function startGame(){
    
    $(document).off("keypress")
    addToSequence();
}
function addToSequence(){
    $("#level-title").text("Level "+(index+1))
    var color=colors[Math.floor(Math.random()*4)];
    series.push(color);
    setTimeout(()=>{
        buttonSound(color)
        buttonAnimation(color)
    },400)
   
    index=0;
}
function checkOrder(color){
    if(series.length==0)
    startGame();
    else if(color==series[index++])
    {
        buttonSound(color);
        buttonAnimation(color);
        if(index==series.length)
        addToSequence()
    }
    else {
        gameOver() 
        series=[];
        index=0;
        $(document).keypress(startGame) 
    } 
}
function gameOver(){
        buttonSound("wrong")
        $("#level-title").text("Game over,Press Any Key to Start")
        $("body").addClass("game-over")
        setTimeout(()=>{$("body").removeClass("game-over")},100);
     
}

function buttonSound(color){
    var audio=new Audio("sounds/"+color+".mp3");
    audio.play();
   
}
function buttonAnimation(color){
    $("."+color).addClass("pressed");
    setTimeout(()=>{$("."+color).removeClass("pressed")},100);
}