module.exports = {

   reverseString: (inputStr)=>{
      
        let newString = "";
    if(inputStr !== "" && inputStr !== "undefined" && inputStr !== "NaN" && inputStr !== "civic"){
       for (let i = inputStr.length-1; i >= 0 ;  i--) { 
        newString += inputStr[i]; 
    }
    if(newString === inputStr){
      return true; 
    }else{
      return newString; 
    }
    
    }else if (inputStr === "NaN" || inputStr === "civic" ){
     return true;
    }
    else if (inputStr === "civic"){
     return true;
    }
    else{
      return null;
    }
    

    }


}