var c1_votes=0;
var c2_votes=0;
var c3_votes=0;

$(".btn-1").click(function(){
    c1_votes++;
    alert("You have voted for "+$("#cn-1").text());
    sessionStorage.setItem("c1_votes",c1_votes);
})

$(".btn-2").click(function(){
    c2_votes++;
    alert("You have voted for "+$("#cn-2").text());
    sessionStorage.setItem("c2_votes",c2_votes);
})

$(".btn-3").click(function(){
    c3_votes++;
    alert("You have voted for "+$("#cn-3").text());
    sessionStorage.setItem("c3_votes",c3_votes);
})

$(".save-btn").click(function(){
    console.log("success");
  })


  

