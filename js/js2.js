var selectednumber=[];
function confirm(){
    var input = document.getElementById("number");
    var num = parseInt(input.value);
    if(!selectednumber.includes(num)&&selectednumber.length<5&&num>=0&&num<=99){
        selectednumber.push(num);
        alert("Ban da lua chon so: "+num);
        var num1=document.getElementById('num1');
        num1.innerHTML=selectednumber;
    }
}
function test(){
    if(selectednumber.length==5){
        var luckynumber=[];
        while(luckynumber.length<5){
            var n = parseInt(Math.random()*99+1);
            if(!luckynumber.includes(n)){
                luckynumber.push(n);
            }
        }
        var kq=document.getElementById('kq');
        kq.innerHTML=luckynumber;
        setTimeout(gift,500);
        function gift(){
            var count = 0;
            for(var i=0;i<5;i++){
                if(luckynumber.includes(selectednumber[i])){
                    count++;
                }
            }
            switch (count){
                case 3: alert("Chuc mung ban da trung thuong 500.000VND");break;
                case 4: alert("Chuc mung ban da trung thuong 20.000.000VND");break;
                case 5: alert("Chuc mung ban da trung thuong 10.000.000.000VND");break;
                default: alert("Rat tiec, chuc ban may man lan sau.");
            }
        }
    }
}
