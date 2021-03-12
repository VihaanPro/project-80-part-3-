function getParagraph1() {
     var inputs = [];
      for(var i = 1 ; i <=6 ; i++) {
           inputs.push(document.getElementById("input box 1" + i).value);
         }
          document.getElementById("getpara_button").innerHTML = inputs.join(". "); 
        }
         function getParagraph2() {
              var inputs = [];
               for(var i = 1 ; i <=6 ; i++) {
                    inputs.push(document.getElementById("input box 1" + i).value);
                 }
                  document.getElementById("getpara2_button").innerHTML = inputs.join(". ");
                 } 