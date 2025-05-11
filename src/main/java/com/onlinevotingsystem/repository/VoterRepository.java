package com.onlinevotingsystem.repository;

import com.onlinevotingsystem.model.Voter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoterRepository extends JpaRepository<Voter, Long> {
}
