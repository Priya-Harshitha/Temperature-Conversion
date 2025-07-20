let num = document.getElementById('num');

let tf = document.getElementById('tf');
let tc = document.getElementById('tc');

let btn = document.getElementById('btn');

let res = document.getElementById('res');

 function convert(){
   let degree = num.value ;
   degree = Number(degree);
   if(tf.checked){
      let r = (degree * 9/5)+32
      res.textContent = r.toFixed(1) + "°F";
   }
   else if(tc.checked){
      let r = (degree - 32)*5/9
      res.textContent = r.toFixed(1) + "°c";
   }
   else{
    res.textContent = "select any unit to convert";
   }
}
