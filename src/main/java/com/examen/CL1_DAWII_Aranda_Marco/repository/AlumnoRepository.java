package com.examen.CL1_DAWII_Aranda_Marco.repository;

import com.examen.CL1_DAWII_Aranda_Marco.model.bd.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, String>

{


}
