var nodemailer = require("nodemailer");

function Mailer(mailOptions) {
	
	// create reusable transport method (opens pool of SMTP connections)
	this.smtpTransport = nodemailer.createTransport("SMTP",{
	    service: "Gmail",
	    auth: {user: "gmail.user@gmail.com", pass: "userpass"}
	});
	this.mailOptions = mailOptions;
	
}

Mailer.prototype.sendMailer = function () {

	this.smtpTransport.sendMail(mailOptions, function(error, response) {
	    if(error){
	        console.log(error);
	    }else{
	        console.log("Message sent: " + response.message);
	    }
	
	    // if you don't want to use this transport object anymore, uncomment following line
	    //smtpTransport.close(); // shut down the connection pool, no more messages
	});
	
};

Mailer.prototype.closeMailer = function () {
	this.smtpTransport.close();
};

module.exports = Mailer;

