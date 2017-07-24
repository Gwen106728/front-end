/**
 * Created by guwenting on 2017/7/24.
 */
function isArray(fn) {
    console.log(fn instanceof Array)
}
isArray([123,123])

function deepClone(obj){
    var result,oClass=isClass(obj);
    //确定result的类型
    if(oClass==="Object"){
        result={};
    }else if(oClass==="Array"){
        result=[];
    }else{
        return obj;
    }
    for(key in obj){
        var copy=obj[key];
        if(isClass(copy)=="Object"){
            result[key]=arguments.callee(copy);//递归调用
        }else if(isClass(copy)=="Array"){
            result[key]=arguments.callee(copy);
        }else{
            result[key]=obj[key];
        }
    }
    return result;
}
//返回传递给他的任意对象的类
function isClass(o){
    if(o===null) return "Null";
    if(o===undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = deepClone(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

function uniqArray(arr) {
    var res = [];
    var json = {};
    for (i in arr){
        if (!json[arr[i]]){
            res.push(arr[i]);
            json[arr[i]] = 1;
        }
    }
    return res
}
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    var item = document.getElementById(element);
    var tagname = document.getElementsByTagName("span");
    console.log(tagname[0].id);
    item.className = newClassName;


    // your implement
}
addClass('result', 'newclass');

function getPosition(element, num) {
    var item = document.getElementsByTagName(element);
    var x = item[num].getBoundingClientRect().left;
    var y = item[num].getBoundingClientRect().top
    console.log([x, y])
}
getPosition('input' ,0);

function addEvent(element, event, listener) {
    if (element.addEventListener) { //标准
        element.addEventListener(event, listener, false);
    } else if (element.attachEvent) { //低版本ie
        element.attachEvent("on" + event, listener);
    } else { //都不行的情况
        element["on" + event] = listener;
    }
}

function removeEvent(element, event, listener) {
    // your implement
    if (element.removeEventListener) { //标准
        element.removeEventListener(event, listener, false);
    } else if (element.detachEvent) { //低版本ie
        element.detachEvent("on" + event, listener);
    } else { //都不行的情况
        element["on" + event] = null;
    }
}
function clickListener(event) {
    console.log(event);
}
function renderList() {
    $("#list").innerHTML = '<li>new item</li>';
}

function init() {
    each($("#list").getElementsByTagName('li'), function('li') {
        $.click('li', clickListener);
    });

    $.click($("#btn"), renderList);
}
init();