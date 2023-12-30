// var e1, e2, n1, n2, f, R1, R2, phiMax; //initializing variables for ideal

// var Rm, Xm, Qm, Im, If, Io, Ip, Xp, Rp;     //initializing vars for practical transformer

// var eL1, eL2, phiL1, phiL2;                 //initializing variables for leakage

// var sFL, So, P, Pi, Pcu, PcuFL,  Po, pf, k, eff, effMax;    //initializing power & efficiency variables



// done testing

// Ideal Transformer Equations
// let a = n1 / n2;
// let e1 = 4.44 * f * n1 * phiMax;
// let effectiveVoltage = e1;
// let peakVoltage = effectiveVoltage * Math.sqrt(2);

// // Practical Transformer at No Load Equations
// let Rm = e1 ** 2 / Pi;
// let Xm = e1 ** 2 / Qm;
// let Qm = Math.sqrt(S ** 2 - Pi ** 2);
// let Im = e1 / Xm;
// let If = e1 / Rm;
// let Io = Math.sqrt(Im ** 2 + If ** 2);
// let S = e1 * Io;

// // Leakage Equations
// let EL2 = 4.44 * f * n2 * phiL2;
// let e2 = 4.44 * f * n2 * Phi;

// // Open Circuit Test Equations
// let Rm_OC = e1 ** 2 / Pi;
// let P_OC = e1 ** 2 / R;
// let Xm_OC = e1 ** 2 / Qm;
// let Sm_OC = Io * e1;
// let Qm_OC = Math.sqrt(Sm_OC ** 2 - Pi ** 2);

// // Short Circuit Test Equations
// let Xp = Xl1 + a ** 2 * Xl2;
// let Rp = R1 + a ** 2 * R2;
// let Zp = Rp + i * Xp;
// let Rp_SC = Psc / Isc ** 2;
// let Xp_SC = Math.sqrt(Zp ** 2 - Rp_SC ** 2);

// // Efficiency Equations

// let Po = sFL * k * pf;
// let Pcu = k ** 2 * PcuFL;
// let k = prompt("Full load? half?:");
// let effMax = (k = Math.sqrt(Pi / PcuFL)) && (Pi = PcuFL);
// let eff = Po / (Po + Pi + Pcu);
// let PcuFL = IpFL ** 2 * Rp;




// function getEff(Pcu, k, PcuFL, sFL, pf, Pi){
    
//     let Po = sFL * k * pf;
//     Pcu = k ** 2 * PcuFL;
//     eff = Po/(Po + Pi + Pcu);

//     return eff;
// }

function getEff() {
    // Retrieve values from input elements
    var sFL = parseFloat(document.getElementById("transformerRating").value);
    var pf = parseFloat(document.getElementById("powerFactor").value);
    var k = parseFloat(document.getElementById("loadCapacity").value);
    var PcuFL = parseFloat(document.getElementById("copperLoss").value);
    var Pi =parseFloat(document.getElementById("ironLoss").value);

     let Po = sFL * k * pf;
     let Pcu = PcuFL;
     if (k != 1){
        Pcu = k ** 2 * PcuFL;
     }
     let eff = (Po/(Po + Pi + Pcu)) * 100;



    //  console.log(sFL);
    //  console.log(pf);
    //  console.log(k);
    //  console.log(PcuFL);
    //  console.log(Pi);
     console.log("efficiency is " + eff.toFixed(2) + "%");




   }
