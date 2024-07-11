var calcKeys = Array.from(document.getElementsByClassName("calcKeys"));

var displayScreen = document.getElementById("displayScreen");
var output ="";


calcKeys.forEach(key => {
    key.addEventListener('click',() => {
        switch (key.innerHTML) {
            case "=":
                try{
                    displayScreen.innerHTML = eval(output);
                    output = displayScreen.innerHTML;
                } catch(e)
                {
                    displayScreen.innerHTML = "ERROR";
                    output = "";
                }
                break;
            
            case "C":
                output ="";
                displayScreen.innerHTML = "";
                break;
        
            default:
                displayScreen.innerHTML += key.innerHTML;
                output+= key.innerHTML;
                break;
        }
    })
});