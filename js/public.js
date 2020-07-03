
let username = localStorage.getItem("username") || "";
console.log("123");

if (username) {
    $(".userInfo").text(`${username}:欢迎您`);
    $(".status").text("注销").css({
        "color": "blue",
        "cursor": "pointer"
    });
} else {
    $(".userInfo").text(`Hi,请`);
    $(".status").text("登录").css({ "color": "red", "cursor": "pointer" });
}
$(".status").click(function () {
    if ($(this).text() == "登录") {
        location.href = "./login.html";
    } else {
        localStorage.removeItem("user_id")
        localStorage.removeItem("username");
        /* 重新加载 */
        window.location.reload();
    }

})

