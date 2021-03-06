var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alfabeto_criptato;
var parola = "";
var sequenza = "";
var p = "";
var nk = 1;
var k = [];

$(document).ready(function () {
    $("body").fadeIn("fast");
});

$("form").submit(function (e) {
    e.preventDefault();
});

$("#aggiungi").click(function () {
    nk++;
    $("#chiavi").append('<h5>Chiave #' + nk + '</h5> <input type="number" name="k' + nk + '" id="k' + nk + '" class="form-control" style="display: none;" min="1" max="25"><br>');
    $("#k" + nk).fadeIn("fast");
    if (nk == 9) {
        $("#aggiungi").fadeOut();
    }
    $("#seq").fadeIn("fast");
});

$("#cripta").click(function () {
    var spazi = [];

    // prendo il valore delle chiavi e le converto in numeri
    for (var i = 0; i < nk; i++) {
        k[i] = Number($("#k" + (i + 1) + "").val());
    }

    //prendo la sequenza e la trasformo in un array
    if (nk > 1) {
        sequenza = $("#sequenza").val();
        sequenza = sequenza.split("");
    }

    // prendo la parola e la trasformo in un array
    parola = $("#parola").val();
    p = parola;
    parola = parola.toLowerCase();
    parola = parola.split("");

    // var ar1 = alfabeto.slice(0, k1);
    // var ar2 = alfabeto.slice(k1, alfabeto.length);

    // alfabeto_criptato = ar2.concat(ar1);

    var parola_criptata = "";

    for (var j = 0; j < parola.length; j++) {
        if (parola[j] == " ") {
            spazi.push(j + spazi.length);
            parola.splice(j--, 1);
        } else {
            for (var i = 0; i < alfabeto.length; i++) {
                if (parola[j] == alfabeto[i]) {
                    if (nk > 1) {
                        parola_criptata += alfabeto[(i + k[sequenza[j % sequenza.length] - 1]) % 26];
                    } else {
                        parola_criptata += alfabeto[(i + k[j % nk]) % 26];
                    }
                    break;
                }
            }
        }
    }

    if (spazi.length > 0) {
        parola_criptata = parola_criptata.split("");
        for (var i = 0; i < spazi.length; i++) {
            parola_criptata.splice(spazi[i], 0, " ");
        }
        parola_criptata = parola_criptata.join("");
    }

    for (var i = 0; i < nk; i++) {
        if (k[i] > 25 || k[i] < 1 || k[i] == null) {
            var stacca = true
        }
    }

    parola = parola.join("");

    if (stacca != true) {
        $("#parola-criptata").html(parola_criptata);
        $("#parola-criptata").fadeIn("fast");
    }
});

$("#decripta").click(function () {
    var spazi = [];

    // prendo il valore delle chiavi e le converto in numeri
    for (var i = 0; i < nk; i++) {
        k[i] = Number($("#k" + (i + 1) + "").val());
    }

    //prendo la sequenza e la trasformo in un array
    if (nk > 1) {
        sequenza = $("#sequenza").val();
        sequenza = sequenza.split("");
    }

    // prendo la parola e la trasformo in un array
    parola = $("#parola").val();
    p = parola;
    parola = parola.toLowerCase();
    parola = parola.split("");

    var parola_decriptata = "";

    for (var j = 0; j < parola.length; j++) {
        if (parola[j] == " ") {
            spazi.push(j + spazi.length);
            parola.splice(j--, 1);
        } else {
            for (var i = 0; i < alfabeto.length; i++) {
                if (parola[j] == alfabeto[i]) {
                    if (nk > 1) {
                        if (i >= k[sequenza[j % sequenza.length] - 1]) {
                            parola_decriptata += alfabeto[i - k[sequenza[j % sequenza.length] - 1]];
                        } else {
                            parola_decriptata += alfabeto[(i + 26) - k[sequenza[j % sequenza.length] - 1]];
                        }
                    } else {
                        if (i >= k[j % nk]) {
                            parola_decriptata += alfabeto[i - k[j % nk]];
                        } else {
                            parola_decriptata += alfabeto[(i + 26) - k[j % nk]];
                        }
                    }
                    break;
                }
            }
        }
    }

    if (spazi.length > 0) {
        parola_decriptata = parola_decriptata.split("");
        for (var i = 0; i < spazi.length; i++) {
            parola_decriptata.splice(spazi[i], 0, " ");
        }
        parola_decriptata = parola_decriptata.join("");
    }

    for (var i = 0; i < nk; i++) {
        if (k[i] > 25 || k[i] < 1 || k[i] == null) { var stacca = true }
    }

    parola = parola.join("");

    if (stacca != true) {
        $("#parola-criptata").html(parola_decriptata);
        $("#parola-criptata").fadeIn("fast");
    }
});