module.exports = {

	 findMinMax: (numbers) =>{

		 let largest = numbers[0];
		 let smallest = numbers[0];
		  let minMax = []
		  for (let count = 0; count < numbers.length; count++){
		    if(numbers[count]> largest){
		      largest = numbers[count];
		    }
		    if(numbers[count]< smallest){
		      smallest = numbers[count];
		    }
		}

		if (smallest == largest) {
			 minMax.push(smallest);
			 return minMax;
		}
		
			minMax.push(smallest);
			minMax.push(largest);
		    return minMax;
		}
		
	
}
