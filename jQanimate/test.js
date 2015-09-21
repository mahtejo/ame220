var boxStatus = [
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left"
];


var buttonClicked = function(n, easing)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  if(boxStatus[n] == "left"){
    $(id).animate({"margin-left" : pageWidth - boxWidth + "px", "color": "#9900FF", "border":"solid 2px mediumpurple"}, 1000, easing);
    boxStatus[n] = "right";
  }
  else{
    $(id).animate({"margin-left" : "0px", "color" : "#CC0066"}, 1000, easing);
    boxStatus[n] = "left";
  }
}
