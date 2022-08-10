let counter =0;

function magic() {

    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    /* console.log(num1,num2); */

    if (num1 === num2){
        document.getElementById("dice1").src=num1 + ".jpg";
        document.getElementById("dice1").className = "animate__animated animate__bounce animate__infinite";
        document.getElementById("dice2").src=num2 + ".jpg";
        document.getElementById("dice2").className = "animate__animated animate__bounce animate__infinite";
        document.getElementById("result").innerHTML = "יצא לך דאבל אחי כל הכבוד";
        if (num1 === 6) {
            document.getElementById("result").innerHTML = "יצא לך שש שש אחי כל הכבוד";
        }
        counter++;
    }
    else{
        document.getElementById("dice1").src=num1 + ".jpg";
        document.getElementById("dice1").className = "";
        document.getElementById("dice2").src=num2 + ".jpg";
        document.getElementById("dice2").className = "";
        document.getElementById("result").innerHTML = " לא נורא נסה שוב";

    }
    document.getElementById("counter").innerHTML = "כמות הפעמים שיצא לך דאבל:" +counter
}

