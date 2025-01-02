function calcul(){
  var score = 0;
  rep1 = document.getElementById('1955');
  rep2 = document.getElementById('World Wide Web');
  rep3 = document.getElementById('1990');
  rep4 = document.getElementById('World Wide Web Consortium');
  if (rep1.checked == true){
    score = score + 1;
  }
  if (rep2.checked == true){
    score = score + 1;
  }
  if (rep3.checked == true){
    score = score + 1;
  }
  if (rep4.checked == true){
    score = score + 1;
  }
  
  alert(score)
}
