/**
 * Created by guwenting on 2017/7/24.
 */
function checkhabbitcontent() {
    var habbit_content = $("#habbit").val();
    var re_content = /\w+/g;
    var words = habbit_content.split(/[ \n,\.\+\*\s]/g);
    var wordslist = [];
    for (i in words){
        if(words[i] != ''){
            wordslist.push(words[i])
        }
    }
    return wordslist
}

$("#get").click(function () {
    var wordslist = checkhabbitcontent();
    var input = document.createElement("input");
    input.value = wordslist.join(',');
    var farter = document.getElementById("container");
    farter.appendChild(input);
    console.log(words)
});
function testhabbitNum(vl) {
    var wordslist = checkhabbitcontent();
    if ( wordslist.length > 10){
        var x = "you habbit is more than ten, plase modify it ";
        document.getElementById("warn").innerHTML = x;
        $("#get").attr("disabled", true);
    }
    else if (0< wordslist.length <= 10){
        $("#get").attr("disabled", false);
        $("#warn").html("");
    }

}
