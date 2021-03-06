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

// Daily reach translated to how many times per day do you want 1 person to see your ad.

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
            var budgetArray = [0, 1];
            $(".alert").alert();
            // loop
            for(var i = 2; i < campaignLength; i++) {
                var reachGoingForward = reachDayTwo += dailyReach;
                console.log("New Reach Total: " + reachGoingForward);
                var totalImpressions = reachGoingForward * 10 * 30.4;
                console.log("Impressions Compounded: " + totalImpressions);
                var budget = (totalImpressions / 1000) * 1.25;
                reachArray.push(reachGoingForward);
                impressionArray.push(totalImpressions);
                budgetArray.push(budget);
            }

            // Full Array of data for reach and impressions
            console.log(reachArray);
            console.log(impressionArray);
            console.log(budgetArray);
            // Front-End View with Data Calculations
            if(campaignLength <= 30) {
                console.log("campaign length = 30");
                $(".header-30").addClass("show");
                $(".alert").addClass("show");
                $("#first-month").text(impressionArray[29]).addClass("text-primary font-weight-bold");
                $("#first-reach").text(reachArray[29]).addClass("text-info font-weight-bold");
                $("#budget-30").text(budgetArray[29]).addClass("text-danger font-weight-bold");
            } else if (campaignLength <= 180) {
                console.log("campaign length = 180");
                $(".header-30").addClass("show");
                $(".header-90").addClass("show");
                $(".header-180").addClass("show");
                $(".alert").addClass("show");
                $("#first-month").text(impressionArray[29]).addClass("text-primary font-weight-bold");
                $("#first-reach").text(reachArray[29]).addClass("text-info font-weight-bold");
                $("#budget-30").text(budgetArray[29]).addClass("text-danger font-weight-bold");

                $("#third-month").text(impressionArray[89]).addClass("text-primary font-weight-bold");
                $("#sixth-month").text(impressionArray[179]).addClass("text-primary font-weight-bold");
                $("#third-reach").text(reachArray[89]).addClass("text-info font-weight-bold");
                $("#sixth-reach").text(reachArray[179]).addClass("text-info font-weight-bold");
                $("#budget-90").text(budgetArray[89]).addClass("text-danger font-weight-bold");
                $("#budget-180").text(budgetArray[179]).addClass("text-danger font-weight-bold");
            } else {
                console.log("campaign length = 365");
                $(".header-30").addClass("show");
                $(".header-90").addClass("show");
                $(".header-180").addClass("show");
                $(".header-270").addClass("show");
                $(".header-365").addClass("show");
                $(".alert").addClass("show");
                $("#first-month").text(impressionArray[29]).addClass("text-primary font-weight-bold");
                $("#first-reach").text(reachArray[29]).addClass("text-info font-weight-bold");
                $("#budget-30").text(budgetArray[29]).addClass("text-danger font-weight-bold");

                $("#third-month").text(impressionArray[89]).addClass("text-primary font-weight-bold");
                $("#sixth-month").text(impressionArray[179]).addClass("text-primary font-weight-bold");
                $("#third-reach").text(reachArray[89]).addClass("text-info font-weight-bold");
                $("#sixth-reach").text(reachArray[179]).addClass("text-info font-weight-bold");
                $("#budget-90").text(budgetArray[89]).addClass("text-danger font-weight-bold");
                $("#budget-180").text(budgetArray[179]).addClass("text-danger font-weight-bold");
                $("#ninth-month").text(impressionArray[269]).addClass("text-primary font-weight-bold");
                $("#final-month").text(impressionArray[364]).addClass("text-primary font-weight-bold");
                $("#ninth-reach").text(reachArray[269]).addClass("text-info font-weight-bold");
                $("#final-reach").text(reachArray[364]).addClass("text-info font-weight-bold");
                $("#budget-270").text(budgetArray[269]).addClass("text-danger font-weight-bold");
                $("#budget-365").text(budgetArray[364]).addClass("text-danger font-weight-bold");
            }
        });

        $("#audience-form").submit(function() {
            event.preventDefault();
            console.log("Audience form button clicked.");

            var audienceReach = parseInt($("#audiencereachnumber").val());

            var impressionCalculation = audienceReach / 3 * 10 * 30.4;
            $(".alert-2").addClass("show");

            $("#impressions").text(impressionCalculation).addClass("text-primary font-weight-bold");
        });

        function resetAudience() {
            $("#impressions").text(" ");
            $(".alert-2").removeClass("show").addClass("hide");
        }

        $("#reset-impressions").on("click", function() {
            resetAudience();
        })
        
    // Reset Button
    // Need to reset arrays and <p> tags with data
    function reset() {
        reachArray = [];
        impressionArray = [];
        budgetArray = [];
        console.log("Arrays emptied - ");
        console.log(reachArray);
        console.log(impressionArray);
        console.log(budgetArray);
        $("#first-month").text("");
        $("#third-month").text("");
        $("#sixth-month").text("");
        $("#ninth-month").text("");
        $("#final-month").text("");
        $("#first-reach").text("");
        $("#third-reach").text("");
        $("#sixth-reach").text("");
        $("#ninth-reach").text("");
        $("#final-reach").text("");
        $("#budget-30").text("");
        $("#budget-90").text("");
        $("#budget-180").text("");
        $("#budget-270").text("");
        $("#budget-365").text("");
        $(".header-30").removeClass("show").addClass("hide");
        $(".header-90").removeClass("show").addClass("hide");
        $(".header-180").removeClass("show").addClass("hide");
        $(".header-270").removeClass("show").addClass("hide");
        $(".header-365").removeClass("show").addClass("hide");
        $(".alert").removeClass("show").addClass("hide");
    
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