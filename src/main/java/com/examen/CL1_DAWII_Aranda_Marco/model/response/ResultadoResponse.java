package com.examen.CL1_DAWII_Aranda_Marco.model.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ResultadoResponse {
    private Boolean respuesta;
    private String mensaje;
}