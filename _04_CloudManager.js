function solve(input){
	var results = { };
	for(i in input){
		var fileResults = input[i].split(/[\s,]+/);
		var name = fileResults[0].trim();
		var extension = fileResults[1].trim();
		var memory = fileResults[2].trim();
		memory = memory.match(/[0-9.]+/g);
		memory = parseFloat(memory[0]);
		if (!results[extension]) {
            results[extension] = { files: [], memory: 0};
        }
        results[extension].memory += memory;
        results[extension].files.push(name);
	}

	results = sortObjectProperties(results);
	for (var file in results) {
        results[file].files.sort();
        results[file].memory = results[file].memory.toFixed(2);
    }
	console.log(JSON.stringify(results));

	function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }

}

var input1 = ['sentinel .exe 15MB',
'zoomIt .msi 3MB',
'skype .exe 45MB',
'trojanStopper .bat 23MB',
'kindleInstaller .exe 120MB',
'setup .msi 33.4MB',
'winBlock .bat 1MB'];
var input2 = ['eclipse .tar.gz 198.00MB',
'uTorrent .gyp 33.02MB',
'nodeJS .gyp 14MB',
'nakov-naked .jpeg 3MB',
'gnuGPL .pdf 5.6MB',
'skype .tar.gz 66MB',
'selfie .jpeg 7.24MB',
'myFiles .tar.gz 783MB',
]
solve(input2);