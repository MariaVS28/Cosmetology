$(function() {

    async function signup(e) {
        e.preventDefault();
        
        let formData = new FormData(signupForm);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
/*
        let response = await fetch('/article/formdata/post/user', {
          method: 'POST',
          body: new FormData(signupForm)
        });
    
        let result = await response.json();
        */
        
        await Promise.resolve().then(closePopups);
        //alert("Вы записаны");
    }

    async function sendToSupport(e) {
        e.preventDefault();
        
        let formData = new FormData(supportForm);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
/*
        let response = await fetch('/article/formdata/post/user', {
          method: 'POST',
          body: new FormData(supportForm)
        });
    
        let result = await response.json();
        */
        
        await Promise.resolve().then(closePopups);
        //alert("Ваш запрос отправлен");
    }

    signupForm.onsubmit = signup;
    supportForm.onsubmit = sendToSupport;

});