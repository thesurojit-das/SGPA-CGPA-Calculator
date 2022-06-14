function Sol() {
    document.getElementById("sgpa").value ="0"
    var sem = document.getElementById('Sem');
    console.log('option');
    var choice = parseInt(sem.value);
    console.log(choice)
    switch (choice) {
        case 1: console.log("1");
            first.style.display = "block";
            break;
        case 2: console.log("2");
            second.style.display = "block";
            first.style.display = "none";
            break;
        case 3: console.log("3");
            first.style.display = "none";
            second.style.display = "none";
            third.style.display = "block";
            break;
        case 4: console.log("4");
            first.style.display = "none";
            second.style.display = "none";
            third.style.display = "none";
            four.style.display = "block";
            break;
        case 5: console.log("5");
            first.style.display = "none";
            second.style.display = "none";
            third.style.display = "none";
            four.style.display = "none";
            five.style.display = "block";
            break;
        case 6: console.log("6");
            first.style.display = "none";
            second.style.display = "none";
            third.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "block";
            break;
        case 7: console.log("7");
            first.style.display = "none";
            second.style.display = "none";
            third.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "none";
            seven.style.display = "block";
            break;
        case 8: console.log("8");
            first.style.display = "none";
            second.style.display = "none";
            third.style.display = "none";
            four.style.display = "none";
            five.style.display = "none";
            six.style.display = "none";
            seven.style.display = "none";
            eight.style.display = "block";
            break;
    }
    box1.style.display = "block"
    box.style.display = "none"
}



function firstSol() {
    var maths = parseInt(document.getElementById('maths').value);
    var chem = parseInt(document.getElementById('chem').value);
    var pcom = parseInt(document.getElementById('pcom').value);
    var bio = parseInt(document.getElementById('bio').value);
    var comp = parseInt(document.getElementById('comp').value);
    var chemLab = parseInt(document.getElementById('chemLab').value);
    var lang = parseInt(document.getElementById('lang').value);
    var engg = parseInt(document.getElementById('engg').value);

    var totalMarks = maths * 4 + chem * 3 + pcom * 2 + bio * 2 + comp * 4 + chemLab * 1.5 + lang * 1 + engg * 2;
    var totalCredit = 0;
    var temp = [4, 3, 2, 2, 4, 1.5, 1, 2];
    for (var i = 0; i < 8; i++) {
        totalCredit += temp[i];
    }
    var sgpa = totalMarks / totalCredit;
    // result.style.display = "block";

    result.style.display = "block";
    document.getElementById("sgpa").value = fun(sgpa);
    console.log(sgpa);
    // event.preventDefault();
}


function secondSol() {
    var maths = parseInt(document.getElementById('Mathematics-II').value);
    var phy = parseInt(document.getElementById('phy').value);
    var bee = parseInt(document.getElementById('bee').value);
    var aec = parseInt(document.getElementById('aec').value);
    var phyLab = parseInt(document.getElementById('phyLab').value);
    var beeLab = parseInt(document.getElementById('beeLab').value);
    var aecLab = parseInt(document.getElementById('aecLab').value);
    var bms = parseInt(document.getElementById('bms').value);
    var evs = parseInt(document.getElementById('evs').value);
    var yoga = parseInt(document.getElementById('yoga').value);

    var totalMarks = (maths * 4) + (phy * 4) + (bee * 3) + (aec * 3) + (phyLab * 1.5) + (beeLab * 1) + (aecLab * 1) + (bms * 2) + (evs * 1) + (yoga * 1);

    var totalCredit = 0;
    var temp = [4, 4, 3, 3, 1.5, 1, 1, 2, 1, 1];
    for (var i = 0; i < 10; i++) {
        totalCredit += temp[i];
    }
    var sgpa = totalMarks / totalCredit;
    result.style.display = "block";
    document.getElementById("sgpa").value = fun(sgpa);
    // event.preventDefault();
}

function thirdSol() {
    var dsa = parseInt(document.getElementById('dsa').value);
    var de = parseInt(document.getElementById('de').value);
    var hs1 = parseInt(document.getElementById('hs1').value);
    var dms = parseInt(document.getElementById('dms').value);
    var oop = parseInt(document.getElementById('oop').value);
    var ps = parseInt(document.getElementById('ps').value);
    var dsaLab = parseInt(document.getElementById('dsaLab').value);
    var oopLab = parseInt(document.getElementById('oopLab').value);

    var totalMarks = (dsa * 4) + (de * 3) + (hs1 * 3) + (dms * 3) + (oop * 3) + (ps * 3) + (dsaLab * 1) + (oopLab * 1);

    var totalCredit = 0;
    var temp = [4, 3, 3, 3, 3, 3, 1, 1];
    for (var i = 0; i < 8; i++) {
        totalCredit += temp[i];
    }
    var sgpa = totalMarks / totalCredit;
    result.style.display = "block";
    document.getElementById("sgpa").value = fun(sgpa);
    // event.preventDefault();
}


function fourSol() {
    var os = parseInt(document.getElementById('os').value);
    var afl = parseInt(document.getElementById('afl').value);
    var web = parseInt(document.getElementById('web').value);
    var dbms = parseInt(document.getElementById('dbms').value);
    var coa = parseInt(document.getElementById('coa').value);
    var pdc = parseInt(document.getElementById('pdc').value);
    var dbmsLab = parseInt(document.getElementById('dbmsLab').value);
    var osLab = parseInt(document.getElementById('osLab').value);
    var webLab = parseInt(document.getElementById('webLab').value);
    var bcom = parseInt(document.getElementById('bcom').value);

    var totalMarks = (os * 3) + (afl * 4) + (web * 3) + (dbms * 4) + (coa * 4) + (pdc * 4) + (dbmsLab * 1) + (osLab * 1) + (webLab * 1);

    var totalCredit = 0;
    var temp = [3, 4, 3, 4, 4, 4, 1, 1, 1, 1];
    for (var i = 0; i < 10; i++) {
        totalCredit += temp[i];
    }
    var sgpa = totalMarks / totalCredit;
    result.style.display = "block";
    document.getElementById("sgpa").value = fun(sgpa);
    // event.preventDefault();
}



function fiveSol() {
    var hpc = parseInt(document.getElementById('hpc').value);
    var cn = parseInt(document.getElementById('cn').value);
    var daa = parseInt(document.getElementById('daa').value);
    var se = parseInt(document.getElementById('se').value);
    var de1 = parseInt(document.getElementById('de1').value);
    var de2 = parseInt(document.getElementById('de2').value);
    var netLab = parseInt(document.getElementById('netLab').value);
    var algoLab = parseInt(document.getElementById('algoLab').value);

    var totalMarks = (hpc * 4) + (cn * 3) + (daa * 3) + (se * 4) + (de1 * 3) + (de2 * 3) + (netLab * 1) + (algoLab * 1);

    var totalCredit = 0;
    var temp = [4, 3, 3, 4, 3, 3, 1, 1];
    for (var i = 0; i < 8; i++) {
        totalCredit += temp[i];
    }
    var sgpa = totalMarks / totalCredit;
    result.style.display = "block";
    document.getElementById("sgpa").value = fun(sgpa);
    // event.preventDefault();
}

function sixSol() {
    var cd = parseInt(document.getElementById('cd').value);
    var cc = parseInt(document.getElementById('cc').value);
    var de3 = parseInt(document.getElementById('de3').value);
    var de4 = parseInt(document.getElementById('de4').value);
    var de5 = parseInt(document.getElementById('de5').value);
    var oe1 = parseInt(document.getElementById('oe1').value);
    var ttLab = parseInt(document.getElementById('ttLAB').value);
    var ccLab = parseInt(document.getElementById('ccLAB').value);
    var minor = parseInt(document.getElementById('minor').value);

    var totalMarks = (cd * 3) + (cd * 3) + (de3 * 3) + (de4 * 3) + (de5 * 3) + (oe1 * 3) + (ttLab * 2) + (ccLab * 1) + (minor * 2);

    var totalCredit = 0;
    var temp = [3, 3, 3, 3, 3, 3, 2, 1, 2];
    for (var i = 0; i < 9; i++) {
        totalCredit += temp[i];
    }
    var sgpa = totalMarks / totalCredit;
    result.style.display = "block";
    document.getElementById("sgpa").value = fun(sgpa);
    // event.preventDefault();
}

function sevenSol() {
    var hs2 = parseInt(document.getElementById('hs2').value);
    var pp = parseInt(document.getElementById('pp').value);
    var oe2 = parseInt(document.getElementById('oe2').value);
    var mi3 = parseInt(document.getElementById('mi3').value);
    var mi4 = parseInt(document.getElementById('mi4').value);
    var ho1 = parseInt(document.getElementById('ho1').value);
    var pi = parseInt(document.getElementById('pi').value);
    var pt = parseInt(document.getElementById('pt').value);
    var pm = parseInt(document.getElementById('pm').value);

    var totalMarks = (hs2 * 3) + (pp * 2) + (oe2 * 3) + (mi3 * 3) + (mi4 * 3) + (ho1 * 3) + (pi * 2) + (pt * 1) + (pm * 2);

    var totalCredit = 0;
    var temp = [3, 2, 3, 3, 3, 3, 2, 1, 2];
    for (var i = 0; i < 9; i++) {
        totalCredit += temp[i];
    }
    var sgpa = totalMarks / totalCredit;
    result.style.display = "block";
    document.getElementById("sgpa").value = fun(sgpa);
    // event.preventDefault();
}


function eightSol() {
    
    var mi5 = parseInt(document.getElementById('mi5').value);
    var mi6 = parseInt(document.getElementById('mi6').value);
    var ho2 = parseInt(document.getElementById('ho2').value);
    var ho3 = parseInt(document.getElementById('ho3').value);
    var pi = parseInt(document.getElementById('pi').value);

    var totalMarks = (mi5 * 3) + (mi6 * 3) + (ho2 * 3) + (ho3 * 3) + (pi * 10);

    var totalCredit = 0;
    var temp = [3, 3, 3, 3, 10];
    for (var i = 0; i < 5; i++) {
        totalCredit += temp[i];
    }
    var sgpa = totalMarks / totalCredit;
    result.style.display = "block";
    document.getElementById("sgpa").value = fun(sgpa);
    // event.preventDefault();
}








function fun(sgpa) {
    return Number.parseFloat(sgpa).toFixed(2);
}