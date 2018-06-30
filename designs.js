$(document).ready(function () {
    //function makeGrid();
    function makeGrid() {
        myTable = $('<table></table>').attr("id","pixelCanvas").appendTo("#tableDiv");
        // Select size input
        var rows = $('#inputWeight').val();
        var cols = $('#inputHeight').val();
        for (var i = 0; i < rows; i++) {
            var row = $('<tr></tr>').appendTo(myTable);
            for (var j = 0; j < cols; j++) {
                $('<td></td>').appendTo(row);
            }
        }
    }
    // When size is submitted by the user, call makeGrid()
    $('#submit').click(function () {
        //Removing the table element everytime the submit button is clicked
        $('table').remove("#pixelCanvas");
        //calling function makeGrid
        makeGrid();
        //function for the color picker
        $('td').click(function () {
            // Select color input
            colorPicker = $('#colorPicker').val();
            colorPicker.toString();
            $(this).css("background-color", colorPicker);
        });
    });
});