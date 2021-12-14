let span = document.querySelector("#span");
let style = document.querySelector("#style")
let n = 0;
let string2 = "";
let string = `/*你好，我叫retblank，是一个前端小白。
* 接下来我演示一下我的前端功底。首先我要准备一个div，现在我来把这个div变成一个圆，
*/
#div1 {
    box-shadow:0 0 3px rgba(0,0,0,.5);
    border-radius:50%;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#wrapper {
    border-radius:50%;
    border:none;
    
}
/*
* 我下面加上两个小圆，你看仔细了
*/
#div1::before{
    top:0px;
    border-radius:50%;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}
#div1::after{
    bottom:0px;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}
/*
* 最后我来给我自己整个背景*/
#span {
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}

`

let step = () => {
    setTimeout(() => {

        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp;'
        } else {
            string2 += string[n]
        }
        console.log(string2)
        span.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999)
        span.scrollTo(0, 9999)
        if (n < string.length - 1) {
            step();
            n += 1;
        }
    }, 10);
};

step();



