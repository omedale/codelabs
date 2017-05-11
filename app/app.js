module.exports = class StringSplosion {

          constructor (inputStr) {
                   this.inputStr = inputStr;
              }

    
        manipulate() {
            let toString = this.inputStr.toString();
            let sploded = "";
           let splodedVersion = "";
           for (let i = 0; i< this.inputStr.length;  i++) {
              sploded += this.inputStr[i]; 
              for(let j = 0; j< this.inputStr[i].length;  j++){
               splodedVersion += sploded; 
             }
        }
       return splodedVersion;
      
    }    
   
}

