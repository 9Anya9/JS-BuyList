$(function() {
    var $list = $(".inner");
    var $list_right=$(".items-list");
    var $list_bought_right=$(".what-was-bought");
    var ONE_ROW_HTML = $("#item-temp").html();
    var ONE_SEGMENT = $("#item-temp-right").html();

    function addItem(title) {
        var $node = $(ONE_ROW_HTML);
        var $node_right = $(ONE_SEGMENT);
        var quantity = 1;
        var $quantity_label = $node.find(".label-count");
        var $quantity_orange = $node_right.find(".orange-circle");
        //$quantity_orange.text(quantity_right);

        $node.find(".item-name-2").text(title);
        $node_right.find(".label").text(title);

        $node.find(".button-minus").prop("disabled", true);

        $node.find(".button-plus").click(function () {
            $node.find(".button-minus").prop("disabled", false);
            quantity += 1;
            $quantity_label.text(quantity);
            $quantity_orange.text(quantity);

        });

        $node.find(".button-minus").click(function () {
            if (quantity > 1) {
                quantity -= 1;
                $quantity_label.text(quantity);
                $quantity_orange.text(quantity);
            }

        });

        $node.find(".item-name-2").click(function () {
            $node.find(".item-name-2").hide();
            $node.find(".edit").show();
            $node.find(".edit").val(title);
        });

        $node.find(".edit").focusout(function () {
            $node.find(".item-name-2").show();
            $node.find(".edit").hide();

            title = $node.find(".edit").val();
            $node.find(".item-name-2").text(title);
            $node_right.find(".label").text(title);
        });

        $node.find(".button-delete").click(function () {
            $node.slideUp(function () {
                $node.remove();
                $node_right.remove();
            });
        });

        $node.find(".button-bought").click(function () {
            $node.addClass("is-bought");
            $list_bought_right.append($node_right);
           $list_bought_right.addClass("bought");

        });

        $node.find(".button-un-bought").click(function () {
            $node.removeClass("is-bought");
            $list_right.append($node_right);

        });

        $list.append($node);
        $node.hide();
        $node.slideDown();
        $list_right.append($node_right);
    }

    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");

    var $add_new = $(".input-text");

    $(".button-add").click(function () {
        var new_name = $add_new.val();
        if(new_name.trim()) {
            addItem(new_name);
            $add_new.val("");
            $add_new.focus();
        }
    });
});