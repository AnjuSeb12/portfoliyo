document.querySelector('#loginForm').addEventListener('submit',function(event)
{
    event.preventDefault();
    let alertMes=document.querySelector('#alertMessage');
        alertMes.style.display='none';
    let firstnameError=document.querySelector('#firstError');
        firstnameError.style.display='none';
    let lastnameError=document.querySelector('#lastError');
        lastnameError.style.display='none';
    

    let emailError=document.querySelector('#emailError');
        emailError.style.display='none';
    let subjectError=document.querySelector('#subjectError');
        subjectError.style.display='none';

    let addressError=document.querySelector('#addError');
        addressError.style.display='none';
    let firstname=document.querySelector('#firstname').value;
    let lastname=document.querySelector('#lastname').value;
  
    
    let email1=document.querySelector('#email').value;
    let subject=document.querySelector('#subject').value;
    let address=document.querySelector('#address').value;

     if(firstname == '' || firstname == null){
        firstnameError.style.display='block';
        firstnameError.innerHTML='Enter Firstname';
        return false;

     }
     if(lastname == '' || lastname == null){
        lastnameError.style.display='block';
        lastnameError.innerHTML='Enter Lastname';
        return false;

     }
    
     if(email1 == '' || email1 == null){
        emailError.style.display='block';
        emailError.innerHTML='Enter Mail';
        return false;

     }
     if(subject == '' || subject == null){
        subjectError.style.display='block';
        subjectError.innerHTML='Enter subject';
        return false;

     }
    

     
     if(address == '' || address == null){
        addressError.style.display='block';
        addressError.innerHTML='Type Message';
        return false;

     }
     
     alertMes.innerHTML="Successfully Submitted"
     alertMes.style.display='block';
     return false;

})
function resetSignup(){
    let ele=document.querySelector('#loginForm');
    ele.reset();
}


