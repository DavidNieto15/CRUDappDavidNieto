    

    const addItem=document.getElementById("saveLSbutt");
    saveLSbutt.addEventListener('click', getLocalStorage);
    


   function getLocalStorage(){
        const inputEmail= document.getElementById("emailInput");
    const inputQuestion= document.getElementById("questionInput");

    localStorage.setItem("emailUser", JSON.stringify(inputEmail.value));
    localStorage.setItem("questionUser", JSON.stringify(inputQuestion.value));

    const theEMail=localStorage.getItem('emailUser')
    const theQuestion=localStorage.getItem('questionUser');

    
    const userMail=document.getElementById('listUsers');
    const newMailElement=document.createElement('li');
    const textMailList=document.createTextNode(theEMail);
    newMailElement.appendChild(textMailList);
    userMail.appendChild(newMailElement);

    const userQuestion=document.getElementById('listQuestions');
    const newQuestionElement=document.createElement('li');
    const textQuestionList=document.createTextNode(theQuestion);
    newQuestionElement.appendChild(textQuestionList);
    userQuestion.appendChild(newQuestionElement);

    const userImages=document.getElementById('listImages');
    const newImageElement=document.createElement('li');
    const ImageList=document.createElement("input");
    ImageList.type='button';
    ImageList.value ='Editar';
    ImageList.className= "send-button ";
    newImageElement.appendChild(ImageList);
    userImages.appendChild(newImageElement);
    
    const userImages2=document.getElementById('listImages2');
    const newImageElement2=document.createElement('li');
    const ImageList2=document.createElement("input");
    ImageList2.type='button';
    ImageList2.value ='Borrar';
    ImageList2.className= "send-button ";
    newImageElement2.appendChild(ImageList2);
    userImages2.appendChild(newImageElement2);

   }




