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

var subject = ["Math", "History", "Chemistry"];
document.getElementById("push-function").innerHTML = subject;
function pushFucntion(){
    subject.push("Literature");
    document.getElementById("push-function").innerHTML = subject;
}

function mapFunction(){
    var date = [2, 4, 6, 8];
    var n = date.map(Math.pow);
    x = document.getElementById("map-function")
    x.innerHTML = n;
}

var nums = [31, 7, 9, 7];
function reduceFunction(total, num){
    return total - num;
}
function callReduceFunction(){
    document.getElementById("reduce-function").innerHTML = nums.reduce(reduceFunction);
}

var date = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function filterFunction(date){
    return date.length > 6;
}
function callFilterFunction(){
    document.getElementById("filter-function").innerHTML = date.filter(filterFunction);
}

function checkDateFunction(){
    var d = new Date();
    var n = d.getDay();
    if (n == 1)
        str = "Monday";
    else if (n == 2)
        str = "Tuesday";
    else if (n == 3)
        str = "Wednesday";
    else if (n == 4)
        str = "Thursday";
    else if (n == 5)
        str = "Friday";
    else if (n == 6)
        str = "Saturday";
    else if (n == 0)
        str = "Sunday";
    document.getElementById("getDay-function").innerHTML = "Today is " + str;
}
