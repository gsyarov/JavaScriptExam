function solve(input){
	var argument1 = input[0].split(/[\s,]+/);
	var firstX = parseFloat(argument1[1]);
	var firstY = parseFloat(argument1[2]);
	var argument2 = input[1].split(/[\s,]+/);
	var secondX = parseFloat(argument2[1]);
	var secondY = parseFloat(argument2[2]);
	var argument3 = input[2].split(/[\s,]+/);
	var thirdX = parseFloat(argument3[1]);
	var thirdY = parseFloat(argument3[2]);
	var argument4 = input[3].split(/[\s,]+/);
	var x = parseFloat(argument4[0]);
	var y = parseFloat(argument4[1]);
	var argument5 = input[4].split(/[\s,]+/);
	var name ;
	for (var i = 0; i <= argument5[0]; i++) {

		name = 'space';
		if(y>=firstY-1&&y<=firstY+1){
			if(x>=firstX-1&&x<=firstX+1){
				name = argument1[0].toLowerCase();
			}
		}
		if(y>=secondY-1&&y<=secondY+1){
			if(x>=secondX-1&&x<=secondX+1){
				name = argument2[0].toLowerCase();
			}
		}
		if(y>=thirdY-1&&y<=thirdY+1){
			if(x>=thirdX-1&&x<=thirdX+1){
				name = argument3[0].toLowerCase();
			}
		}
		console.log(name);
		y++;
	}
}

var input1 = ['Sirius 3 7',
'Alpha-Centauri 7 5',
'Gamma-Cygni 10 10',
'8 1',
'6'];
var input2 = ['Terra-Nova 16 2',
'Perseus 2.6 4.8',
'Virgo 1.6 7',
'2 5',
'4']
solve(input2);