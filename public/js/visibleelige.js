var respuestaPROCE="";
var select;
var model;
var tipo;
const btnRadio=document.querySelectorAll(".btn-radio1");
btnRadio.forEach(btn=>{
btn.addEventListener("change", ()=>{
if (btn.checked){
    respuestaPROCE=btn.value;
console.log(respuestaPROCE);
if (respuestaPROCE == "AMD"){
    document.getElementById("listaprocesadoresAMD").classList.remove("oculto");
    document.getElementById("listaprocesadoresINTEL").classList.add("oculto");
    select=document.getElementById("listaprocesadoresAMD");
    select.addEventListener("change", ()=>{
        select=document.getElementById("listaprocesadoresAMD");
        model=select.options[select.selectedIndex].value;
    });
}
else{
    document.getElementById("listaprocesadoresINTEL").classList.remove("oculto");
    document.getElementById("listaprocesadoresAMD").classList.add("oculto");
    select=document.getElementById("listaprocesadoresINTEL");
    select.addEventListener("change", ()=>{
        select=document.getElementById("listaprocesadoresINTEL");
        model=select.options[select.selectedIndex].value;
    });
}
}
})});
function decide(){
    validacion : {
const rpradio=document.querySelectorAll(".radio1");
rpradio.forEach(rp=>{
    if (rp.checked){
        tipo=rp.value;
    }
});
var process=respuestaPROCE;
var presup=document.getElementById("respuestapresup").value;
var watts=document.getElementById("respuestawatts").value;

if(tipo == null || process == "" || presup == "" || watts == ""){
    alert("Faltan datos");
    console.log(tipo);
    console.log(process);
    console.log(model)
    console.log(presup);
    console.log(watts);
    break validacion;
}
console.log("ahora a elegir")
console.log(tipo);
console.log(process);
console.log(model)
console.log(presup);
console.log(watts);
if(presup < 2000 || watts < 400){
    alert("El presupuesto o los watts de su fuente de poder son muy bajos");
    break validacion;
}
    if(tipo==1){
        if(process=="Intel"){
            if(model=="i2" || model=="i3" || model=="i4" || model =="i5"){
                if(presup >= 2000 && presup < 5000){
                    if(watts >= 400){
                        document.getElementById("imag").innerHTML='<img src="../img/1030.jpg" id="imagenrecomendacion">te recomendamos la GT 1030';
                        
                    }
                }
            }
        }
        if(process=="AMD"){
            if(model=="a2" || model=="a3" || model=="a4" || model=="a5"){
                if(presup >= 2000 && presup < 5000){
                    if(watts >= 400){
                        document.getElementById("imag").innerHTML='<img src="../img/1030.jpg" id="imagenrecomendacion">te recomendamos la GT 1030';
                    }
                }
            }
        }
        if(process=="Intel"){
            if(model=="i2" || model=="i3" || model=="i4" || model =="i5"){
                if(presup >= 5000 && presup < 6000){
                    if(watts >= 400){
                        document.getElementById("imag").innerHTML='<img src="../img/540.jpg" id="imagenrecomendacion">te recomendamos la RADEON 540';
                        
                    }
                }
            }
        }
        if(process=="AMD"){
            if(model=="a2" || model=="a3" || model=="a4" || model=="a5"){
                if(presup >= 5000 && presup < 6000){
                    if(watts >= 400){
                        document.getElementById("imag").innerHTML='<img src="../img/540.jpg" id="imagenrecomendacion">te recomendamos la RADEON 540';
                    }
                }
            }
        }
        if(process=="Intel"){
            if(model=="i2" || model=="i3" || model=="i4" || model =="i5"){
                if(presup >= 6000){
                    if(watts >= 400){
                        document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                        
                    }
                }
            }
        }
        if(process=="AMD"){
            if(model=="a2" || model=="a3" || model=="a4" || model=="a5"){
                if(presup >= 6000){
                    if(watts >= 400){
                        document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                    }
                }
            }
        }
    }else if(tipo==2){
        if(presup<6000 || watts<400){
            alert("el presupuesto establecido o la potencia en watts de su fuente de poder no es suficiente para una tarjeta grafica de videojuegos")
            break validacion;
        }
        if(process=="Intel"){
            if(model=="i2" || model=="i3" || model=="i4" || model =="i5"){
                if(presup > 6000 && presup < 10000){
                    if(watts >= 400){
                        document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                        
                    }
                } else if(model=="i2"){
                    document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                }
            }
        }
        if(process=="AMD"){
            if(model=="a2" || model=="a3" || model=="a4" || model=="a5"){
                if(presup > 6000 && presup < 10000){
                    if(watts >= 400){
                        document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                    }
                } else if(model == "a2"){
                    document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                }
            }
        }
        if(process=="Intel"){
            if(model=="i3" || model=="i4" || model=="i5"){
                if(presup > 10000 && presup < 30000){
                    if(watts >= 500){
                        document.getElementById("imag").innerHTML='<img src="../img/2060.jpg" id="imagenrecomendacion">te recomendamos la RTX 2060';
                        
                    } else document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                }
            }
        }
        if(process=="AMD"){
            if(model=="a3" || model=="a4" || model=="a5"){
                if(presup > 10000 && presup < 30000){
                    if(watts >= 500){
                        document.getElementById("imag").innerHTML='<img src="../img/2060.jpg" id="imagenrecomendacion">te recomendamos la RTX 2060';
                    } else document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                }
            }
        }
        if(process=="Intel"){
            if(model=="i3" || model=="i4" || model=="i5"){
                if(presup > 30000){
                    if(watts >= 600){
                        document.getElementById("imag").innerHTML='<img src="../img/3070.jpg" id="imagenrecomendacion">te recomendamos la RTX 3070';
                        
                    }else if(watts >=500){
                        document.getElementById("imag").innerHTML='<img src="../img/2060.jpg" id="imagenrecomendacion">te recomendamos la RTX 2060';
                    } else document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                }
            }
        }
        if(process=="AMD"){
            if(model=="a3" || model=="a4" || model=="a5"){
                if(presup > 30000){
                    if(watts >= 600){
                        document.getElementById("imag").innerHTML='<img src="../img/3070.jpg" id="imagenrecomendacion">te recomendamos la RTX 3070';
                    } else if(watts >=500){
                        document.getElementById("imag").innerHTML='<img src="../img/2060.jpg" id="imagenrecomendacion">te recomendamos la RTX 2060';
                    } else document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                }
            }
        }
        if(process=="Intel"){
            if(model=="i4" || model=="i5"){
                if(presup > 450000){
                    if(watts >= 700){
                        document.getElementById("imag").innerHTML='<img src="../img/3080TI.jpg" id="imagenrecomendacion">te recomendamos la RTX 3080 TI';
                        
                    }else if(watts >=600 && watts < 700){
                        document.getElementById("imag").innerHTML='<img src="../img/3070.jpg" id="imagenrecomendacion">te recomendamos la RTX 3070';
                    } else if(watts >=500 && watts < 600){ 
                        document.getElementById("imag").innerHTML='<img src="../img/2060.jpg" id="imagenrecomendacion">te recomendamos la RTX 2060';
                    } else document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                }
            }
        }
        if(process=="AMD"){
            if(model=="a4" || model=="a5"){
                if(presup > 450000){
                    if(watts >= 700){
                        document.getElementById("imag").innerHTML='<img src="../img/3080TI.jpg" id="imagenrecomendacion">te recomendamos la RTX 3080 TI';
                        
                    }else if(watts >=600 && watts < 700){
                        document.getElementById("imag").innerHTML='<img src="../img/3070.jpg" id="imagenrecomendacion">te recomendamos la RTX 3070';
                    } else if(watts >=500 && watts < 600){ 
                        document.getElementById("imag").innerHTML='<img src="../img/2060.jpg" id="imagenrecomendacion">te recomendamos la RTX 2060';
                    } else document.getElementById("imag").innerHTML='<img src="../img/1050.jpg" id="imagenrecomendacion">te recomendamos la GTX 1050';
                }
            }
        }
    }else if(tipo==3){
        if(presup<5000 || watts<500){
            alert("el presupuesto establecido o la potencia de su fuente de poder no es suficiente para una tarjeta grafica para renderizado y/o modelado 3D")
            break validacion;
        }
        if(process=="Intel"){
            if(model=="i2" || model=="i3" || model=="i4"){
                if(presup > 5000 && presup < 30000){
                    if(watts >= 500){
                        document.getElementById("imag").innerHTML='<img src="../img/QT600.jpg" id="imagenrecomendacion">te recomendamos la QUADRO T600';
                        
                    }
                } else if(model=="i2"){
                    document.getElementById("imag").innerHTML='<img src="../img/QT600.jpg" id="imagenrecomendacion">te recomendamos la QUADRO T600';
                }
            }
        }
        if(process=="AMD"){
            if(model=="a2" || model=="a3" || model=="a4" || model=="a5"){
                if(presup > 5000 && presup < 30000){
                    if(watts >= 500){
                        document.getElementById("imag").innerHTML='<img src="../img/QT600.jpg" id="imagenrecomendacion">te recomendamos la QUADRO T600';
                    }
                } else if(model == "a2"){
                    document.getElementById("imag").innerHTML='<img src="../img/QT600.jpg" id="imagenrecomendacion">te recomendamos la QUADRO T600';
                }
            }
        }
        if(process=="Intel"){
            if(model=="i3" || model=="i4"){
                if(presup > 30000 && presup < 150000){
                    if(watts >= 600){
                        document.getElementById("imag").innerHTML='<img src="../img/QRTX4000.jpg" id="imagenrecomendacion">te recomendamos la QUADRO RTX 4000';
                        
                    }else if(watts >= 500 && watts <= 600){
                        document.getElementById("imag").innerHTML='<img src="../img/QT600.jpg" id="imagenrecomendacion">te recomendamos la QUADRO T600';
                    }
                }
            }
        }
        if(process=="AMD"){
            if(model=="a3" || model=="a4" || model=="a5"){
                if(presup > 30000 && presup < 150000){
                    if(watts >= 600){
                        document.getElementById("imag").innerHTML='<img src="../img/QRTX4000.jpg" id="imagenrecomendacion">te recomendamos la QUADRO RTX 4000';
                    }else if(watts >= 500 && watts <= 600){
                        document.getElementById("imag").innerHTML='<img src="../img/QT600.jpg" id="imagenrecomendacion">te recomendamos la QUADRO T600';
                    }
                }
            }
        }
        if(process=="Intel"){
            if(model=="i3" || model=="i4"){
                if(presup > 150000){
                    if(watts >= 700){
                        document.getElementById("imag").innerHTML='<img src="../img/QRTXA6000.jpg" id="imagenrecomendacion">te recomendamos la QUADRO RTX A6000';
                        
                    }else if(watts >= 600 && watts < 700){ 
                        document.getElementById("imag").innerHTML='<img src="../img/QRTX4000.jpg" id="imagenrecomendacion">te recomendamos la QUADRO RTX 4000';
                    } else document.getElementById("imag").innerHTML='<img src="../img/QT600.jpg" id="imagenrecomendacion">te recomendamos la QUADRO T600';
                }
            }
        }
        if(process=="AMD"){
            if(model=="a3" || model=="a4" || model=="a5"){
                if(presup > 150000){
                    if(watts >= 700){
                        document.getElementById("imag").innerHTML='<img src="../img/QRTXA6000.jpg" id="imagenrecomendacion">te recomendamos la QUADRO RTX A6000';
                    } else if(watts >= 600 && watts < 700){ 
                        document.getElementById("imag").innerHTML='<img src="../img/QRTX4000.jpg" id="imagenrecomendacion">te recomendamos la QUADRO RTX 4000';
                    } else document.getElementById("imag").innerHTML='<img src="../img/QT600.jpg" id="imagenrecomendacion">te recomendamos la QUADRO T600';
                }
            }
        }
    }
document.getElementById("recomendacion").classList.remove("oculto");
}
}
