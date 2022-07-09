'use strict';
const form = document.querySelectorAll('form')
for (let index = 0; index < form.length; index++) {
    
    document.addEventListener('DOMContentLoaded', function (){
        const feedback = form[index];
    
        feedback.addEventListener('submit', formSend);
        
    
        async function formSend(e) {
            e.preventDefault(); // выключаем стандартную работу сабмита
            let error = formValidate(feedback); // проверка валидации\
            let errorVisable = formValidateVisable(feedback)
            let formData = new FormData(feedback);
            if (error === 0 ) {
    
    
                
    
                let response = await fetch('../sendmail.php', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    let result = await response.json();
                    alert(result.message);
                    feedback.reset();
    
    
    
                }
                 else {
                    alert('Ошибка')
    
                };
    
    
    
    
            };
            if (errorVisable === 0) {
                let response = await fetch('../sendmail.php', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    let result = await response.json();
                    alert(result.message);
                    feedback.reset();
    
    
    
                }
                 else {
                    alert('Ошибка')
    
                };

            };
    
        };
        function formValidate(feedback) {
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
            
            function FormAddError(input) {
                input.parentElement.classList.add('_error');
                input.classList.add('_error');
        
            };
            function FormRemoveError(input) {
                input.parentElement.classList.remove('_error');
                input.classList.remove('_error');
        
            };
            return error
        };
        function formValidateVisable(feedback) {
            let errorVisable = 0;
            let formReqVisable = document.querySelectorAll('._reqVisable'); // все элементы которые будем проверять
            
            for (let index = 0; index < formReqVisable.length; index++) {
                const inputVisable = formReqVisable[index];
                FormRemoveErrorVisable(inputVisable);
    
                if (inputVisable.classList.contains('_emailVisable')) {
                    if (emailTest(inputVisable)) {
                        FormAddErrorVisable(inputVisable); // проверка валидации для почты
                        errorVisable++;
    
                    };
    
                } else {
                    if (inputVisable.value === '') {
                        FormAddErrorVisable(inputVisable); // проверка для остальных инпутов
                        errorVisable++;
                    }
                };
    
    
            };
            
            function FormAddErrorVisable(inputVisable) {
                inputVisable.parentElement.classList.add('_error');
                inputVisable.classList.add('_error');
        
            };
            function FormRemoveErrorVisable(inputVisable) {
                inputVisable.parentElement.classList.remove('_error');
                inputVisable.classList.remove('_error');
        
            };
            return errorVisable
        };
  

        
        const emailTest = (input) => {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        };
    
    } );
        
    
    
}// валидация и обратная связь

