function fetchEdnaValues() {
    $.ajax({
        //fetch revisions data from sever
        url: document.getElementById("bakedUrl").value,
        type: "GET",
        dataType: "json",
        success: function (data) {
            WriteLineConsole(JSON.stringify(data));
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function createUrl() {
    var serverBaseAddress = document.getElementById("serverBaseAddressInput").value;
    var historyType = document.getElementById("historyType").value;
    var pnt = document.getElementById("pnt").value;
    var strtime = document.getElementById("strtime").value;
    var endtime = document.getElementById("endtime").value;
    var secs = document.getElementById("secs").value;
    var type = document.getElementById("type").value;
    var url = "";
    if (historyType == "real") {
        url = serverBaseAddress + "/api/values/" + historyType + "?pnt=" + pnt;
    } else if (historyType == "history") {
        url = serverBaseAddress + "/api/values/" + historyType + "?pnt=" + pnt + "&strtime=" + strtime + "&endtime=" + endtime + "&secs=" + secs + "&type=" + type;
    }
    document.getElementById("bakedUrl").value = url;
}