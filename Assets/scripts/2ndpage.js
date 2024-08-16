const ratings = [1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00];
const subjects = document.querySelectorAll('.tablegrade');
const result = document.querySelector('.gwa');
const calcbutton = document.querySelector('.calcu');


subjects.forEach(subject => {
    const nextbutton = subject.querySelector('.button2');
    const prevbutton = subject.querySelector('.button1');
    const gradecont = subject.querySelector('.Subjectnameone');
    let currentnum = ratings.indexOf(parseFloat(gradecont.textContent));


    prevbutton.addEventListener("click", function() {
        if(currentnum > 0) {
            currentnum--;
            gradecont.textContent = ratings[currentnum].toFixed(2);
        }
        calcu();
    });

    nextbutton.addEventListener("click", function() {
        if(currentnum < ratings.length -1) {
            currentnum++;
            gradecont.textContent = ratings[currentnum].toFixed(2);
        }
        calcu();
    });
    
});


    function calcu() {
        let totalgwa = 0;
        let totalunits = 0;


        subjects.forEach(subject => {
            const gradecont = subject.querySelector('.Subjectnameone');
            const studgrad = parseFloat(gradecont.textContent);
            const studunit = parseFloat(gradecont.getAttribute('data-units'));

           if(!isNaN(studgrad) && !isNaN(studunit)) {
            totalgwa += studgrad * studunit;
            totalunits += studunit; 
           }         
        });

        if (totalunits > 0) {
            const resgwa = totalgwa / totalunits;
            result.textContent = resgwa.toFixed(2);
        } else {
            result.textContent = "0.00";
        }


    }
   
    
  