package com.sysioinfo.otp_whatsapp.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class WhatsAppMessageRequest {
    private String toPhoneNumber; // in international format e.g., "918888888888"
    private String templateName;  // e.g., "hello_world"
}
