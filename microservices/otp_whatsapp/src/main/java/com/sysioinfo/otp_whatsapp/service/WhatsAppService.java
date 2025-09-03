package com.sysioinfo.otp_whatsapp.service;

import com.sysioinfo.otp_whatsapp.dto.WhatsAppMessageRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;

@Service
public class WhatsAppService {

    @Value("${whatsapp.api.url}")
    private String whatsappApiUrl;

    @Value("${whatsapp.phone.number.id}")
    private String phoneNumberId;

    @Value("${whatsapp.access.token}")
    private String accessToken;

    public String sendMessage(WhatsAppMessageRequest request) {
        String url = whatsappApiUrl + "/" + phoneNumberId + "/messages";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> body = new HashMap<>();
        body.put("messaging_product", "whatsapp");
        body.put("to", request.getToPhoneNumber());
        body.put("type", "template");

        Map<String, Object> template = new HashMap<>();
        template.put("name", request.getTemplateName());
        template.put("language", Map.of("code", "en_US"));
        body.put("template", template);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);
        return response.getBody();
    }
}
