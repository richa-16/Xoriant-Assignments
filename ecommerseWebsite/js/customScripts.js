// Get the modal
var modal = document.getElementById('login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//
// Scripts for modals
function openModal(modalName){
	console.log("Reached here ");
	document.getElementById(modalName).style.display='block';
}
function closeModals(modalName){
	console.log("Reached here ");
	document.getElementById(modalName).style.display='none';
}

// Scripts for slider

