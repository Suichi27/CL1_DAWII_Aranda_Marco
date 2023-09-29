package com.examen.CL1_DAWII_Aranda_Marco.service;

import com.examen.CL1_DAWII_Aranda_Marco.model.bd.Especialidad;
import com.examen.CL1_DAWII_Aranda_Marco.repository.EspecialidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EspecialidadService {
    @Autowired
    private EspecialidadRepository especialidadRepository;

    public List<Especialidad> listarEspecialidad() {
        return especialidadRepository.findAll();
    }

    public void registrarEspecialidad(Especialidad especialidad) {

        especialidadRepository.save(especialidad);
    }

    public void eliminarEspecialidad(Especialidad especialidad) {
        especialidadRepository.deleteById(especialidad.getIdesp());
    }
}