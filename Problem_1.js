function solve(input){
	var bill = Number(input[0]);
	var mood = input[1];
	switch(mood) {
	    case 'happy':
	        bill = bill*10/100;
	        console.log(bill.toFixed(2));
	        break;
	    case 'married':
	        bill = bill*0.05/100;
	        console.log(bill.toFixed(2));
	        break;
	    case 'drunk':
	        bill = bill*15/100;
	        var digit = (''+bill)[0];
	       	if(digit>1){
	        	for (var i = 1; i < digit; i++) {
	        		bill*=bill;
	        	}
	    	}
	        console.log(bill.toFixed(2));
	        break;
	    default:
	        bill = bill*5/100;
	        console.log(bill.toFixed(2));
	} 
}

var input1 = ['120.44','happy'];
var input2 = ['1230.83','drunk'];
var input3 = ['716.00','married'];
var input4 = ['100.00','habala'];
solve(input2);