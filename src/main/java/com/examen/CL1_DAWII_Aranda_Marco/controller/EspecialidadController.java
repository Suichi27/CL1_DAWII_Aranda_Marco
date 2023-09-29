package com.examen.CL1_DAWII_Aranda_Marco.controller;

import com.examen.CL1_DAWII_Aranda_Marco.model.bd.Especialidad;
import com.examen.CL1_DAWII_Aranda_Marco.service.EspecialidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/Especialidad")
public class EspecialidadController {
    @Autowired
    private EspecialidadService especialidadService;

    @GetMapping("frmMantEspecialidad")
    public String frmMantEspecialidad(Model model){
        model.addAttribute("listarEspecialidad", especialidadService.listarEspecialidad());
        return "Especialidad/frmMantEspecialidad";
    }

    @GetMapping("/listarEspecialidad")
    @ResponseBody
    public List<Especialidad> listarEspecialidad() {return especialidadService.listarEspecialidad();}

}
