module.exports = {

	 words: (inputStr)=>{
		  
		  	  let words = [];
			  let output = {};
			  words = inputStr.split(" "); 
			  for (let count=0; count<words.length; count++){
			  	if (words[count] != ""){
			    let counter = 0;
			    for(let kount=0; kount<words.length; kount++){
			      if(words[count].toString() === words[kount].toString()){
			         counter = counter + 1;
			      }
			      if(counter>1){
			        retainWord = words[count];
			      }
			    
			    }
			    output[words[count]]= counter;
			   } 
			  }

			
			  return output;

		}


}
