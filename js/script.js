var es = parseInt(prompt("Che esercizio eseguire? \r\n 1 - Bici \r\n 2 - Squadre \r\n 3 - Zucchine \r\n 4 - Zucchine Corte/Lunghe")); 
if (es == 1) {
    /* Creare un array di oggetti:
    Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore. */
    var bici = [
        {
            nome: "bike1",
            peso: 10
        },
        {
            nome: "bike2",
            peso: 13
        },
        {
            nome: "bike3",
            peso: 19
        },
        {
            nome: "bike4",
            peso: 8
        },
        {
            nome: "bike5",
            peso: 20
        }
    ]

    var leggera = bici[0];
    for (var i = 0; i < bici.length; i++) {
        if (bici[i].peso < leggera.peso) leggera = bici[i];
    }

    document.getElementById("text").innerHTML = "La bici " + leggera.nome + " pesa " + leggera.peso + "kg: è la più leggera.";
}
else if (es == 2) {

    /* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti */
        var squadre = [
        {
            nome: "rossi",
            punti: 0,
            falli: 0
        },
        {
            nome: "blu",
            punti: 0,
            falli: 0
        },
        {
            nome: "verdi",
            punti: 0,
            falli: 0
        },
        {
            nome: "gialli",
            punti: 0,
            falli: 0
        }
    ];

    var frase = "";
    for (var i = 0; i < squadre.length; i++) {
        squadre[i].punti = randomN();
        squadre[i].falli = randomN();
        frase += "La squadra dei " + squadre[i].nome + " ha fatto " + squadre[i].punti + " punti e " + squadre[i].falli + " falli <br>"; 
    }

    document.getElementById("text").innerHTML = frase;

    function randomN () {
        return Math.floor(Math.random() * 11);
    } 
}
else if (es == 3) {

/* Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. */
    var zuk = [];
    var pesoTot = 0;
    var frase = "";
    for (var i = 0; i < 10; i++) {
        zuk.push(
            {
                varieta : "varietà " + (i+1),
                peso: randomN(1, 5) / 10,
                lunghezza: randomN(10, 25)
            }
        )
        pesoTot += zuk[i].peso;
        frase += "La zucchina di " + zuk[i].varieta + " pesa " + zuk[i].peso + "kg" + " ed è lunga " + zuk[i].lunghezza + "cm <br>";
    }

    frase += "Peso totale: " + pesoTot + "kg";
    document.getElementById("text").innerHTML = frase;


    function randomN (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
else if (es == 4) {
    /* Crea un array di 10 oggetti che rappresentano una zucchina.
    Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine */
    var zuk = [];
    var zukShort = [];
    var pesoTot = 0;
    var pesoLong = 0;
    var pesoShort = 0;
    var frase = "";
    for (var i = 0; i < 10; i++) {
        zuk.push(
            {
                varieta : "varietà " + (i+1),
                peso: randomN(1, 5) / 10,
                lunghezza: randomN(10, 25)
            }
        )
        pesoTot += zuk[i].peso;
    }

    var i = 0;
    while (i < zuk.length) {

        if (zuk[i].lunghezza < 15) {
            zukShort.push(zuk[i]);
            pesoShort += zuk[i].peso;
            zuk.splice(i, 1);
        } else {
            pesoLong += zuk[i].peso;
            i++;
        };

    }

    document.getElementById("text").innerHTML = "Peso totale: " + pesoTot.toFixed(2) + "<br>Peso zucchine lunghe: " + pesoLong.toFixed(2) + "<br>Peso zucchine corte: " + pesoShort.toFixed(2);

    function randomN (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}