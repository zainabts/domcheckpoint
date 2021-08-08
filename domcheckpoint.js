var hearts = document.getElementsByClassName("bi-heart");
var plus = document.getElementsByClassName("bi-plus-square");
var minus = document.getElementsByClassName("bi-dash-square");
var trash = document.getElementsByClassName("bi-trash");
var adding = document.getElementsByClassName("addprice");
var total = document.getElementById("finalprice");


for(var heart of hearts) {
    heart.onclick = function(e) {
        e.target.classList.toggle("bi-heart-fill");
        e.target.classList.toggle("bi-heart");
    }
}

for(let erase in trash) {
    trash[erase].onclick = function(e) {
        let hrs = document.getElementsByTagName('hr');
        e.target.parentElement.parentElement.remove();
        hrs[erase].remove();
        calculateTotal();
    }

}

for(let number in plus) {
    plus[number].onclick = function() {
        increase(number);
    }
}

for(let number in minus) {
    minus[number].onclick = function() {
        decrease(number);
    }
}

function increase(number) {
    let element = document.getElementById(`quantity-${number}`);
    let count = +element.innerText;
    count ++;
    element.innerText = count;
    calculateTotal(number);
}

function decrease(number) {
    let element = document.getElementById(`quantity-${number}`);
    let count = +element.innerText;
    if (count > 0) {
        count --;
        element.innerText = count;
        calculateTotal();
    }
}

function calculateTotal() {
    let finalPrice = 0;
    let quantities = document.getElementsByClassName("quantity");

    for (let index = 0; index < adding.length; index++) {
        let count = +quantities[index].innerText;
        let price = +adding[index].innerText;
        finalPrice += price * count;        
    }
    total.innerText = finalPrice;
}






// var add = document.getElementById("quantity3");
// var press = document.getElementById("trialadd");

// function linking(){
//     var count = +add.innerText;
//     count++;
//     add.innerText = count;
// }
   