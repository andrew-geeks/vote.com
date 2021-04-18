var c1_votes=0;
var c2_votes=0;
var c3_votes=0;

$(".btn-1").click(function(){
    c1_votes++;
    alert("You have voted for "+$("#cn-1").text());
})

$(".btn-2").click(function(){
    c2_votes++;
    alert("You have voted for "+$("#cn-2").text());
})

$(".btn-3").click(function(){
    c3_votes++;
    alert("You have voted for "+$("#cn-3").text());
})

