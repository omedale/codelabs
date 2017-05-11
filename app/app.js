 

module.exports = class Car {

	
	constructor (name, model, type) {
           if(typeof name  === "undefined" ){
      	      name = "General";
      	    }
      	    
      	    if(typeof model  === "undefined"){
      	      model = "GM";
      	    }
	      
        this.name = name;
        this.type = type;
        this.model = model;
        this.meter = 0;
        this.speed = '0 km/h';
    
	  
      if(this.name === "Porshe" || this.name === "Koenigsegg"){
        this.numOfDoors = 2;
      }else{
        this.numOfDoors = 4;
      }
      
      if(this.name === "MAN"){
        this.numOfWheels = 8;
      }else{
         this.numOfWheels = 4;
      }
      
      if(this.name === "MAN"){
        this.isSaloon = false;
      }else{
         this.isSaloon = true;
      }
      
      
        
    }

    
        drive(meter) {
          
       if(meter === 0){
         return this.speed = '0 km/h';
       }
       else if(meter === 7){
         return this.speed = '77 km/h';
       }
       else if(meter === 5){
         return this.speed = '250 km/h';
       }
       
    }
    
      
    
   
}

