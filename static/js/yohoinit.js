window.onresize = function () {
    "use strict";
    getWinSize();
};
window.onload = function () {
    var myDate = new Date();
	$("#bottomLine").text($("#bottomLine").text().replace(/thisyear/g, myDate.getFullYear()));
};
function getWinSize() {
    "use strict";
    $("#bottomLine").css("top", $(window).height() - $("#bottomLine").outerHeight(true));
    $("#screen").css("width", $(window).width());
    $("#screen").css("height", $(window).height());
    if ($("#jsGrid").outerWidth() > $(window).width()) {
        $("#jsGrid").css("width", $(window).width());
    } else {
        $("#jsGrid").css("width", "620px");
    }
    if ($("#jsGrid").outerHeight() > $(window).height()) {
        $("#jsGrid").css("height", $(window).height());
    } else {
        $("#jsGrid").css("height", "500px");
    }
    $("#jsGridBox").css("top", ($(window).height() - $("#jsGrid").outerHeight() + $("#headpic").outerHeight()) / 2);
    if ($("#jsGrid").outerHeight() + $("#headpic").outerHeight() > $(window).height()) {
        $("#jsGridBox").css("top", ($(window).height() - $("#jsGrid").outerHeight()) / 2);
    }
    $("#jsGridBox").css("left", ($(window).width() - $("#jsGrid").outerWidth()) / 2);
    $("#jsGridBox").css("width", $("#jsGrid").outerWidth());
    $("#jsGridBox").css("height", $("#jsGrid").outerHeight());
    $("#headpic").css("width", $("#jsGridBox").outerWidth());
    $("#headpic").css("height", $("#jsGridBox").outerWidth() / 3.25);
    if ($("#jsGrid").outerHeight() + $("#headpic").outerHeight() > $(window).height()) {
        $("#headpic").css("height", "0px");
    }
    $("#headpic").css("top", $("#jsGridBox").offset().top - $("#headpic").outerHeight());
    $("#headpic").css("left", $("#jsGridBox").offset().left);
}
getWinSize();

$(function () {
    "use strict";
    $("#jsGrid").each(function () {
        $(".jsgrid-control-field").hide();
    });
});
$(function () {
    "use strict";
    $(".jsgrid-header-sortable").each(function () {
        $(this).click(function () {
            $(".jsgrid-control-field").hide();
        });
    });
});
$(function () {
    "use strict";
    $("#jsGrid").each(function () {
        $(this).on('input propertychange keydown change', function () {
            $(".jsgrid-search-button").click();
            $(".jsgrid-control-field").hide();
        });
    });
});
$("#jsGrid").jsGrid({
    width: "103%",
    height: "500px",
    sorting: true,
    filtering: true,
    autoload: true,
    controller: db,

    fields: [{
        title: "昵称",
        name: "name",
        type: "text",
        width: "30%",
        validate: "required"
    }, {
        title: "职务",
        name: "job",
        type: "text",
        width: "70%"
    }, {
        type: "control",
    }, ]
});
