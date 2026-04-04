let username = "Guest";

document.getElementById("myH1").textContent = `Welcome to CaptainEklooder's website, ${username}`;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome to CaptainEklooder's website, ${username}!`;
}

document.getElementById('myButton').addEventListener('click', function() {
  this.style.display = 'none';
});
