let codeAStartChar = 'Ë';
let endChar = 'Î';
let charToValMap = new Map([
   ['Â', 0],
   ['!', 1],
   ['"', 2],
   ['#', 3],
   ['$', 4],
   ['%', 5],
   ['&', 6],
   ['\'', 7],
   ['(', 8],
   [')', 9],
   ['*', 10],
   ['+', 11],
   [',', 12],
   ['-', 13],
   ['.', 14],
   ['/', 15],
   ['0', 16],
   ['1', 17],
   ['2', 18],
   ['3', 19],
   ['4', 20],
   ['5', 21],
   ['6', 22],
   ['7', 23],
   ['8', 24],
   ['9', 25],
   [':', 26],
   [';', 27],
   ['<', 28],
   ['=', 29],
   ['>', 30],
   ['?', 31],
   ['@', 32],
   ['A', 33],
   ['B', 34],
   ['C', 35],
   ['D', 36],
   ['E', 37],
   ['F', 38],
   ['G', 39],
   ['H', 40],
   ['I', 41],
   ['J', 42],
   ['K', 43],
   ['L', 44],
   ['M', 45],
   ['N', 46],
   ['O', 47],
   ['P', 48],
   ['Q', 49],
   ['R', 50],
   ['S', 51],
   ['T', 52],
   ['U', 53],
   ['V', 54],
   ['W', 55],
   ['X', 56],
   ['Y', 57],
   ['Z', 58],
   ['[', 59],
   ['\\', 60],
   [']', 61],
   ['^', 62],
   ['_', 63],
   ['`', 64],
   ['a', 65],
   ['b', 66],
   ['c', 67],
   ['d', 68],
   ['e', 69],
   ['f', 70],
   ['g', 71],
   ['h', 72],
   ['i', 73],
   ['j', 74],
   ['k', 75],
   ['l', 76],
   ['m', 77],
   ['n', 78],
   ['o', 79],
   ['p', 80],
   ['q', 81],
   ['r', 82],
   ['s', 83],
   ['t', 84],
   ['u', 85],
   ['v', 86],
   ['w', 87],
   ['x', 88],
   ['y', 89],
   ['z', 90],
   ['{', 91],
   ['|', 92],
   ['}', 93],
   ['~', 94],
   ['Ã', 95],
   ['Ä', 96],
   ['Å', 97],
   ['Æ', 98],
   ['Ç', 99],
   ['È', 100],
   ['É', 101],
   ['Ê', 102],
   ['Ë', 103],
   ['Ì', 104],
   ['Í', 105]
]);
let valToCharMap = new Map([
   [0, 'Â'],
   [1, '!'],
   [2, '"'],
   [3, '#'],
   [4, '$'],
   [5, '%'],
   [6, '&'],
   [7, '\''],
   [8, '('],
   [9, ')'],
   [10, '*'],
   [11, '+'],
   [12, ','],
   [13, '-'],
   [14, '.'],
   [15, '/'],
   [16, '0'],
   [17, '1'],
   [18, '2'],
   [19, '3'],
   [20, '4'],
   [21, '5'],
   [22, '6'],
   [23, '7'],
   [24, '8'],
   [25, '9'],
   [26, ':'],
   [27, ';'],
   [28, '<'],
   [29, '='],
   [30, '>'],
   [31, '?'],
   [32, '@'],
   [33, 'A'],
   [34, 'B'],
   [35, 'C'],
   [36, 'D'],
   [37, 'E'],
   [38, 'F'],
   [39, 'G'],
   [40, 'H'],
   [41, 'I'],
   [42, 'J'],
   [43, 'K'],
   [44, 'L'],
   [45, 'M'],
   [46, 'N'],
   [47, 'O'],
   [48, 'P'],
   [49, 'Q'],
   [50, 'R'],
   [51, 'S'],
   [52, 'T'],
   [53, 'U'],
   [54, 'V'],
   [55, 'W'],
   [56, 'X'],
   [57, 'Y'],
   [58, 'Z'],
   [59, '['],
   [60, '\\'],
   [61, ']'],
   [62, '^'],
   [63, '_'],
   [64, '`'],
   [65, 'a'],
   [66, 'b'],
   [67, 'c'],
   [68, 'd'],
   [69, 'e'],
   [70, 'f'],
   [71, 'g'],
   [72, 'h'],
   [73, 'i'],
   [74, 'j'],
   [75, 'k'],
   [76, 'l'],
   [77, 'm'],
   [78, 'n'],
   [79, 'o'],
   [80, 'p'],
   [81, 'q'],
   [82, 'r'],
   [83, 's'],
   [84, 't'],
   [85, 'u'],
   [86, 'v'],
   [87, 'w'],
   [88, 'x'],
   [89, 'y'],
   [90, 'z'],
   [91, '{'],
   [92, '|'],
   [93, '}'],
   [94, '~'],
   [95, 'Ã'],
   [96, 'Ä'],
   [97, 'Å'],
   [98, 'Æ'],
   [99, 'Ç'],
   [100, 'È'],
   [101, 'É'],
   [102, 'Ê'],
   [103, 'Ë'],
   [104, 'Ì'],
   [105, 'Í']
]);

let dataElem;
let clearElem;
let submitElem;

let outputElem;
let copyButtonElem;
let barcodeElem;

let stepsElem;

window.addEventListener("DOMContentLoaded", function() {
   dataElem = document.getElementById("data");
   clearElem = document.getElementById("clear");
   submitElem = document.getElementById("submit");
   
   outputElem = document.getElementById("output");
   copyButtonElem = document.getElementById("copy-button");
   barcodeElem = document.getElementById("barcode");
   
   stepsElem = document.getElementById("steps");
   
   dataElem.addEventListener("keydown", handleSubmitEnter);
   submitElem.addEventListener("click", handleSubmitClick);
   clearElem.addEventListener("click", handleClear);
   copyButtonElem.addEventListener("click", handleCopyOutput);
});

function handleSubmitClick(e) {
   e.currentTarget.blur();
   
   let data = dataElem.value.trim();
   
   if (!data) {
      alert("Data field was empty. Please enter at least one character of data to encode.");
      return;
   }
   data = data.replaceAll(' ','Â');
   
   var sum = charToValMap.get(codeAStartChar);
   var steps = `initial value of char set A start symbol: ${sum}`+"\n";
   var i = 0;

   for (let c of data) {
      steps += `adding ${c}: ${sum} + ${i+1}*${charToValMap.get(c)}`+"\n";
      sum += (i+1) * charToValMap.get(c);
      i++;
   }
   
   let rem = sum%103;
   let checksumChar = valToCharMap.get(rem);

   steps += `sum and remainder mod 103 are: ${sum}, ${rem}`+"\n";
   steps += "\n"+`checksum char is: ${checksumChar}`
   
   let encodedData = `${codeAStartChar}${data}${checksumChar}${endChar}`;
   barcodeElem.value = encodedData;
   barcodeElem.style.height = (barcodeElem.scrollHeight-35)+"px";
   outputElem.value = encodedData;
   
   stepsElem.value = steps;
   stepsElem.style.height = (stepsElem.scrollHeight-20)+"px";
}

let ignoreKeys = [
   "Alt",
   "CapsLock",
   "Control",
   "Fn",
   "Hyper",
   "Meta",
   "NumLock",
   "ScrollLock",
   "Shift",
   "Super",
   "Tab",
   " ",
   "ArrowDown",
   "ArrowUp",
   "ArrowRight",
   "ArrowLeft",
   "End",
   "Home",
   "PageDown",
   "PageUp",
   "Copy",
   "Insert"
];

function handleSubmitEnter(e) {
   if (e.key==="Enter" || e.keyCode===13)
      handleSubmitClick(e);
   else if (ignoreKeys.includes(e.key) || e.ctrlKey) return;
   else {
      barcodeElem.value = "";
      barcodeElem.style.height = "50px";
      outputElem.value = "";
      stepsElem.value = "";
      stepsElem.style.height = "50px";
   }
}

function handleClear(e) {
   e.currentTarget.blur();
   dataElem.value = "";
   barcodeElem.value = "";
   barcodeElem.style.height = "50px";
   outputElem.value = "";
   stepsElem.value = "";
   stepsElem.style.height = "50px";
}

function handleCopyOutput(e) {
   e.currentTarget.blur();
   let output = outputElem.value.trim();
   if (!output) {
      alert("There is no output to copy.");
      return;
   }
   navigator.clipboard.writeText(output).then(
      () => alert(output + "\nwas copied to the clipboard")
   );
   if (window.getSelection) window.getSelection().removeAllRanges();
   else if (document.getSelection) document.getSelection().empty();
}