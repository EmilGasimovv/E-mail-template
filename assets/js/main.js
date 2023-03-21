//Fixing Inputs Charset
let inpName = document.querySelectorAll('.inp');
inpName.forEach(inp => {
    inp.addEventListener('keypress', (e) => {
        if (inp.id == "name") {
            let nam = String.fromCharCode(e.which);
            if (!/[^0-9]/.test(nam)) {
                e.preventDefault();
            }
        }
        else {
            let phn = String.fromCharCode(e.which);
            if (!/[^a-z]/gi.test(phn)) {
                e.preventDefault();
            }
        }
    })

})
// Sending Email Using SMTP API
function sendM() {
    Email.send({
        Port: "2525",
        Host: "smtp.elasticemail.com",
        Username: "emilgasimov11@gmail.com",
        Password: "E4CE42D53BC74AB81F40DD9E3E00DF231B94",
        To: 'gasimovemil66@gmail.com',
        From: "emilgasimov11@gmail.com",
        Subject: "New E-Mail",
        Body: "Name: " + document.getElementById('name').value + "<br>" +
            "E-Mail: " + document.getElementById('email').value + "<br>" +
            "Phone: " + document.getElementById('phone').value + "<br>" +
            "Message: " + "<br>" + document.getElementById('text').value
    }).then(
        alert('Messagee was Sent!')
    );
}

