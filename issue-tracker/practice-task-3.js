
// send and delete name 
const SendName=()=>{
    let name=document.getElementById('name').value;
    localStorage.setItem('name',name);
    console.log(name);
}

const deleteName=()=>{
    localStorage.removeItem('name');
}

// send and delete email 
const SendEmail=()=>{
    let email=document.getElementById('email').value;
    localStorage.setItem('email',email);
    console.log(email);
}

const deleteEmail=()=>{
    localStorage.removeItem('email');
}

// send and delete message 
const SendMsg=()=>{
    let msg=document.getElementById('message').value;
    localStorage.setItem('msg',msg);
    console.log(msg);
}

const deleteMsg=()=>{
    localStorage.removeItem('msg');
}



// send data together to localstorage  

const sendAll=()=>{
    const getAllInput=(id)=>document.getElementById(id).value;
    let name=getAllInput('name');
    let email=getAllInput('email');
    let msg=getAllInput('message');
    // console.log(name);
    // console.log(email);
    // console.log(msg);

    const inputs={name,email,msg};
    localStorage.setItem('inputs',JSON.stringify(inputs));

    
}


// reset fields 
const reset=()=>{
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let msg=document.getElementById('message');

    localStorage.clear();

    name.value=''
    email.value=''
    msg.value=''
}

