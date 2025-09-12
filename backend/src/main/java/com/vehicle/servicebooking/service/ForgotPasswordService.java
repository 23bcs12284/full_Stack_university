package com.vehicle.servicebooking.service;

import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.UUID;
import com.vehicle.servicebooking.entity.PasswordResetToken;
import com.vehicle.servicebooking.repository.PasswordResetTokenRepository;

@Service
public class ForgotPasswordService {
  private final PasswordResetTokenRepository tokenRepository;

  public ForgotPasswordService(PasswordResetTokenRepository tokenRepository) {
    this.tokenRepository = tokenRepository;
  }

  public String createPasswordResetToken(String email) {
    String token = UUID.randomUUID().toString();

    PasswordResetToken resetToken = new PasswordResetToken();
    resetToken.setEmail(email);
    resetToken.setToken(token);
    resetToken.setExpiryDate(LocalDateTime.now().plusMinutes(15)); // 15 min expiry

    tokenRepository.save(resetToken);
    return token;
  }

  public boolean validatePasswordResetToken(String token) {
    return tokenRepository.findByToken(token)
        .filter(t -> t.getExpiryDate().isAfter(LocalDateTime.now()))
        .isPresent();
  }
}
