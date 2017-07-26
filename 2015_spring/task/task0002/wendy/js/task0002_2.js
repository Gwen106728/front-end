var date3, t1 = 0;
$("#check").click(function () {
    var data = $("#data").val();
    var date_list = data.split("-");
    var year = date_list[0];
    var mon = date_list[1];
    var day = date_list[2];
    var string1 = "距离" + year + "年" + mon + "月" + day + "日还有";
    var regEx = new RegExp("\\-","gi");
    data=data.replace(regEx,"/");
    var enddate = new Date(data);
    var nowdate = new Date();

    date3 = enddate.getTime() - nowdate.getTime();

    t1 = window.setInterval(hello, 1000,string1);
});

function getstring() {
    //计算出相差天数
    var days = Math.floor(date3 / (24 * 3600 * 1000));

    //计算出小时数
    var leave1 = date3 % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));

    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));

    //计算相差秒数
    var leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);

    var string2 = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";

    return string2
}

function hello(string1) {
    var string3 = string1 + getstring();
    $("#out").html(string3);
    date3 -= 1000;
    if (date3 == 0){
        window.clearInterval(t1)
    }
}