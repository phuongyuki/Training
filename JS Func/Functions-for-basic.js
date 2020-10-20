function checkIncludes(){
    var str = "Welcome to join NodeJS/ReactJS Community!";
    var check = str.includes("join");
    if (check){
        length = str.length;
        str = "The length of string is " + length;
    }
    else
        str = "The string doesn't includes the specified value"
    document.getElementById("includes-function").innerHTML = str;
}

function splitFunction(){
    var str = "Welcome to join NodeJS/ReactJS Community!";
    var check = str.split(" ");
    document.getElementById("split-function").innerHTML = check;
}

function stringifyJSON(){
    var obj = {name : "Phuong", age : 24, city : "Ho Chi Minh"};
    var myJSON = JSON.stringify(obj);
    document.getElementById("JSON-Stringify").innerHTML = myJSON;
}

function toStringCheck(){
    document.getElementById("to-string-function").innerHTML = (100 + 23).toString();
}

function checkArray(){
    var date = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var x = document.getElementById("array-function");
    if (Array.isArray(date)){
        str = "This is an array: " + date;
    }
    else
        str = "This isn't an array!";
    x.innerHTML = str;
}

function sortFunction(){    
    date.sort();
    document.getElementById("sort-function").innerHTML = date;    
}

function toFixedFunction(){
    var num = Math.PI;
    var n = num.toFixed(2);
    document.getElementById("tofixed-function").innerHTML = "The number is " + n;
}

var date = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
date.forEach(forEachFunction);
function forEachFunction(item, index){
    index = index + 2;
    if (index < 8)
        index = "Thu " + index;
    else
        index = "Chu Nhat";
    document.getElementById("foreach-function").innerHTML += item + ": " + index + "<br>";
}