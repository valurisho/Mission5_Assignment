// Write your JavaScript code.

//function to multiplyvalue
function multiplyValue(){
    const hours = $("#hours").val() || 0; //we need to add .val() for jquery
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

function clearInput(){
    $("#hours").val("");

    // Reset the value of photography type to the default option
    $("#photographyType").val("default");

    $("#rateDisplay").text(0)
    //using attr to make it hidden again
    $("#clearButton").attr("hidden", "hidden");
}
