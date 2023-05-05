package com.example.backend.controller;

import com.example.backend.dao.EstudianteRepository;
import com.example.backend.model.Reto;
import com.example.backend.service.RetoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/retos")
public class RetoController {
    @Autowired
    RetoService retoService;
    @Autowired
    private EstudianteRepository estudianteRepository;

    @DeleteMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deleteReto(@PathVariable String id){
        estudianteRepository.deleteById(id);
    }

    @PostMapping(value = "agregar", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String agregarReto(@RequestBody Reto reto){
       return String.valueOf(retoService.agregarReto(reto));
    }
}
