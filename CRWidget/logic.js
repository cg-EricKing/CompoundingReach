// Create a widget that will take two values (daily reach, number of days)
// Compute a daily compounded reach by adding the initial reach to the current daily reach
// Loop through for the number of days that are provided in the campaign length input field
// Example => if 90 days are entered
    // for(var i = 2; i <= campaignLength; i++) {
    //  add reachDayTwo to reach and save
    // compute impressions reach * 10 * 30.4
    //}


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

            // Reset Button

            // Validation Function
        });
        


    


}); // End of document ready