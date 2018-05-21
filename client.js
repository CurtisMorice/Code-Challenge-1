console.log("js");

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('#generate').on('click', pCounter);

    $('.swap').on('click', swap);
    //$('.delete').on('click', deleteButton);


}
let p = 0;
//$('#colorBox').css('background-color', 'red');


function pCounter() {
    p++;
    $('#pCount').empty();
    $('#pCount').append(p);
    $('#colorBox').css('background-color', 'red');
}

function swap() {
    if ($('.swap').on('click')) {
        $('#colorBox').css('background-color', 'yellow');
    } else {
        return true;
    }

}

/*unction deleteButton() {
    const deleteBox = $(".delete").val();
    if ()


}*/

/*Instructions

Follow the steps below to complete the code challenge:

    !!!Create a <button> element on the DOM, you may do this in jQuery, or write 
    !!!!it directly in the HTML code. Have the button text read "Generate".

   !!!! Using jQuery, append a <div> element when you click the button.

   !!!! Inside the <div> element you created in the previous step, create a <p> 
    element that shows how many times you have clicked the "Generate" button 
    from the first step.

    !!!!Inside the <div> element created in step two, append two <button> elements with
     text of "Swap" & "Delete".

   !!!!In a CSS file, any <div> created using the "Generate" button should start with 
    red as it's background-color.

    Clicking a "Swap" <button> should change its parent background-color from red to 
    yellow.

    Clicking the "Swap" <button> on a yellow div should turn the background-color to 
    red.

    Clicking a "Delete" <button> should remove its parent <div>.

No need to do anything beyond the challenge described above. Once you are complete, 
check your code into a GitHub repo and submit via this application.
Example*/