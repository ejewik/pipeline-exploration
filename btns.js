export { customAlert, customConfirm };

function customAlert() {
    // weird tabbing for linter testing
        let alertDialog = document.getElementById('alertDialog');
    let alertBtn = document.getElementById('alertBtn');
            alertBtn.addEventListener('click', function () {
        alertDialog.showModal();

        // large white space for linter testing








    });
}

function customConfirm() {
    // no whitespace for linter testing 
    var confirmDialog=document.getElementById('confirmDialog');
    var confirmButton=document.getElementById('confirmBtn');
    let cancelButtonDialog=document.getElementById('confirmCancelBtn');
    let confirmButtonDialog = document.getElementById('confirmConfirmBtn');

    confirmButton.addEventListener('click', function () {
        confirmDialog.showModal();
    });

    confirmButtonDialog.addEventListener('click', function () {
        confirmButtonDialog.value = 'confirmed';
    });

    cancelButtonDialog.addEventListener('click', function () {
        cancelButtonDialog.value = 'canceled';
    });
}
