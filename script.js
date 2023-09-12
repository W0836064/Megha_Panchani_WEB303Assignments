/*
 Javascript Assignment 1 
 Megha Panchani
 W0836064
 Date: 12 September, 2023
 */


$(document).ready(function ()
 {
    $("#yearly-salary, #percent").on("keyup", function () 
    {
        // Use 0 if input is empty or NaN
        var salary = parseFloat($("#yearly-salary").val()) || 0; 
        // Use 0 if input is empty or NaN
        var percent = parseFloat($("#percent").val()) || 0; 
        // Calculate the amount to spend on tech
        var amount = (salary * percent) / 100;
        // Round the amount to 2 decimal places
        amount = amount.toFixed(2);
        // Update the amount display with a dollar sign
        $("#amount").text("$" + amount);

    }
    );
}
);
