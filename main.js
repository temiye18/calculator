 // displays value on the screen
 function wrte(x) {
   document.getElementById("display").value += x;

 }
      
      function del() {
        let a = 1
        if (a == 1) {
          document.getElementById("display").value = document
            .getElementById("display")
            .value.slice(0, document.getElementById("display").value.length - 1);
        }
      }
      function clr() {
        document.getElementById("display").value = "";
        
      }