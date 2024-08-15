var sub1 = Subjectnameone * 3;
var sub2 = Subjectnameone2 * 3;
var sub3 = Subjectnameone3 * 3;
var sub4 = Subjectnameone4 * 3;
var sub5 = Subjectnameone5 * 3;
var sub6 = Subjectnameone6 * 3;
var sub7 = Subjectnameone7 * 2;
var sub8 = Subjectnameone8 * 3;
var gwa = (sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8) / 20;

const result = document.querySelector(".gwa");

function finalgwa () {
    result.textContent = gwa.toFixed(2);
}

let ratings = [1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00]
let currentnum = 0;

const Subjectnameone = document.querySelector(".Subjectnameone");

document.querySelector(".button2").addEventListener("click", function() {
    if (currentnum < ratings.length - 1) {
        currentnum++;
    }

    Subjectnameone.textContent = ratings[currentnum].toFixed(2);

});

document.querySelector(".button1").addEventListener("click", function(){

    if (currentnum > 0) {
        currentnum--;
    }
    Subjectnameone.textContent = ratings[currentnum].toFixed(2);


});




let ratings2 = [1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00]
let currentnum2 = 0;


const Subjectnameone2 = document.querySelector(".Subjectnameone2");

document.querySelector(".button4").addEventListener("click", function() {
    if (currentnum2 < ratings2.length - 1) {
        currentnum2++;
    }

    Subjectnameone2.textContent = ratings2[currentnum2].toFixed(2);

});

document.querySelector(".button3").addEventListener("click", function(){

    if (currentnum2 > 0) {
        currentnum2--;
    }
    Subjectnameone2.textContent = ratings2[currentnum2].toFixed(2);


});






let ratings3 = [1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00]
let currentnum3 = 0;

const Subjectnameone3 = document.querySelector(".Subjectnameone3");

document.querySelector(".button6").addEventListener("click", function() {
    if (currentnum3 < ratings3.length - 1) {
        currentnum3++;
    }

    Subjectnameone3.textContent = ratings3[currentnum3].toFixed(2);

});

document.querySelector(".button5").addEventListener("click", function(){

    if (currentnum3 > 0) {
        currentnum3--;
    }
    Subjectnameone3.textContent = ratings3[currentnum3].toFixed(2);


});







let ratings4 = [1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00];
let currentnum4 = 0;

const Subjectnameone4 = document.querySelector(".Subjectnameone4");

document.querySelector(".button8").addEventListener("click", function() {

    if(currentnum4 < ratings4.length - 1) {
        currentnum4++;
    }

    Subjectnameone4.textContent = ratings4[currentnum4].toFixed(2);
})

document.querySelector(".button7").addEventListener("click", function() {

    if(currentnum4 > 0) {
        currentnum4--;
    }


    Subjectnameone4.textContent = ratings4[currentnum4].toFixed(2);



})

let ratings5 = [1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00]
let currentnum5 = 0;

const Subjectnameone5 = document.querySelector(".Subjectnameone5");

document.querySelector(".button10").addEventListener("click", function() {
    if (currentnum5 < ratings5.length - 1) {
        currentnum5++;
    }


    Subjectnameone5.textContent = ratings5[currentnum5].toFixed(2);

})

document.querySelector(".button9").addEventListener("click", function() {

    if (currentnum5 > 0) {
        currentnum5--;
    }

    Subjectnameone5.textContent = ratings5[currentnum5].toFixed(2);

})





let ratings6 = [1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00]
let currentnum6 = 0;


const Subjectnameone6 = document.querySelector(".Subjectnameone6");


document.querySelector(".button12").addEventListener("click", function() {

    if(currentnum6 < ratings6.length - 1) {
        currentnum6++;
    }

    Subjectnameone6.textContent = ratings6[currentnum6].toFixed(2);



})


document.querySelector(".button11").addEventListener("click", function() {
    if (currentnum6 > 0) {
        currentnum6--;
    }

    Subjectnameone6.textContent = ratings6[currentnum6].toFixed(2);

})




let ratings7 = [1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00]
let currentnum7 = 0;


const Subjectnameone7 = document.querySelector(".Subjectnameone7");

document.querySelector(".button14").addEventListener("click", function() {
    if (currentnum7 < ratings7.length - 1) {
        currentnum7++;
    }

    Subjectnameone7.textContent =  ratings7[currentnum7].toFixed(2);
})

document.querySelector(".button13").addEventListener("click", function() {
    if (currentnum7 > 0) {
        currentnum7--;
    }

    Subjectnameone7.textContent =  ratings7[currentnum7].toFixed(2);
})





let ratings8 = [1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00]
let currentnum8 = 0;

const Subjectnameone8 = document.querySelector(".Subjectnameone8");

document.querySelector(".button16").addEventListener("click", function() {
    if (currentnum8 < ratings8.length - 1) {
        currentnum8++;
    }
    Subjectnameone8.textContent = ratings8[currentnum8].toFixed(2);

})

document.querySelector(".button15").addEventListener("click", function(){
    if (currentnum8 > 0) {
        currentnum8--;
    }
    Subjectnameone8.textContent = ratings8[currentnum8].toFixed(2);
})