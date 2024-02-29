// ***Javier**
// const dissBtn = document.getElementById("btn-dismiss");
// dissBtn.addEventListener('click', function() {
//     const scheduleContainer = document.querySelector('.schedule_container');
//     scheduleContainer.style.display = 'none';
// });

// get element (dismiss button
// add listener to dismiss button
//     click (1st argument)
//     function (2nd argument)
//         target schedule container
//         set schedule style display to none - Javier 

//****Toya***
// document.getElementById("btn-dismiss");
// get element (dismiss button)
// add listener to dismiss button
//     click (1st argument)
//     function (2nd argument)
//         target schedule container
//         set visibility of schedule container to hidden

// Create class styles 
//     .hidden 
//     .show 
// Use the query selector to target the dismiss button 
//     Add event listener to the dismiss button 
//         Click (First argument) 
//         Function (Second argument) 
//             Use the query selector to target the schedule container 
//             Execute the add method on the class list object of the schedule container 

// ### Jim ###
// const removeScheduleContainer = function () {
//     document.querySelector('.schedule_container').innerHTML = "";
//     console.log("ONE");
// }

// const removeScheduleThroughParent = function () {
//     const scheduleContainer = document.querySelector('.schedule_container');
//     scheduleContainer.parentNode.removeChild(scheduleContainer);
//     console.log("TWO");
// }

// const dismissButton = document.getElementById('btn-dismiss');

// dismissButton.addEventListener('click', removeScheduleContainer);
// dismissButton.addEventListener('click', removeScheduleThroughParent);


// const functionArray = [removeScheduleContainer, removeScheduleThroughParent];

// functionArray.map((fun) => {
//     dismissButton.addEventListener('click', fun);
// });

// RICKY

// const dismissBtn = document.getElementById("btn-dismiss");
// const scheduleContainer = document.getElementById('schedule_container');
// dismissBtn.addEventListener('click', () => scheduleContainer.remove());

// // PARKER

// document.getElementById('btn-dismiss').addEventListener('click', function(){
//     document.querySelector('.schedule_container').innerHTML = '';
// });