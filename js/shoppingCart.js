$(() => {
    $.ajax({
        url: "./php/shoppingCart.php",
        dataType: "json",
    }).done(data => {
        // console.log(data);
        let html = data.map(item => {
            return `
                <div class="shopping_commodity">
                        <input type="checkbox"> <img src="${item.catimg}" alt="">
                        <span><a href="">${item.name}</a></span>
                        <b>${item.price}</b>
                        <div class="shopping_num">
                            <input type="button" class="reduceBtn" value="-">
                            <input class="num" type="text" value="${item.num}">
                            <input type="button" class="addBtn" value="+">
                        </div>
                        <strong>${item.price}</strong>
                    </div>
                `
        }).join("");
        $(".shopping_lsit_c").html(html);
    })

    $(".shopping_list").on("click", "#checked", function () {
        console.log(123);
        if (!$(this).checked) {

        }

    })



    let count = 1

    $(".shopping_lsit_c").on("click", ".reduceBtn", function () {
        count--
        if (count < 1) {
            count = 1
        }
        else {
            $(this).next().val(count)
        }
        $(this).parent().next().text(count * $(this).parent().prev().text())
    })
    $(".shopping_lsit_c").on("click", ".addBtn", function () {

        count++
        $(this).prev().val(count)
        $(this).parent().next().text(count * $(this).parent().prev().text())

    })
    console.log(count);


})