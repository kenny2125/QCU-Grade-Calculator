const ratings = [1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00];
const subjects = document.querySelectorAll('.tablegrade');
const result = document.querySelector('.gwa');
const calcbutton = document.querySelector('.calcu');
const quali = document.querySelector('.honor');


subjects.forEach(subject => {
    const nextbutton = subject.querySelector('.button2');
    const prevbutton = subject.querySelector('.button1');
    const gradecont = subject.querySelector('.Subjectnameone');
    let currentnum = 0;

    nextbutton.addEventListener("click", function() {
        if(currentnum < ratings.length -1) {
            currentnum++;
        }
        gradecont.textContent = ratings[currentnum].toFixed(2);
        calcu();
    });


    prevbutton.addEventListener("click", function() {
        if(currentnum > 0) {
            currentnum--;
            
        }
        gradecont.textContent = ratings[currentnum].toFixed(2);
        calcu();
    });

    
    
});


    function calcu() {
       
        const studgrade = Array.from(document.querySelectorAll('.Subjectnameone')).map(gradecont => parseFloat(gradecont.textContent));
        const studunit = Array.from(document.querySelectorAll('.tablegrade')).map(subject => parseInt(subject.getAttribute('data-units')));
        const calcgwa = standingcalc(studgrade, studunit);
        const lowestgwa = Math.max(...studgrade);

        result.textContent = calcgwa.toFixed(2);
        qualif(calcgwa, lowestgwa);


    }

    function standingcalc(studgrade, studunit) {
        const numofunits = studunit.reduce((sum, unit) => sum + unit, 0);
        const finalgwa = studgrade.reduce((acc, grade, index) => acc + (grade * studunit[index]), 0);
        return finalgwa/ numofunits;

    }

    

    function qualif (calcgwa, lowestgwa) {
        if(calcgwa <= 1.25 && calcgwa >=1.00 && lowestgwa <= 1.75) {
            quali.textContent = "Suma Cum Laude";
    }    else if((calcgwa <= 1.25 && lowestgwa <= 2.00) || (calcgwa <= 1.50 && calcgwa > 1.25 && lowestgwa >= 2.00)) {
        quali.textContent = "Magna Cum Laude";
    }    else if ((calcgwa <= 1.50 && lowestgwa <=2.25) || (calcgwa <= 1.75 && calcgwa > 1.50 && lowestgwa >= 2.25)) {
        quali.textContent = "Cum Laude";
    } else {
        quali.textContent = "No Qualification";
        audio.play();
    }
    }
                    calcu();


    