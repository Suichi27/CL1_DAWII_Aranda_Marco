$(document).on("click","#btnagregar",function(){
$("#txtidalumno").val("A00");
$("#txtapealumno").val("");
$("#txtnomalumno").val("");
$("#txtproce").val("N");
$.ajax({
        type: "GET",
        url: "/Especialidad/listarEspecialidad",
        dataType: "json",
        success: function(resultado){
            $.each(resultado, function(index, value){
                $("#cboesp").append(
                    `<option value="${value.idesp}">${value.nomesp}</option>`
                )
            })
        }
    })
$("#modalNuevo").modal("show");

});

$(document).on("click","#btnactualizar",function(){
//alert("HolaBoton Agregar");
$("#txtidalumno").val($(this).attr("data-idalumno"));
$("#txtapealumno").val($(this).attr("data-apealumno"));
$("#txtnomalumno").val($(this).attr("data-nomalumno"));
$("#hddidalumno").val($(this).attr("data-idalumno"))
$("#txtproce").val($(this).attr("data-proce"));
var idesp = $(this).attr("data-idesp")
$.ajax({
        type: "GET",
        url: "/Especialidad/listarEspecialidad",
        dataType: "json",
        success: function(resultado){
            $.each(resultado, function(index, value){
                $("#cboesp").append(
                    `<option value="${value.idesp}">${value.nomesp}</option>`
                )
            })
            $("cboesp").val(idesp)
        }
    })
$("#modalNuevo").modal("show");
});

$(document).on("click","#btnguardar",function(){
    $.ajax({
            type : "POST",
            url: "/Alumno/registrarAlumno",
            contentType :"application/json",
            data: JSON.stringify({
            idalumno: $("#txtidalumno").val(),
            apealumno: $("#txtapealumno").val(),
            nomalumno: $("#txtnomalumno").val(),
            idesp: $("#cboesp").val(),
            proce:$("#txtproce").val()
            }),
            success: function(resultado){
                       if(resultado.respuesta){
                           ListarAlumno();
                       }
                       alert(resultado.mensaje);
            }
    });
    $("#modalNuevo").modal("hide")
});


$(document).on("click", ".btneliminar", function(){
    var idalumno = $(this).attr("data-idalumno");
    $.ajax({
        type: "DELETE",
        url: "/Alumno/eliminarAlumno",
        contentType: "application/json",
        data: JSON.stringify({
            idalumno: idalumno
        }),
        success: function(resultado){
            if(resultado.respuesta){
                ListarAlumno();
            }
            alert(resultado.mensaje);
        }
    });
});

function ListarAlumno(){
    $.ajax({
        type: "GET",
        url: "/Alumno/listarAlumnos",
        dataType: "json",
        success: function(resultado){
            $("#tblalumno > tbody").html("");
            $.each(resultado, function(index, value){
                $("#tblalumno > tbody").append("<tr>"+
                    "<td>"+value.idalumno+"</td>"+
                    "<td>"+value.apealumno+"</td>"+
                    "<td>"+value.nomalumno+"</td>"+
                     "<td>"+value.nomesp+"</td>"+
                      "<td>"+value.proce+"</td>"+
                    "<td>"+
                        "<button type='button' class='btn btn-info btnactualizar'"+
                                     "data-idalumno='"+value.idalumno+"'"+
                                     "data-apealumno='"+value.apealumno+"'"+
                                     "data-nomalumno='"+value.nomalumno+"'"+
                                      "data-asientos='"+value.nomalumno+"'"+
                                       "data-nomesp='"+value.nomesp+"'"+
                                     "data-proce='"+value.proce+"'>Actualizar</button>"+
                    "</td>"+
                    "<td>"+
                        "<button type='button' class='btn btn-danger btneliminar'"+
                                     "data-idalumno='"+value.idalumno+"'"+
                                     "data-apealumno='"+value.apealumno+"'>Eliminar</button>"+
                    "</td></tr>");
            })
        }
    })
}