package com.vehicle.servicebooking.repository;

import com.vehicle.servicebooking.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Long> {
}
