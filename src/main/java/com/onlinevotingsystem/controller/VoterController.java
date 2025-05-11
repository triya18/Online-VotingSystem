package com.onlinevotingsystem.controller;

import com.onlinevotingsystem.model.Voter;
import com.onlinevotingsystem.repository.VoterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/voters")
@CrossOrigin(origins = "*")
public class VoterController {

    @Autowired
    private VoterRepository voterRepository;

    @GetMapping
    public List<Voter> getAllVoters() {
        return voterRepository.findAll();
    }

    @PostMapping
    public Voter registerVoter(@RequestBody Voter voter) {
        return voterRepository.save(voter);
    }
}
