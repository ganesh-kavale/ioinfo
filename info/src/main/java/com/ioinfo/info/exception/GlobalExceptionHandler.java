package com.ioinfo.info.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomNullValueException.class)
    public ResponseEntity<String> handleMyCustomException(CustomNullValueException ex) {
        // Customize the response as needed
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // Add more @ExceptionHandler methods for other custom exceptions if needed
}
