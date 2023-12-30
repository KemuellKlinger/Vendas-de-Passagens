document.addEventListener('DOMContentLoaded', function () {
    const inputFields = document.querySelectorAll('.input-style');

    inputFields.forEach(function (input) {
        input.addEventListener('focus', function () {
            input.parentElement.querySelector('.label-style').classList.add('label-float');
        });

        input.addEventListener('blur', function () {
            if (input.value === '') {
                input.parentElement.querySelector('.label-style').classList.remove('label-float');
            }
        });
    });
});