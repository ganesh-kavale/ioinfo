package com.ioinfo.info.service.impl;

import java.net.PasswordAuthentication;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.ioinfo.info.service.EmailService;




@Service
public class EmailServiceImpl implements EmailService {

	@Value("${appinfo.email.host}")
	private String emailHost;

	@Value("${appinfo.email.host.value}")
	private String emailHostValue;

	@Value("${appinfo.email.fromEmail}")
	private String fromEmail;

	@Value("${appinfo.email.host.port}")
	private String emailHostPort;

	@Value("${appinfo.email.host.portValue}")
	private int emailHostPortValue;

	@Value("${appinfo.email.host.ssl}")
	private String emailHostSsl;

	@Value("${appinfo.email.host.sslValue}")
	private boolean emailHostSslValue;

	public String getEmailHost() {
		return emailHost;
	}

	public void setEmailHost(String emailHost) {
		this.emailHost = emailHost;
	}

	public String getEmailHostValue() {
		return emailHostValue;
	}

	public void setEmailHostValue(String emailHostValue) {
		this.emailHostValue = emailHostValue;
	}

	public String getFromEmail() {
		return fromEmail;
	}

	public void setFromEmail(String fromEmail) {
		this.fromEmail = fromEmail;
	}

	public String getEmailHostPort() {
		return emailHostPort;
	}

	public void setEmailHostPort(String emailHostPort) {
		this.emailHostPort = emailHostPort;
	}

	public int getEmailHostPortValue() {
		return emailHostPortValue;
	}

	public void setEmailHostPortValue(int emailHostPortValue) {
		this.emailHostPortValue = emailHostPortValue;
	}

	public String getEmailHostSsl() {
		return emailHostSsl;
	}

	public void setEmailHostSsl(String emailHostSsl) {
		this.emailHostSsl = emailHostSsl;
	}

	public boolean isEmailHostSslValue() {
		return emailHostSslValue;
	}

	public void setEmailHostSslValue(boolean emailHostSslValue) {
		this.emailHostSslValue = emailHostSslValue;
	}

	@Override
	public void sendEmail(String emailId) {
		// TODO Auto-generated method stub

		Properties properties = System.getProperties();

		System.out.println("PROPERTIES" + properties);
		properties.put(getEmailHost(), getEmailHostValue());
		properties.put(getEmailHostPort(), getEmailHostPortValue());
		properties.put(getEmailHostSsl(), "true");
		properties.put("mail.smtp.auth", "true");

		// For creating Session Object
		Session session = Session.getInstance(properties, new Authenticator() {

			@Override
			protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
				// TODO Auto-generated method stub
				return new javax.mail.PasswordAuthentication(getFromEmail(), "rwziqkhslrfeeqlt");

			}
		});

		// step 2: compose the message in the form of text or multimedia
		MimeMessage m = new MimeMessage(session);

		try {
			// from email sender
			m.setFrom(getFromEmail());

			// for writing message
			m.addRecipient(Message.RecipientType.TO, new InternetAddress(emailId));

			// adding subject in the mail
			m.setSubject("Subject to test email from app info");

			// adding text in message body
			m.setText("Message field from app info");

			// send

			// Step 3: send the message using Transport class
			Transport.send(m);

			System.out.println("Message is successfully sent from " + getFromEmail() + " to " + emailId);

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
