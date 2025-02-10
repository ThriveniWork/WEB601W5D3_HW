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

        // Get the column index of the clicked cell
        var columnIndex = $(this).index();
        // Get the corresponding site name from the table header
        var siteName = $("table thead th").eq(columnIndex).text();

        // Toggle selection class and background color
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected").css("background-color", "");
            // Remove the activity from the display box
            $("#result p").filter(function() {
                return $(this).text() === $(this).text();
            }).remove();
        } else {
            $(this).addClass("selected").css("background-color", "lightgreen");
            // Add the activity to the display box
            $('#result').append("<p>" + $(this).text() + " at " + siteName + "</p>");
        }

        // Show or hide the display box based on whether any activities are selected
        if ($("table tbody td.selected").length > 0) {
            $('#displaySelected').css('visibility', 'visible');
            $('#displaySelected').css("margin-top", "2em");
        } else {
            $('#displaySelected').css('visibility', 'hidden');
            $('#displaySelected').css("margin-top", "0em");
            $('#result').empty(); // Clear the display box when no activities are selected
        }
    });
});