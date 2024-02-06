function RollDice() {
    document.getElementById("die1").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("die2").value = Math.floor(Math.random() * 6) + 1;
    
    DoCalculations();
}

function DoCalculations() {
    d1 = document.getElementById("die1").value;
    d2 = document.getElementById("die2").value;

    d1 = Number(d1);
    d2 = Number(d2);

    sum = d1 + d2;
    calculation = "You can shut " + d1 + ", " + d2 + ", or " + sum + "<br>";

    document.getElementById("calculations").innerHTML = calculation;
}

window.document.getElementById("enter-btn").addEventListener("keypress", ({key}) => {
    if (key = "Enter") {
        RollDice();
    }
});

