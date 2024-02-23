// function RollDice() {
//     document.getElementById("die1").value = Math.floor(Math.random() * 6) + 1;
//     document.getElementById("die2").value = Math.floor(Math.random() * 6) + 1;
    
//     DoCalculations();
// }

function DoCalculations() {
    d1 = document.getElementById("die1").value;
    d2 = document.getElementById("die2").value;

    d1 = Number(d1);
    d2 = Number(d2);

    sum = d1 + d2;
    calculation = "You can shut " + d1 + ", " + d2 + ", or " + sum + "<br>";

    document.getElementById("calculations").innerHTML = calculation;
}

// var input = document.getElementById("enter-btn");
// input.addEventListener("keydown", function (event) {
//     if (event.key == "Enter") {
//         fetchGenerateNum1To6();
//     }
// });

// document.getElementById('enter-btn').focus();

async function fetchGenerateNum1To6() {
    const url = "https://shut-the-box-server.azurewebsites.net/generateNum1To6";

    for (i = 1; i < 3; i++) {
        const response = await fetch(url);
        const responseText = await response.text();
        console.log(response);
        console.log(responseText);
        document.getElementById("die" + i).value = responseText;
    }

    DoCalculations();
}

