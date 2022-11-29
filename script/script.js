
function sim() {
    alert('TE AMO MUITO ><');
}

let flag = 1;

n = document.getElementById("nao");

function nope() {
    if (flag==1) {
        n.style.top = 364 + 'px';
        n.style.left = 300 + 'px';
        flag = 2;
    } else if (flag==2) {
        n.style.top = 476 + 'px';
        n.style.left = 78 + 'px';
        flag = 3;
    } else if (flag==3) {
        n.style.top = 358 + 'px';
        n.style.left = 147 + 'px';
        flag = 4;
    } else if (flag==4) {
        n.style.top = 490 + 'px';
        n.style.left = 134 + 'px';
        flag = 5;
    } else if (flag==5) {
        n.style.top = 234 + 'px';
        n.style.left = 150 + 'px';
        flag = 6;
    } else if (flag==6) {
        n.style.top = 345 + 'px';
        n.style.left = 165 + 'px';
        flag = 1;
    }
} 



    
