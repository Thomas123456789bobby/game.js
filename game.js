//alert("ow nee");
// dit is een alert
//document.getElementById("ding_1").innerHTML = "hallo mensen";
// een id doe hij van htmk kan hellen en dan html kan toe voegen

//function changetext(){
    
//document.getElementById("ding_1").innerHTML = "doei mensen";
//console.log("change text")}
// dit is een function die de text verander als je er op kilt en als je op een een consel.log

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  function nodrop(ev) {
    ev.preventDefault();
    return true;
  }