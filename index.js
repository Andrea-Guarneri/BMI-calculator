// BASIC BMI CALCULATOR

// BMI Calculation: https://drpaulopittelli.com.br/wp-content/uploads/2013/02/obesidade-IMC-1-1024x567.jpg

// BODY MASS INDEX
// BMI = WEIGHT(kg) / HEIGHT(cm)²    --->    var imcIndex = weight / height ** 2

/*
  BMI Ranges: https://www.unimed.coop.br/portal/conteudo/materias/1268747583764tabela%20de%20IMC.jpg

  You will receive the user's weight and height and calculate their BMI.
  You should display the resulting BMI to the user and tell them their BMI classification.
  Additionally, it would be interesting to show a corresponding image.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PROMPT - receiving user weight and height 
var weight = Number(prompt("What's your weight?"));
var height = Number(prompt("What's your height?(example: 1.70)"));

// BMI calculation
var imc = weight / height ** 2;

// Variables for storing the image corresponding to BMI classification
var imgUnderWeight = "assets/under-weight.png";
var imgNormalWeight = "assets/normal-weight.png";
var imgOverWeight = "assets/over-weight.png";
var imgObesity1 = "assets/obesity-1.png";
var imgObesity2 = "assets/obesity-2.png";
var imgObesity3 = "assets/obesity-3.png";
var imgError = "assets/error.png";

// Variables that store the Tailwind classes for the background colors corresponding to each classification
var bgUnderWeight = "bg-teal-300";
var bgNormalWeight = "bg-teal-600";
var bgOverWeight = "bg-orange-600";
var bgObesity1 = "bg-red-600";
var bgObesity2 = "bg-red-800";
var bgObesity3 = "bg-red-900";
var bgError = "bg-purple-600";

// Initialize the variables that will be used to store the ratings
var imageClassification = null;    // Store the corresponding image
var classification = null;         // Stores the classification name
var backgroundClassification = " "; // Store the background color
// The backgroundClassification variable is initialized to an empty string (" ") as a precaution, to ensure that it always has an initial value, even if it is just a blank. If backgroundClassification did not have an initial value (for example, if it was null or undefined), concatenation could generate an error or unexpected behavior.

// Conditional to check BMI range and classify user
if (imc >= 0 && imc < 18.5) {
  classification = "Under Weight";               
  imageClassification = imgUnderWeight;          
  backgroundClassification += bgUnderWeight;     

} else if (imc >= 18.5 && imc < 25) {
  classification = "Normal Weight";              
  imageClassification = imgNormalWeight;         
  backgroundClassification += bgNormalWeight;    

} else if (imc >= 25 && imc < 30) {
  classification = "Over Weight";                
  imageClassification = imgOverWeight;           
  backgroundClassification += bgOverWeight;      

} else if (imc >= 30 && imc < 35) {
  classification = "Obesity I";                  
  imageClassification = imgObesity1;             
  backgroundClassification += bgObesity1;        

} else if (imc >= 35 && imc < 40) {
  classification = "Obesity II";                 
  imageClassification = imgObesity2;             
  backgroundClassification += bgObesity2;        

} else if (imc > 40) {
  classification = "Obesity III";                
  imageClassification = imgObesity3;            
  backgroundClassification += bgObesity3;        

} else {
  classification = "error";                    // Error case if BMI is not valid
  imageClassification = imgError;              // Error image
  backgroundClassification += bgError;         // Error background color
}

// Applies the corresponding tailwind class to the page background
document.body.className += backgroundClassification;

// Sets the BMI image based on the user's rating
document.getElementById("imcImage").setAttribute("src", imageClassification);

// Displays the message with the BMI value or error
document.getElementById("imcMessage").innerText = (classification === "error") ?
  "One of values are invalid" : "Your IMC is: " + imc;

// Displays the BMI classification (e.g. "Under Weight", "Normal Weight", etc.)
document.getElementById("imcClassification").innerText = classification;