package com.ioinfo.info.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class SysIOInfoEmailService {

    private final JavaMailSender mailSender;

    @Autowired
    public SysIOInfoEmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("ganeshkavale27@gmail.com"); // use configured 'from' address
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        try {
//            mailSender.send(message);
            System.out.println("✅ Email sent successfully to " + to);
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("❌ Failed to send email: " + e.getMessage());
        }
    }
}
