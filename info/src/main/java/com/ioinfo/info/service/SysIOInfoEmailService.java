package com.ioinfo.info.service;


import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.util.Map;


@Service
public class SysIOInfoEmailService {

    private final JavaMailSender mailSender;

    @Autowired
    public SysIOInfoEmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Autowired
    private TemplateEngine templateEngine; // ✅ Thymeleaf engine

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

    public void sendEmailWithTemplate(String to, String subject, String templateName, Map<String, Object> templateModel) {
        try {
            // ✅ Create Thymeleaf context and set variables
            Context context = new Context();
            context.setVariables(templateModel);

            // ✅ Process template into HTML
            String htmlContent = templateEngine.process(templateName, context);

            // ✅ Use MimeMessage for HTML email
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            helper.setFrom("ganeshkavale27@gmail.com"); // ideally fetch from application.properties
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(htmlContent, true); // true → send HTML

            mailSender.send(mimeMessage);
            System.out.println("✅ Email sent successfully to " + to);

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("❌ Failed to send email: " + e.getMessage());
        }
    }
}
