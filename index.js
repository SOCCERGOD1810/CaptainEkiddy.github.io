let username = "Guest";

document.getElementById("myH1").textContent = `Welcome to CaptainEklooder's website, ${username}`;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    

    document.getElementById("myH1").textContent = `Welcome to CaptainEklooder's website, ${username}!`;
    

    document.getElementById("myText").style.display = 'none';   // Hides the input box
    document.getElementById("myButton").style.display = 'none'; // Hides the button
    document.getElementById("myLabel").style.display = 'none';  // Hides the "username:" text
}
