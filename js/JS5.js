
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
        temp.innerHTML=rs.list[0].main.temp;
        icon.src = "https://openweathermap.org/img/w/" + rs.list[0].weather[0].icon + ".png"
    }
})