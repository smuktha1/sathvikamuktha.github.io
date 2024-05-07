document.addEventListener('DOMContentLoaded', function() {
    var currentTimeElement = document.getElementById('current-time');
    var currentDate = new Date();
    currentTimeElement.textContent = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + 
                                    ' on ' + currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

})

// function graduation() {
//     const numberInput = document.getElementById('year').value;
//     const absoluteNumber = Math.abs(parseInt(numberInput));
//     const gradName = ['Freshmen','Sophomore','Junior','Senior','graduated'];
//     alert('You are' + absoluteNumber + gradName);
// }