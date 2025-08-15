const buttons=document.querySelectorAll("button");
const but1=document.getElementById("rock");
const but2=document.getElementById("paper");
const but3=document.getElementById("scissors");
const innerelee=document.getElementById("innerele");
const yourscore=document.getElementById("yourscore");
const Computerscore=document.getElementById("Computerscore");
      const winner=document.getElementById("winner1");
   
   let count=0;
   let countcomputer=0;

    but1.addEventListener("click",function(e){ 

      let computerchoice = Math.floor(Math.random()*3);
      console.log(computerchoice);
        if(Number(e.target.innerHTML) ===computerchoice){
            innerelee.innerHTML="It's a tie!";
           
          }
      else if(Number(e.target.innerHTML)=== 0 && computerchoice === 2){
       innerelee.innerHTML="You win! rock beats scissors";
       count +=1
       yourscore.innerHTML=count; 
}
     else{
           innerelee.innerHTML="You lose! paper beats rock";
           countcomputer +=1
     Computerscore.innerHTML=countcomputer; 

 }
})
 but2.addEventListener("click",function(e){ 

        let computerchoice=Math.floor(Math.random()*3);
        console.log( computerchoice);
        if(Number(e.target.innerHTML) === computerchoice){
            innerelee.innerHTML="It's a tie!";
          }

     else if(Number(e.target.innerHTML) === 1 && computerchoice === 0) {
               innerelee.innerHTML="You win! rock beats scissors";
            count +=1
       yourscore.innerHTML=count; 
    
     }        

     else {
           innerelee.innerHTML="You lose! paper beats rock";
                countcomputer +=1
     Computerscore.innerHTML=countcomputer; 
     }
})
 but3.addEventListener("click",function(e){ 

     let computerchoice=Math.floor(Math.random()*3);
      console.log( computerchoice);
        if(Number(e.target.innerHTML) ==computerchoice){
            innerelee.innerHTML="It's a tie!";
        
          }

     else if(Number(e.target.innerHTML) === 2 && computerchoice === 1){
            
          innerelee.innerHTML="You win! rock beats scissors";
          count +=1
       yourscore.innerHTML=count; 
     }
     else{
           innerelee.innerHTML="You lose! paper beats rock";
                countcomputer +=1
     Computerscore.innerHTML=countcomputer; 
     }
     

      
 })
  
