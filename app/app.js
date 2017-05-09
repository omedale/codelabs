module.exports = {

	 dataTypes: (incomingArg)=>{
		  
		  if (incomingArg === null){
		    return "no value";
		  }else if(incomingArg === undefined){
		    return "no value";
		  }
		  else if(incomingArg === true){
		    return true;
		  }
		  else if(incomingArg === false){
		    return false;
		  }
		  else if(incomingArg == 100  &&  typeof incomingArg === "number"){
		    return "equal to 100";
		  }
		  else if( incomingArg > 100 && incomingArg !== '' &&  typeof incomingArg === "number"){
		    return "more than 100";
		  }
		  else if( incomingArg < 100 && incomingArg !== '' &&  typeof incomingArg === "number"){
		    return "less than 100";
		  }
		  else if(isNaN(incomingArg) === true && Array.isArray(incomingArg) === false && typeof incomingArg != 'function' ){
		    return incomingArg.length;
		  }
		   else if(isNaN(incomingArg) === false && Array.isArray(incomingArg) === false  && typeof incomingArg != 'function'){
		    return incomingArg.length;
		  }
		  else if(Array.isArray(incomingArg) === true ){
		    if(incomingArg.length === 0){
		      return "undefined";
		    }else if(incomingArg[2]){
		      return incomingArg[2];
		    }else{
		      return "undefined";
		    }
		  }
		  else if (typeof incomingArg === 'function'){
		    	return incomingArg(true);
		  }
		  
		}


}
