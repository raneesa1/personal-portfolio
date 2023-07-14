
  

    function btnmess(){
          var name= document.getElementById("name");
    var email= document.getElementById("email");
    var message= document.getElementById("message");    
        if(name.value==""){
            alert("please add your name");
            return ;
    
        }
        if(email.value==""){
            alert("please add your email");
            return ;
    
        }
        if(message.value==""){
            alert("please add your message");
            return ;
    
        }


}