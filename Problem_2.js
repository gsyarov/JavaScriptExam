function solve(input){
	var thenum = input[0];
	var thenum = thenum.match(/[0-9]+/g);
	for (var i = 0; i < thenum.length; i++) {
		thenum[i] = decimalToHexString(parseInt(thenum[i]));
		thenum[i] = thenum[i];
	}
	console.log(thenum.join('-'));
	function decimalToHexString(number)
	{
	    var num = number.toString(16).toUpperCase();
	    if(num.length<4){
			num = pad(num , 4);
	    }
	    return '0x'+num;	
	}
	function pad (str, max) {
		str = str.toString();
		return str.length < max ? pad("0" + str, max) : str;
	}
}

var input1 = ['5tffwj(//*7837xzc2---34rlxXP%$".'];
var input2 = '482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312';
solve(input1);