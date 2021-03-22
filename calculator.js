var display = document.getElementById("display")
      var varde= [];
      varde[0] = 0;
      varde[1] = 0;

      //Takes info from element display and tells computer to display the values connected to it by varde.
     
      document.body.onclick = function(anEvent) { //when the user clicks an element the fucntion will run
        
        var u = anEvent.target.id;
        display.type='text'
        
        if(u===''){
          return;
        }
      //Says that u is the targetid and tells computer do display in form of text. 
      //U gets the value of the button you click on

        if (display.value ==='0' &&
         u!='percent' &&
          u!='0' &&
          u!='equal' && 
          u!='divide'
           && u!='multiply' && 
           u!='add' && 
           u!='subtract') {
          if(u !='clear'){
            display.value = u;
          }
         //If u is neither of these things above and just 0 it tells the computer
         // to display the number you choose.
          
          else{
            display.value=0;
          }
          }

          else if(u==='clear') {
            display.value=0;
          }

          else if(u==='percent') {
            display.value *= 0.01;
          }

          else if(u==='negate'){
            display.value *= -1;
          }
          
          else if (u==='dot'){
            if(!display.value.includes('.')){
              display.value +='.';
            }
            
          }
            //Takes away the number(s) if you click on C
            //Multiplys the number with 0.01
            // multiplys the number with -1
            //If the value has a . it should display it.
          

         else if (u==='divide' ||
          u==='multiply' || 
          u==='subtract' || 
          u==='add'){
            
          
            varde[0]=display.value;
            console.log(varde)
            display.value ='';
            varde[2] = u;
          }
         //If u is any of these above is should do the calculations below.
          else if (u==='equal'){
            varde[1]=display.value;
            switch(varde[2]){
              case 'add':
                varde[1]*= 1;

                varde[0]+=varde[1];

                varde[0]*= 1;
                break;
              
              case 'subtract':
                  varde[0]-=varde[1];
                  break
                
              case 'multiply':
                  varde[0]= varde[0]*varde[1];
                  break
              
              case 'divide':
                  varde[0]= varde[0]/varde[1];
                  break

              default:
                  return
            }
            //Above are all the functions to make the calculator work and these are pretty obvious.
            //It gives varde[0] the value of the calculation to the right of it.
            display.value=varde[0];

          }


          else{
      
              display.value += u;
          }
        //It then tells the computer to display the final value.
    };
