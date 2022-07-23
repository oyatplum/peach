var Links = {
    SetColor:function (color){
//         var alist = document.querySelectorAll('a');
//     var i = 0;
//     while(i < alist.length){
//         console.log(alist[i]);
//         alist[i].style.color = color;
//         i = i + 1;
//     }
        $('a').css('color',color);
}
}
var Body = {
    SetColor:function (color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function dark_bright_handler(self){
    var target = document.querySelector('body');
if(self.value === 'dark'){
    Body.SetColor('rgb(218, 132, 128)');
    self.value = 'bright';
    Links.SetColor('black');
    }
else{
    Body.SetColor('rgb(237, 172, 169)');
    self.value = 'dark';
    Links.SetColor('white');
    }
}
