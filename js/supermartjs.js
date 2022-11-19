var countCheck = 0;
var qtyBellpprs_int = 0;
var qtyOfMilk_int = 0;
var qtyOfBread_int = 0;
var qtyOffish_int = 0;
var qtyOfButter_int = 0;
var sum = 0;
var tax = 0;
var totalTax = 0;
var totalCost = 0;

function getOrders()
{

    let buttonerrors = '';

    let qtyOfBellPPrs = document.getElementById('belpprs').value;
    let qtyOfMilk = document.getElementById('milkType').value;
    let qtyOfBread = document.getElementById('breadType').value;
    let qtyOffish = document.getElementById('fish').value;
    let qtyOfButter = document.getElementById('butter').value;
     //Trim all the fields
     qtyOfBellPPrs = qtyOfBellPPrs.trim();
     qtyOfMilk = qtyOfMilk.trim();
     qtyOfBread = qtyOfBread.trim();
     qtyOffish = qtyOffish.trim();
     qtyOfButter = qtyOfButter.trim();

    
     if (qtyOfBellPPrs === '' || isNaN(qtyOfBellPPrs))
     {
        qtyOfBellPPrs = '0.00';
     }
     if (qtyOfMilk === '' || isNaN(qtyOfMilk))
     {
        qtyOfMilk = '0.00';
     }
     if (qtyOfBread === '' || isNaN(qtyOfBread))
     {
        qtyOfBread = '0.00';
     }
     if (qtyOffish === '' || isNaN(qtyOffish))
     {
        qtyOffish = '0.00';
     }
     if (qtyOfButter === '' || isNaN(qtyOfButter))
     {
        qtyOfButter = '0.00';
     }
     qtyBellpprs_int = parseInt(qtyOfBellPPrs) * parseFloat(2.55);
     qtyOfMilk_int = parseInt(qtyOfMilk) * parseFloat(3.99);
     qtyOfBread_int = parseInt(qtyOfBread) * parseFloat(2.00);
     qtyOffish_int = parseInt(qtyOffish) * parseFloat(13.99);
     qtyOfButter_int = parseInt(qtyOfButter) * parseFloat(3.00);


     console.log(qtyBellpprs_int)
     console.log(qtyOfMilk_int)
     console.log(qtyOfBread_int)
     console.log(qtyOffish_int)
     console.log(qtyOfButter_int)



      sum = qtyBellpprs_int + qtyOfMilk_int + qtyOfBread_int + qtyOffish_int + qtyOfButter_int
     //document.getElementById("result").innerHTML = sum;
  if (sum < 10.00)
  {
    document.getElementById('result').innerHTML = 'Please add a  minimum order of $10.00';
  }
  
    else{ 
      //Execute when order is placed above $10.00
        document.getElementById("result").innerHTML = "In order to complete the payment, you have to fill the form shown below."
         tax = sum * 13/100; //GST calculation
         totalTax = tax.toFixed(2);
         totalCost = parseFloat(sum) + parseFloat(totalTax);
    }




}


function formSubmitInfo(){
     //Fetch all inputs of form.
let userName = document.getElementById('user_name').value;
let userPhoneNumber = document.getElementById('user_phone').value;
let cardNumber = document.getElementById('user_cardNumber').value;
let cardExpiryMonth = document.getElementById('user_expiryMonth').value;
let cardExpiryYear = document.getElementById('user_expiryYear').value;


userName = userName.trim();
userPhoneNumber = userPhoneNumber.trim();

//Apply Regex for each field in a form.
let errors = '';
let userNameRegx = /^[a-zA-Z\-]+$/;
let phoneNumbRegex = /^\d{10}$/;
let cardNumbRegex = /^(\d{4})-(\d{4})-(\d{4})-(\d{4})$/;

let cardExpiryMonthRegex = /^0[1-9]|10|11|12$/;
let cardExpiryYearRegex = /^20[0-9]{2}$/;

//Do validations check for each field in a form.


if (totalCost <= 0.00)
{
    errors += `Please first choose the orders <br>`;
}
    if (userName === "" || !userNameRegx.test(userName)){
    errors += `Please enter valid user name <br>`;
    }
       if (userPhoneNumber === ""|| !phoneNumbRegex.test(userPhoneNumber) ){
        errors += `Please enter valid user phone number <br>`;
        }
    
    
        
            console.log(errors)
    if (errors != '')
    {
    document.getElementById('errors').innerHTML = errors; //show errors if any.
    }
    else{
        let myoutput = '';
        myoutput += `
        Name: ${userName}<br>
        Phone Number: ${userPhoneNumber}<br>
        GST: $${totalTax}<br>
        Total Cost: $${totalCost.toFixed(2)}<br>
        `;
        document.getElementById('errors').innerHTML = '';
        document.getElementById('receiptOutput').innerHTML = myoutput;
        
    }
    
        // Return false will stop the form from submitting and keep it on the current page.
        return false;

}