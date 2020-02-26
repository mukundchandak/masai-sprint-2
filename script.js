var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var b3 = document.getElementById('b3')
var b4 = document.getElementById('b4')
var b5 = document.getElementById('b5')
var b6 = document.getElementById('b6')
var b7 = document.getElementById('b7')
var b8 = document.getElementById('b8')
var b9 = document.getElementById('b9')

function funcB1(){
    var play = document.getElementById('player').value

    if(play == 'p1'){
        b1.style.backgroundColor = 'brown'
        b1.innerHTML = 1
        // alert('player2 turn')
    }
    else{
        b1.style.backgroundColor = 'green'
        b1.innerHTML = 2
        // alert('player1 turn')
    }
}

function funcB2(){
    var play = document.getElementById('player').value

    if(play == 'p1'){
        b2.style.backgroundColor = 'brown'
        b2.innerHTML = 1
    }
    else{
        b2.style.backgroundColor = 'green'
        b2.innerHTML = 2
    }
}

function funcB3(){
    var play = document.getElementById('player').value

    if(play == 'p1'){
        b3.style.backgroundColor = 'brown'
        b3.innerHTML = 1
    }
    else{
        b3.style.backgroundColor = 'green'
        b3.innerHTML = 2
    }
}

function funcB4(){
    var play = document.getElementById('player').value

    if(play == 'p1'){
        b4.style.backgroundColor = 'brown'
        b4.innerHTML = 1
    }
    else{
        b4.style.backgroundColor = 'green'
        b4.innerHTML = 2
    }
}

function funcB5(){
    var play = document.getElementById('player').value

    if(play == 'p1'){
        b5.style.backgroundColor = 'brown'
        b5.innerHTML = 1
    }
    else{
        b5.style.backgroundColor = 'green'
        b5.innerHTML = 2
    }
}

function funcB6(){
    var play = document.getElementById('player').value

    if(play == 'p1'){
        b6.style.backgroundColor = 'brown'
        b6.innerHTML = 1
    }
    else{
        b6.style.backgroundColor = 'green'
        b6.innerHTML = 2
    }
}

function funcB7(){
    var play = document.getElementById('player').value

    if(play == 'p1'){
        b7.style.backgroundColor = 'brown'
        b7.innerHTML = 1
    }
    else{
        b7.style.backgroundColor = 'green'
        b7.innerHTML = 2
    }
}

function funcB8(){
    var play = document.getElementById('player').value

    if(play == 'p1'){
        b8.style.backgroundColor = 'brown'
        b8.innerHTML = 1
    }
    else{
        b8.style.backgroundColor = 'green'
        b8.innerHTML = 2
    }
}

function funcB9(){
    var play = document.getElementById('player').value

    if(play == 'p1'){
        b9.style.backgroundColor = 'brown'
        b9.innerHTML = 1
    }
    else{
        b9.style.backgroundColor = 'green'
        b9.innerHTML = 2
    }
}

b1.addEventListener('click',funcB1)
b2.addEventListener('click',funcB2)
b3.addEventListener('click',funcB3)
b4.addEventListener('click',funcB4)
b5.addEventListener('click',funcB5)
b6.addEventListener('click',funcB6)
b7.addEventListener('click',funcB7)
b8.addEventListener('click',funcB8)
b9.addEventListener('click',funcB9)



var box = document.querySelectorAll('.box')


function detect(){
    console.log(1)
    var a = b1.innerHTML
    var b = b2.innerHTML
    var c = b3.innerHTML
    var d = b4.innerHTML
    var e = b5.innerHTML
    var f = b6.innerHTML
    var g = b7.innerHTML
    var h = b8.innerHTML
    var i = b9.innerHTML

    if(a == '1' && b == '1' && c == '1'){
        alert('Player 1 Won. Hurray!');
    }
    else if(a == '2' && b == '2' && c == '2'){
        alert('Player 2 Won. Hurray!');
    }
    else if(d == '1' && e == '1' && f == '1'){
        alert('Player 1 Won. Hurray!');
    }
    else if(d == '2' && e == '2' && f == '2'){
        alert('Player 2 Won. Hurray!');
    }
    else if(g == '1' && h == '1' && i == '1'){
        alert('Player 1 Won. Hurray!');
    }
    else if(g == '2' && h == '2' && i == '2'){
        alert('Player 2 Won. Hurray!');
    }
    else if(a == '1' && d == '1' && g == '1'){
        alert('Player 1 Won. Hurray!');
    }
    else if(a == '2' && d == '2' && g == '2'){
        alert('Player 2 Won. Hurray!');
    }
    else if(b == '1' && e == '1' && h == '1'){
        alert('Player 1 Won. Hurray!');
    }
    else if(b == '2' && e == '2' && h == '2'){
        alert('Player 2 Won. Hurray!');
    }
    else if(c == '1' && f == '1' && i == '1'){
        alert('Player 1 Won. Hurray!');
    }
    else if(c == '2' && f == '2' && i == '2'){
        alert('Player 2 Won. Hurray!');
    }
    else if(a == '1' && e == '1' && i == '1'){
        alert('Player 1 Won. Hurray!');
    }
    else if(a == '2' && e == '2' && i == '2'){
        alert('Player 2 Won. Hurray!');
    }
    else if(g == '1' && e == '1' && c == '1'){
        alert('Player 1 Won. Hurray!');
    }
    else if(g == '2' && e == '2' && c == '2'){
        alert('Player 2 Won. Hurray!');
    }
     
}

b1.addEventListener('click', detect)
b2.addEventListener('click', detect)
b3.addEventListener('click', detect)
b4.addEventListener('click', detect)
b5.addEventListener('click', detect)
b6.addEventListener('click', detect)
b7.addEventListener('click', detect)
b8.addEventListener('click', detect)
b9.addEventListener('click', detect)

