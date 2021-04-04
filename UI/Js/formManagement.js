$(function() {

    function formDataAsJson(formData){
      var object = {};
      
      formData.forEach((value, key) => object[key] = value);
      return JSON.stringify(object);
    }

    async function signup(e) {
        e.preventDefault();
        
        let formJson = formDataAsJson(new FormData(signupForm));
        let response = await fetch('https://localhost:44336/api/Actions/signUp', {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          },
          body: formJson
        });

        console.log(response);
        try {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          } 
          else {
            let result = await response.text();
            console.log(result);
            alert("Успех");
          }
        } catch (error) {
          console.error(error);
          alert("Ошибка");
        }

        //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        closePopups();
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