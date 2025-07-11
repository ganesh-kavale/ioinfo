package com.ioinfo.info.scheduler;




import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;

import com.ioinfo.info.service.SysIOInfoEmailService;

@Configuration
public class EmailScheduler {

	@Autowired
	private SysIOInfoEmailService emailService;	

    @Bean
    public TaskScheduler taskScheduler() {
        return new ThreadPoolTaskScheduler();
    }

    @EventListener(ApplicationReadyEvent.class)
    public void scheduleEmailAtSpecificTime() {
        // Target time: 11 July 2025 at 11:00 AM
        LocalDateTime targetTime = LocalDateTime.of(2025, 7, 11, 11, 57);
        ZonedDateTime zonedDateTime = targetTime.atZone(ZoneId.systemDefault());

        Date triggerTime = Date.from(zonedDateTime.toInstant());

        new Thread(() -> {
            try {
                long delay = triggerTime.getTime() - System.currentTimeMillis();
                if (delay > 0) {
                    System.out.println("⏳ Waiting until " + triggerTime);
                    Thread.sleep(delay);
                }

                // Call your email service
                emailService.sendEmail(
                        "ganeshkavale27@gmail.com",
                        "🔥 Scheduled Notification",
                        "This is your scheduled message for 11 July 2025 20 min, 11AM!"
                );

            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }).start();
    }
}
