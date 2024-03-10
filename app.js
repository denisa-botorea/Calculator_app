let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let valMemStored = "";
 
// Called when a number button is clicked
function numButPress(num){
    // Check if a number has been already clicked
    if(resultVal){
        newVal = num;
        // Reset to create a new result
        resultVal = "";
    } else {
        // Used to block using multiple decimals
        if(num === '.'){
            if(decimalClicked != true){
                newVal += num;
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    }
        
    // Update value in entry input tag
    document.getElementById("entry").value = newVal;
}
 
function mathButPress(operator){
    if(!resultVal){
        prevVal = newVal;
    } else {
 
        // If there is a current result store that as
        // the previous value entered
        prevVal = resultVal;
    }
    
    // Restart creation of new number
    newVal = "";
    // Reset decimalClicked
    decimalClicked = false;
    // Store operator clicked
    mathOperator = operator;
 
    // Prepare entry for receiving new numbers
    resultVal = "";
    document.getElementById("entry").value = "";
}
 
function equalButPress(){
    // Reset decimalClicked
    decimalClicked = false;
 
    // Convert string numbers to floats
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);
 
    // Perform calculations based on stored operator
    switch(mathOperator){
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;

        default:
            resultVal = newVal;
    }
 
    // Store the current value as the previous so that 
    // I can except to next value in the calculation
    prevVal = resultVal;
 
    // Put the calculation result in the entry window
    document.getElementById("entry").value = resultVal;
}
 
// Clear everything except memory
function clearButPress(){
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";
}
 
// Store the current value in the entry window
function copyButPress(){
    valMemStored = document.getElementById("entry").value;
}
 
function pasteButPress(){
    if(valMemStored){
        document.getElementById("entry").value = valMemStored;
        newVal = valMemStored;
    }
     
}