// Write your JavaScript code.

//function to multiplyvalue
function multiplyValue(){
    
    
    let hours = $("#hours").val().trim(); //we need to add .val() for jquery
    if (hours === "" || isNaN(hours) || Number(hours) < 0) {
        $("#errorMessage").text("Please enter a valid number of hours.").show();
    } 
    else
    {
        hours = Number(hours); // Convert to a number for further processing
        $("#errorMessage").hide();
        
        let price = 0;
        let extra_value = 0;
        let photoType = $("#photographyType").val();

        if (photoType === "iphone"){
            extra_value = 15 + 1;
        }
        else if (photoType === "film"){
            extra_value = 15 + 5;

        }
        else if (photoType === "digital"){
            extra_value = 15 + 3;
        }

        price = extra_value * hours; //calculating 
        $("#rateDisplay").text(price); //this is the way to do it on jquery instead of innerhtml

        $("#clearButton").removeAttr("hidden"); //we have to do removeAttr
    }
}

function clearInput(){
    $("#hours").val("");

    // Reset the value of photography type to the default option
    $("#photographyType").val("iphone");

    $("#rateDisplay").text(0)
    //using attr to make it hidden again
    $("#clearButton").attr("hidden", "hidden");
}
