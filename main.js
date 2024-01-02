//  function getData(){
//     var sFL = parseFloat($("#transformerRating").val()); 
//     var pf = parseFloat($("#powerFactor").val());
//     var k = parseFloat($("#loadCapacity").val());
//     var PcuFL = parseFloat($("#copperLoss").val());
//     var Pi = parseFloat($("#ironLoss").val());

//     getEff(sFL, pf, k, PcuFL, Pi);
//     alert(sFL);
//  }
 
//  function getEff(sFL, pf, k, PcuFL, Pi) {
//     // Retrieve values from input elements 


//     let Po = sFL * k * pf; // Equation used, eq(3) from our report
//     let Pcu = PcuFL;

//     if (k != 1) {
//         Pcu = k ** 2 * PcuFL;
//     }
        
        // alert("sFL:", sFL);
        // alert("pf:", pf);
        // alert("k:", k);
        // alert("PcuFL:", PcuFL);
        // alert("Pi:", Pi);
        // alert("Po:", Po);
        // alert("Pcu:", Pcu);

//     let eff = (Po / (Po + Pi + Pcu)) * 100;
//     alert("Efficiency is " + eff.toFixed(2) + "%"); // Print the efficiency of the transformer
// }

class Transformer {
    constructor() {
        this.data = {};

    }

    getData() {
        this.data.sFL = parseFloat($("#transformerRating").val());
        this.data.pf = parseFloat($("#powerFactor").val());
        this.data.k = parseFloat($("#loadCapacity").val());
        this.data.PcuFL = parseFloat($("#copperLoss").val());
        this.data.Pi = parseFloat($("#ironLoss").val());
        this.data.turns = parseFloat($("#turns").val());
        this.data.v1 = parseFloat($("#v1").val());
        this.data.v2 = parseFloat($("#v2").val());
        this.data.r1 = parseFloat($("#r1").val());
        this.data.r2 = parseFloat($("#r2").val());
        this.data.effIn = parseFloat($("#effIn").val()); 
        this.data.fq = parseFloat($("#fq").val()); 
        this.data.Po = parseFloat($("#Po").val()); 
        this.data.i1 = parseFloat($("#i1").val()); 
        this.data.i2 = parseFloat($("#i2").val()); 
        this.data.Io = parseFloat($("#Io").val());   
    }

    getEff() {
        
        // Access data from the instance
        let sFL = this.data.sFL;
        let pf = this.data.pf;
        let k = this.data.k;
        let PcuFL = this.data.PcuFL;
        let Pi = this.data.Pi;
        let Pcu = this.data.PcuFL;

        if (k !== 1) {
            Pcu = k ** 2 * PcuFL;
        }

        let Po  = this.data.sFL * k * pf;
        let effCalc = (Po / (Po + Pi + Pcu)) * 100;     // Equation used, eq(3) from our report
        
        alert("Efficiency is " + effCalc.toFixed(3) + "%");
        alert(sFL);
    }

    getRatio(){
        let v1 = this.data.v1;
        let v2 = this.data.v2;

        let a = v1/v2;
        return a;
    }

    getEffMax() {
    // Retrieve values from input elements
    let sFL = this.data.sFL;
    let pf = this.data.pf;
    let k = this.data.k;
    let PcuFL = this.data.PcuFL;
    let Pi = this.data.Pi;

    // Calculate Po, Pcu, and Efficiency (ηMax)
    let Po = sFL * k * pf;
    let Pcu = k !== 1 ? k ** 2 * PcuFL : PcuFL;
    let effMax = (Po / (Po + Pi + Pcu)) * 100;

    // Display the result or use it as needed
    alert("Maximum Efficiency is " + effMax.toFixed(2) + "%");
}

// Method to calculate Current
getCurrent() {
    // Retrieve values from input elements
    let a = this.data.turns;
    let Io = this.data.Io;
    let pf = this.data.pf;
    let i2 = this.data.i2;

    // Calculate Current (If)
    let I21 = i2 * (a ** -1);

    //let If = sFL / (k * PcuFL);

    // Display the result or use it as needed
    // alert("Current is " + If.toFixed(2) + " A");


    // Define a function for complex addition
    const complexAddition = (I21, Io) => ({ real: I21.real + Io.real, imag: I21.imag + Io.imag });


    // Perform complex addition
    const result = complexAddition(complexNum1, complexNum2);

    // Display the result using template literals
    console.log(`Result of complex addition: ${result.real} + ${result.imag}i`);


}

// Method to calculate Power Losses (Pcu, Pi)
getPowerLosses() {
    // Retrieve values from input elements
    let pf = this.data.pf;
    let k = this.data.k;
    let PcuFL = this.data.PcuFL;
    let Pi = this.data.Pi;
    let Po = this.data.Po;
    let v1 = this.data.v1;
    let v2 = this.data.v2;
    let i1= this.data.i1;

    // Calculate Po, Pcu, and Efficiency (η)
    let Pin = v1 * i1 * pf;
    let Pcu = Pin - Po - Pi;
    // let eff = (Po / (Po + Pi + Pcu));

    // // Calculate Power Losses (Pcu, Pi)
    // let PcuLoss = eff * Pcu;
    // let PiLoss = eff * Pi;

    // Display the results or use them as needed
    console.log(Pcu);
    alert("Copper Loss (Pcu) is " + Pcu.toFixed(2) + " W");
}

// Method to calculate Φ / ΦMax
getPhi() {
    // Retrieve values from input elements
    let v2 = this.data.v2;
    let f = this.data.f;
    let n2 = this.data.n2;
    let Phi = this.data.Phi;

    // Calculate Φ / ΦMax
    let phiRatio = v2 / (4.44 * f * n2 * Phi);

    // Display the result or use it as needed
    alert("Φ / ΦMax is " + phiRatio.toFixed(2));
}

// Method to calculate Power Factor
getPf() {
    // Retrieve values from input elements
    let sFL = this.data.sFL;
    let k = this.data.k;
    let pf = this.data.pf;
    let PcuFL = this.data.PcuFL;
    let Pi = this.data.Pi;

    // Calculate Po, Pcu, and Efficiency (η)
    let Po = sFL * k * pf;
    let Pcu = k !== 1 ? k ** 2 * PcuFL : PcuFL;
    let eff = (Po / (Po + Pi + Pcu));

    // Calculate Power Factor
    let powerFactor = Math.cos(Math.acos(eff));

    // Display the result or use it as needed
    alert("Power Factor is " + powerFactor.toFixed(2));
}

}

// Create an instance of the Transformer class
const transformerInstance = new Transformer();

