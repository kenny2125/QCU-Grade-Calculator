const ratings = [1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00];
const subjects = document.querySelectorAll('.tablegrade');
const result = document.querySelector('.gwa');
const quali = document.querySelector('.honor');

let allGrades = {};
let allUnits = {};


subjects.forEach(subject => {
    const gradecont = subject.querySelector('.Subjectnameone');
    gradecont.textContent = ratings[0].toFixed(2);
});


subjects.forEach(subject => {
    const nextbutton = subject.querySelector('.button2');
    const prevbutton = subject.querySelector('.button1');
    const gradecont = subject.querySelector('.Subjectnameone');
    let currentnum = 0;

    nextbutton.addEventListener("click", function() {
        if (currentnum < ratings.length - 1) {
            currentnum++;
        }
        gradecont.textContent = ratings[currentnum].toFixed(2);
        calcu();
    });

    prevbutton.addEventListener("click", function() {
        if (currentnum > 0) {
            currentnum--;
        }
        gradecont.textContent = ratings[currentnum].toFixed(2);
        calcu();
    });
});

function calcu() {
    const slideIndex = SemIndex;  

    
    const visibleSubjects = Array.from(document.querySelectorAll('.tablecontainer[style="z-index: 1;"] .tablegrade'));
    const currentGrades = visibleSubjects.map(subject => parseFloat(subject.querySelector('.Subjectnameone').textContent));
    const currentUnits = visibleSubjects.map(subject => parseInt(subject.getAttribute('data-units')));

    
    allGrades[slideIndex] = currentGrades;
    allUnits[slideIndex] = currentUnits;

   
    const currentGWA = standingcalc(currentGrades, currentUnits);
    
  
    result.textContent = currentGWA.toFixed(2);

    
    let accumulatedGrades = [];
    let accumulatedUnits = [];

    for (let i = 1; i <= slideIndex; i++) {
        if (allGrades[i] && allUnits[i]) {
            accumulatedGrades = [...accumulatedGrades, ...allGrades[i]];
            accumulatedUnits = [...accumulatedUnits, ...allUnits[i]];
        }
    }

    const cumulativeGWA = standingcalc(accumulatedGrades, accumulatedUnits);
    const lowestGWA = Math.max(...accumulatedGrades);

    result.textContent = cumulativeGWA.toFixed(2);
    qualif(cumulativeGWA, lowestGWA);
}

function standingcalc(studgrade, studunit) {
    const numofunits = studunit.reduce((sum, unit) => sum + unit, 0);
    const finalgwa = studgrade.reduce((acc, grade, index) => acc + (grade * studunit[index]), 0);
    return finalgwa / numofunits;
}

function qualif(calcgwa, lowestgwa) {
    if (calcgwa <= 1.25 && lowestgwa <= 1.75) {
        quali.textContent = "Suma Cum Laude";
    } else if (calcgwa <= 1.50 && lowestgwa <= 2.00) {
        quali.textContent = "Magna Cum Laude";
    } else if (calcgwa <= 1.75 && lowestgwa <= 2.25) {
        quali.textContent = "Cum Laude";
    } else {
        quali.textContent = "No Qualification";
    }
}

var SemIndex = 1;
shownsem(SemIndex);

function PlusSlides(n) {
    shownsem(SemIndex += n);
}

function CurrentSem(n) {
    shownsem(SemIndex = n);
}

function shownsem(n) {
    var slides = document.getElementsByClassName("tablecontainer");

    if (n > slides.length) { SemIndex = 1 }
    if (n < 1) { SemIndex = slides.length }

    for (let current = 0; current < slides.length; current++) {
        slides[current].style.zIndex = "0";
    }

    slides[SemIndex - 1].style.zIndex = "1";

    calcu();            
}

calcu();
shownsem(SemIndex);
