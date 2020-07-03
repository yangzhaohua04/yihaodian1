$(() => {
    /* 1、发送网络请求获取服务器端的数据 */
    $.ajax({
        url: "./php/productList.php",
        dataType: "json",
    }).done(data => {
        // console.log(data);

        let html = data.map(item => {
            return `
            <li>
            <a href=""><img src="${item["img"]}" alt=""></a>
            <p><a href="">${item.titile}</a></p>
            <div class="list_bottom">
                <div class="list_box">
                    <span>已售${item.percent}</span>
                    <div class="jindutiao">
                        <span></span>
                        <i style="width: ${item.percent}"></i>
                    </div>
                    <div class="boutique_show">
                        <b>¥${item.price}. <strong>0</strong></b>
                        <span>${item.price2}</span>
                        <p>加入购物车</p>
                    </div>
                </div>
            </div>
             </li>
                `
        }).join("");
        $(".boutique_list>ul").html(html);
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 140) {
            $(".pro_top_list").addClass("fixed");
        }
        else {
            $(".pro_top_list").removeClass("fixed");
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".right_box").addClass("opacity");
        }
        else {
            $(".right_box").removeClass("opacity");
        }
    })



})


