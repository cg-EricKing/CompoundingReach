// Create a widget that will take two values (daily reach, number of days)
// Compute a daily compounded reach by adding the initial reach to the current daily reach
// Loop through for the number of days that are provided in the campaign length input field
// Example => if 90 days are entered
    // for(var i = 2; i <= campaignLength; i++) {
    //  add reachDayTwo to reach and save
    // compute impressions reach * 10 * 30.4 - save and push to array
    //}
// Create a front-end view with the data from the array calcualtions
    // View will show monthly output based on the lifetime of the campaign (90, 180,365) - show by month or quarterly

// Code in a reset button to allow for a user to reset the data and enter new variables and get different results

// Add in validation for the form to make sure values are entered as intended

$(document).ready(function() {
    console.log("Script Linked!");

        
        // submit function - handles calculations
        $("#crform").submit(function() {
            event.preventDefault();
            console.log("event fired, button clicked");
            // Grab values from submit    
            var reach = parseInt($("#reach").val());
            var campaignLength = parseInt($("#campaignlength").val());

            var dailyReach = reach;
            console.log("Initial Reach: " + dailyReach);
            console.log("Number of days to calculate: " + campaignLength);
            var reachDayOne = dailyReach;
            var dayOneImpressions = reachDayOne * 10 * 30.4;
            console.log("Day One: " + reachDayOne + " - Impressions: " + dayOneImpressions);
            var reachDayTwo = reachDayOne + dailyReach;
            var dayTwoImpressions = reachDayTwo * 10 * 30.4;
            console.log("Reach Day Two: "+ reachDayTwo+ " - Impressions: " + dayTwoImpressions);

            var reachArray = [reachDayOne, reachDayTwo];
            var impressionArray = [dayOneImpressions, dayTwoImpressions];
            // loop
            for(var i = 2; i < campaignLength; i++) {
                var reachGoingForward = reachDayTwo += dailyReach;
                console.log("New Reach Total: " + reachGoingForward);
                var totalImpressions = reachGoingForward * 10 * 30.4;
                console.log("Impressions Compounded: " + totalImpressions);
                reachArray.push(reachGoingForward);
                impressionArray.push(totalImpressions);
            }

            // Full Array of data for reach and impressions
            console.log(reachArray);
            console.log(impressionArray);

            // Front-End View with Data Calculations
            $("#first-month").text(impressionArray[31]).addClass("text-primary font-weight-bold");
            $("#third-month").text(impressionArray[91]).addClass("text-primary font-weight-bold");
            $("#sixth-month").text(impressionArray[181]).addClass("text-primary font-weight-bold");
            $("#ninth-month").text(impressionArray[271]).addClass("text-primary font-weight-bold");
            $("#final-month").text(impressionArray[335]).addClass("text-primary font-weight-bold");

        });
        
    // Reset Button
    // Need to reset arrays and <p> tags with data
    function reset() {
        reachArray = [];
        impressionArray = [];
        console.log("Arrays emptied - ");
        console.log(reachArray);
        console.log(impressionArray);
        $("#first-month").text("");
        $("#third-month").text("");
        $("#sixth-month").text("");
        $("#ninth-month").text("");
        $("#final-month").text("");
    
    }
    // On-click event for the reset button
    $("#reset").on("click", function() {
        console.log("Reset button clicked");
        reset();
    });
    // Validation Function
    function validate() {
        // validate input fields

        // validate input message to say campaign length variables
    }
    


}); // End of document ready