
'use strict';
// feedback hiden
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault(); // выключаем стандартную работу сабмита
        let error = formValidate(form); // проверка валидации
        let formData = new FormData(form);
        if (error === 0) {


            $('.feedback__error').removeClass('feedback__error-hide');

            let response = await fetch('../sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();



            } else {
                alert('Ошибка')

            };




        } else {
            $('.feedback__error').addClass('feedback__error-hide');
        }

    };
    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req'); // все элементы которые будем проверять
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            FormRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    FormAddError(input); // проверка валидации для почты
                    error++;

                };

            } else {
                if (input.value === '') {
                    FormAddError(input); // проверка для остальных инпутов
                    error++;
                }
            };


        };
        return error;
    };
    function FormAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');

    };
    function FormRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');

    };
    const emailTest = (input) => {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    };
});

//feedback visable
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-visable');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault(); // выключаем стандартную работу сабмита
        let error = formValidate(form); // проверка валидации
        let formData = new FormData(form);
        if (error === 0) {


            $('.feedback-visable__error').removeClass('feedback-visable__error-hide');

            let response = await fetch('../sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();



            } else {
                alert('Ошибка')

            };




        } else {
            $('.feedback-visable__error').addClass('feedback-visable__error-hide');
        }

    };
    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req'); // все элементы которые будем проверять
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            FormRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    FormAddError(input); // проверка валидации для почты
                    error++;

                };

            } else {
                if (input.value === '') {
                    FormAddError(input); // проверка для остальных инпутов
                    error++;
                }
            };


        };
        return error;
    };
    function FormAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');

    };
    function FormRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');

    };
    const emailTest = (input) => {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    };
});