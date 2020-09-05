
    
        let userData = [];
        function pushForm(){
            userData.push(username.value);
            userData.push(password.value);
            console.log(userData)
        }
    
    
    function validate(){
        let username = document.getElementById('username');
        let password = document.getElementById('password');
        
        let regexUsername = /^.{6,}$/;
        let regexPassword = /^.{8,}$/;
        
        let usernameValidation = regexUsername.test(username.value);
        let passwordValidation = regexPassword.test(password.value);
        
        if(username.value.trim()=="" ||password.value.trim()=="")
        {
            alert('No blank values allowed');
            return false;
        } else if(usernameValidation == false){
            alert('username should be more than 6 characters');
            return false;
        } else if(passwordValidation == false){
            alert('password should be more than 8 characters');
            return false;
        } else if (passwordValidation&&usernameValidation){
            let userData = [];
            userData.push(username.value);
            userData.push(password.value);
            console.log(userData)
            return true;
        }
    }



// function clickFunc(){
//     userData.push(username);
//     userData.push(password);
//     console.log(userData);
//     username.str.replace(`${username}`,"");
//     password.str.replace(`${password}`,"");

//     if(regexUsername.test(userData[0]) && regexPassword.test(userData[1]))
//     {
//         document.getElementsByClassName('alert')[0].innerHTML = 
//         `<div>username : ${userData[0]}</div>
//         <div>password : ${userData[1]}</div>`;
//     }else{
//         document.getElementsByClassName('alert')[0].innerHTML=
//         `<p> minimal username 6 characters dam password 8 character</p>`
//     }


//     console.log(regexUsername.test(userData[0]));
//     console.log(regexPassword.test(userData[1]));
// }

