document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#contact')

    form.addEventListener("submit",sendMsg)
    function sendMsg(e) {
        e.preventDefault();
        const name = document.querySelector('#name')
        const email = document.querySelector('#email')
        const subject = document.querySelector('#subject')
        const message = document.querySelector('#message')
        let temp = {
            from_name: name.value,
            email: email.value,
            subject:subject.value,
            message: message.value   
        }
        emailjs.send('service_bmmgxym','template_m52v5tc',temp).then(function(res){
            alert("Thank you for contact me!")
        })
        // Email.send({
        //     SecureToken: "699c7dcc-353f-49a3-94e5-22895d2b2db4",
        //     To: 'ttnguyenkhtn@gmail.com',
        //     From: email.value,
        //     Subject: "Contact Form: "+ name.value,
        //     Body: message.value
        // }).then(
        //     message => alert(message)
        // );
    }
}, false)