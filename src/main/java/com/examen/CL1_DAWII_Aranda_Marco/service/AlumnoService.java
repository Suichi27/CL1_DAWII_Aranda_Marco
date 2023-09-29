package com.examen.CL1_DAWII_Aranda_Marco.service;

import com.examen.CL1_DAWII_Aranda_Marco.model.bd.Alumno;
import com.examen.CL1_DAWII_Aranda_Marco.repository.AlumnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlumnoService {

    @Autowired
    private AlumnoRepository alumnoRepository;

    public List<Alumno> listarAlumno(){
        return alumnoRepository.findAll();
    }

    public void registrarAlumno(Alumno alumno) {alumnoRepository.save(alumno);}

    public void eliminarAlumno(String idAlumno){alumnoRepository.deleteById(idAlumno);}





}
