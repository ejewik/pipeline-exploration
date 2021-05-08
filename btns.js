export { customAlert, customConfirm };

function customAlert() { 
    let alertDialog = document.getElementById('alertDialog');
    let alertBtn = document.getElementById('alertBtn');
    alertBtn.addEventListener('click', function () {
        alertDialog.showModal();
    });
}

function customConfirm() {
    let confirmDialog = document.getElementById('confirmDialog');
    let confirmButton = document.getElementById('confirmBtn');
    let cancelButtonDialog = document.getElementById('confirmCancelBtn');
    let confirmButtonDialog = document.getElementById('confirmConfirmBtn');
    
    confirmButton.addEventListener('click', function() {
        confirmDialog.showModal();
    });
        
    confirmButtonDialog.addEventListener('click', function() {
        confirmButtonDialog.value = 'confirmed';
    });

    cancelButtonDialog.addEventListener('click', function() {
        cancelButtonDialog.value = 'canceled';
    });
}
