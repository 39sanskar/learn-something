const btn = document.getElementById("btn");
const input = document.getElementById("plinput");
const result = document.getElementById("result");

btn.addEventListener("click", checkPalindrome);

// Enter key support
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPalindrome();
  }
});

function checkPalindrome() {
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter a word!");
    return;
  }

  const cleaned = value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  // console.log(reverse); 
  // level ->reverse-> level;
  // Dad daD
  result.style.display = "block";
  result.className = "";

  if (cleaned === reversed) {
    result.classList.add("success");
    result.innerText = `"${value}" is a palindrome`;
  } else {
    result.classList.add("error");
    result.innerText = `"${value}" is not a palindrome`;
  }
}

/*

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  *{
    margin: 0;
    padding: 0;
  }

  body{
    background-color: #51ff99;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    font-family: 'Segoe UI', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif'
  }

  h1{
    font-size: 1.5rem;
    color: rgb(49, 49, 49);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  input{
    width: 300px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 0px 10px;
    font-size: 1.2rem;
    margin-top: 20px;
  }

  button{
    width: 300px;
    height: 50px;
    border: none;
    font-size: 1.2rem;
    margin-top: 10px;
    background-color: #323232;
    border-radius: 5px;
    color: #fff;
  }
  
  button-hover{
    background-color: rgb(255, 255, 255);
    color: #323232;
    cursor: pointer;
  }

  #result{
    background-color: white;
    width: 300px;
    height: 50px;
    border-radius: 20px;
    padding: 10px;
    text-align: center; 
    font-size: 1.2rem;
    margin-top: 20px;
    display: block;
  }
</style>
<body>
  <h1>Palindrome Checker</h1>
  <p id="result">level is a palindrome</p>
  <input type="text" id="plinput" placeholder="Enter a word"/>
  <button id="btn"
    onclick="chechPalindrome()"
  >Check</button>
</body>
<script>
  function chechPalindrome(){
    // console.log("clicked");
    let plinput = document.getElementById("plinput").value;
    console.log(plinput);

    let result = document.getElementById("result");
    let reverse = plinput.split("").reverse().join('');
    // console.log(reverse);
    // level ->reverse-> level;
    // console.log(plinput, reverse);

    if (plinput == ''){ // plinput => palindrome input.
      alert('Please enter a word!');
    }
    else if (plinput.toLowerCase() == reverse.toLowerCase()){
      // Dad daD 
      // alert("It's a palindrome")
      // console.log(plinput, reverse);
      result.style.display = "block";
      result.innerHTML = `${plinput} is a palindrone`;
    }
    else {
      // alert("It's not a palindrome");
      result.style.display = "block";
      result.innerHTML = `${plinput} is not a palindrone`;
    }
  }
</script>
</html>. // split into three files index.html, style.css, script.js 

*/