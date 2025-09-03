package com.sysioinfo.otp_whatsapp.controller;


import com.sysioinfo.otp_whatsapp.dto.WhatsAppMessageRequest;
import com.sysioinfo.otp_whatsapp.service.WhatsAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/whatsapp")
public class WhatsAppController {

    @Autowired
    private WhatsAppService whatsAppService;

    @PostMapping("/send")
    public String sendMessage(@RequestBody WhatsAppMessageRequest request) {
        return whatsAppService.sendMessage(request);
    }
}
