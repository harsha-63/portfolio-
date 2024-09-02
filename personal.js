// function sendMail(){
//     const params={
//         name : document.getElementById("name").value ,
//         email : document.getElementById("email").value,
//         message: document.getElementById("message").value
//     };

//     const serviceID = "service_kz8thlc";
//     const templateID = "template_44mzwvn";

//     emailjs.send(serviceID,templateID,params)
//     .then(
//         res =>{
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("Your message send successfully");
//         }
//     )
//     .catch(err=>console.log(err));
// }
    function sendMail(){
    const params={
        name : document.getElementById("name").value ,
        email : document.getElementById("email").value,
        message:document.getElementById("message").value
    };

    const serviceID = "service_kz8thlc";
    const templateID = "template_44mzwvn";

    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value="";
            console.log(res);
            alert("Your message send successfully");
        }
    )
    .catch(err=>console.log(err));
}