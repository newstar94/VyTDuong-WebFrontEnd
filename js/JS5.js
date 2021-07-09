
$.ajax({
    url:"http://api.openweathermap.org/data/2.5/forecast",
    method: "GET",
    data:{
        q:"Hanoi,vietnam",
        units:"metric",
        appid:"09a71427c59d38d6a34f89b47d75975c",
        lang:"vi"
    },
    success:function (rs){
        locat.innerHTML=rs.city.name;
        des.innerHTML=rs.list[0].weather[0].description;
        hum.innerHTML="Độ ẩm: "+rs.list[0].main.humidity + "%";
        wind.innerHTML="Gió: "+rs.list[0].wind.speed + " km/h";
        press.innerHTML="Áp suất: "+rs.list[0].main.pressure +" atm";
        temp.innerHTML=parseInt(rs.list[0].main.temp);
        iconmain.src = "https://openweathermap.org/img/w/" + rs.list[0].weather[0].icon + ".png"
        var p =[];
        p = rs.list;
        var row = $("#row");
        for (var i=0;i<40;i=i+8){
            var ct = "<div class=\"col-md-2\">\n" +
                "                <img src=\""+"https://openweathermap.org/img/w/" +p[i].weather[0].icon + ".png"+"\" width=\"100%\">\n" +
                "                <span class=\"min\">"+p[i].main.temp_min+"</span>\n" +
                "                <span class=\"max\">"+p[i].main.temp_max+"</span>\n" +
                "            </div>";
            row.append(ct);
        }

    }
})