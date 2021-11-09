var submit = document.querySelector(".submit");
var i;

submit.onclick = function(){
    var input = document.getElementById("input").value;
    var notes = document.querySelector(".notes");

    var inputValue = document.createTextNode(input);

    var div = document.createElement("div");
    div.className = "note";

    var h2 = document.createElement("h2");
    var txt = document.createTextNode("Note");
    h2.appendChild(txt);

    var p = document.createElement("p");
    p.appendChild(inputValue);

    var button = document.createElement("button");
    button.className = "view";
    var txt1 = document.createTextNode("View Detail");
    button.appendChild(txt1);
    
    if(input === ''){
        alert("Write Something!");
    }
    
    else{
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(button);
        notes.appendChild(div);
    }

    document.getElementById("input").value = "";
    
}

//Ndryshimi i permases se note
// if(notes.childNodes.length % 2 == 0){
//     div.style.width= "100%";
// }
// else{
//     div.style.width= "40%";
// }