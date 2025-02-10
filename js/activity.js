$(document).ready(function() {
    // Apply cursor styling to selectable cells
    $("table tbody td").each(function() {
        if (!$(this).text().includes("Not Available")) {
            $(this).css("cursor", "pointer");
        }
    });
    
    // Click event for activity cells
    $("table tbody td").click(function() {
        // Ignore "Not Available" and header/title cells
        if ($(this).text().includes("Not Available")) {
            return;
        }
        
        // Toggle selection class and background color
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected").css("background-color", "");
        } else {
            $(this).addClass("selected").css("background-color", "lightgreen");
        }
    });
});
