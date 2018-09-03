(function () {

    var db = {

        loadData: function (filter) {
            return $.grep(this.clients, function (client) {
                return (!filter.name || client.name.indexOf(filter.name) > -1) &&
                    (!filter.job || client.job.indexOf(filter.job) > -1);
            });
        },

        insertItem: function (insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function (updatingClient) {},

        deleteItem: function (deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;

    var gridlist;
    $.ajaxSettings.async = false;
    $.getJSON("memdata.json", {
            random: Math.random()
        },
        function (data) {
            "use strict";
            gridlist = eval(data.mem);
            var ylistlength = data.mem.length;
            for (var i = 0; i < ylistlength; i++) {
                gridlist[i].job = pinyinSort(gridlist[i].job);
            }
        });
    //拼音排序
    function pinyinSort(a) {
        "use strict";
        a = a.split(",");
        a.sort(function (a, b) {
            return a.localeCompare(b, 'zh');
        });
        var str = "";
        for (var i = 0; i < a.length; i++) {
            str += a[i];
            if (i !== a.length - 1) {
                str += "/";
            }
        }
        switch (str) {
            case "n":
                str = "<font style=\"color:#999999\">暂无安排</font>";
                break;
            case "r":
                str = "<font style=\"color:#66cc99\">退休</font>";
                break;
            case "m":
                str = "<font style=\"color:#ff0000\">失联</font>";
                break;
        }
        return str;
    }
    db.clients = gridlist;

}());
