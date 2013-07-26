var nodemailer = require("nodemailer");

exports.setOptions = function(mailOptions) {
	
	console.log('Mailer Init');
	// create reusable transport method (opens pool of SMTP connections)
	this.smtpTransport = nodemailer.createTransport("SMTP",{
	    service: "Gmail",
	    auth: {user: "tigeryan55.node@gmail.com", pass: "removedforGitHub"}
	});
	this.mailOptions = mailOptions;
	
}

exports.sendMail = function () {

	console.log('Mailer:sendMail');
	this.smtpTransport.sendMail(this.mailOptions, function(error, response) {
	    if(error){
	        console.log(error);
			return 0;
	    }else{
	        console.log("Message sent: " + response.message);
			return 1;
	    }
	});
	
};

exports.closeMail = function () {
	console.log('Mailer:closeMail');
	this.smtpTransport.close();
};

//module.exports = Mailer;

