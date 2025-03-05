document.addEventListener("DOMContentLoaded", function () {
    // Asociar eventos después de que la página cargue completamente
    document.getElementById("sexo").addEventListener("change", mostrarAntigeno);
    document.getElementById("evaluarBtn").addEventListener("click", evaluarExamenes);
});

function mostrarAntigeno() {
    var sexo = document.getElementById("sexo").value;
    var antigenoDiv = document.getElementById("antigenoProstaticoDiv");

    if (sexo === "hombre") {
        antigenoDiv.style.display = "block";
    } else {
        antigenoDiv.style.display = "none";
    }
}

function evaluarExamenes() {
    var resultadoHTML = "<h3>Interpretación de Resultados</h3>";

    var glicemia = parseFloat(document.getElementById("glicemia").value) || 0;
    var colesterolTotal = parseFloat(document.getElementById("colesterolTotal").value) || 0;
    var colesterolHDL = parseFloat(document.getElementById("colesterolHDL").value) || 0;
    var colesterolLDL = parseFloat(document.getElementById("colesterolLDL").value) || 0
    var colesterolVLDL = parseFloat(document.getElementById("colesterolVLDL").value) || 0;
    var trigliceridos = parseFloat(document.getElementById("trigliceridos").value) || 0;
    var antigenoProstatico = parseFloat(document.getElementById("antigenoProstatico")?.value) || 0;
    var tsh = parseFloat(document.getElementById("tsh").value) || 0;
    var t4Libre = parseFloat(document.getElementById("t4Libre").value) || 0;
    var tgo = parseFloat(document.getElementById("tgo").value) || 0;
    var tgp = parseFloat(document.getElementById("tgp").value) || 0;
    var acidoUrico = parseFloat(document.getElementById("acidoUrico").value) || 0;
    var creatinina = parseFloat(document.getElementById("creatinina").value) || 0;
    var hbA1c = parseFloat(document.getElementById("hbA1c").value) || 0;
    var sexo = document.getElementById("sexo").value;

    function boton(url){
        resultadoHTML +=` <button onclick="window.open('${url}', '_blank')">Más info</button> </p>`;
    }
    
    // Evaluaciones
    if (glicemia) {
        resultadoHTML += glicemia <= 110 ? "<p>✅ Glicemia: Normal": glicemia >= 111 && glicemia <= 125 ? "<p>🤨 Glicemia en ayunas comprometida": "<p>⚠️ Glicemia: Fuera de rango";
    boton("https://medlineplus.gov/spanish/ency/article/003482.htm")
    }

    if (colesterolTotal) {
        resultadoHTML += colesterolTotal < 200 ? "<p>✅ Colesterol Total: Normal" : colesterolTotal >= 200 && colesterolTotal <= 239 ? "<p>🤨 Colesterol Total:  Limite Alto" : "<p>⚠️ Colesterol Total: Alto" ;
    boton("https://vsearch.nlm.nih.gov/vivisimo/cgi-bin/query-meta?v%3Aproject=medlineplus-spanish&v%3Asources=medlineplus-spanish-bundle&query=colesterol")
    }

    if (colesterolHDL) {
        resultadoHTML += colesterolHDL < 40 ? "<p>⚠️ Colesterol HDL: Bajo" : colesterolHDL > 60 ? "<p>✅ Colesterol HDL: Bueno" : "<p>🤨 Colesterol HDL: Normal";
    boton("https://magazine.medlineplus.gov/es/art%c3%adculo/colesterol-conozca-los-terminos/")
    }

    if (colesterolLDL) {
        resultadoHTML += colesterolLDL < 100 ? "<p>✅ Colesterol LDL: Óptimo" : colesterolLDL >= 100 && colesterolLDL <= 129 ? "<p>⚠️ Colesterol LDL: Aceptable" : "<p>⚠️ Colesterol LDL: Alto";
    boton("https://medlineplus.gov/spanish/ldlthebadcholesterol.html")
    }
    
    if (colesterolVLDL) {
        resultadoHTML += colesterolVLDL < 100 ? "<p>✅ Colesterol VLDL: Optimo" : "<p>⚠️ Colesterol VLDL: Alto";
    boton("https://medlineplus.gov/spanish/vldlcholesterol.html")
    }

    if (trigliceridos) {
        resultadoHTML += trigliceridos < 150 ? "<p>✅ Triglicéridos: Normal" : "<p>⚠️ Triglicéridos: Alto";
    boton("https://medlineplus.gov/spanish/triglycerides.html")
    }

    if (tsh) {
        resultadoHTML += tsh >= 0.4 && tsh <= 4.0 ? "<p>✅ TSH: Normal" : "<p>⚠️ TSH: Fuera de rango";
    boton("https://medlineplus.gov/spanish/pruebas-de-laboratorio/prueba-de-tsh/")    
    }

    if (t4Libre) {
        resultadoHTML += t4Libre >= 0.8 && t4Libre <= 1.8 ? "<p>✅ T4 Libre: Normal" : "<p>⚠️ T4 Libre: Fuera de rango";
    boton("https://medlineplus.gov/spanish/pruebas-de-laboratorio/prueba-de-tiroxina-t4/")
    }

    if (tgo) {
        resultadoHTML += tgo >= 5 && tgo <= 40 ? "<p>✅ TGO (AST): Normal" : "<p>⚠️ TGO (AST): Fuera de rango";
    boton("https://blog.oncosalud.pe/tgo-y-tgp")
    }

    if (tgp) {
        resultadoHTML += tgp >= 7 && tgp <= 56 ? "<p>✅ TGP (ALT): Normal" : "<p>⚠️ TGP (ALT): Fuera de rango";
    boton("https://blog.oncosalud.pe/tgo-y-tgp")
    }

    if (!isNaN(acidoUrico) && acidoUrico !== 0) {
        if (sexo === "hombre") {
            resultadoHTML += acidoUrico >= 3.4 && acidoUrico <= 7.0 ? "<p>✅ Ácido Úrico: Normal" : "<p>⚠️ Ácido Úrico: Fuera de rango";
        } else if (sexo === "mujer") {
        resultadoHTML += acidoUrico >= 2.4 && acidoUrico <= 6.0 ? "<p>✅ Ácido Úrico: Normal" : "<p>⚠️ Ácido Úrico: Fuera de rango";
        }
    boton("https://medlineplus.gov/spanish/ency/article/003476.htm")
    }

    if (!isNaN(creatinina) && creatinina !== 0) {
        if (sexo === "hombre") {
            resultadoHTML += creatinina >= 0.7 && creatinina <= 1.3 ? "<p>✅ Creatinina: Normal" : "<p>⚠️ Creatinina: Fuera de rango";
        } else if (sexo === "mujer") {
        resultadoHTML += creatinina >= 0.6 && creatinina <= 1.1 ? "<p>✅ Creatinina: Normal" : "<p>⚠️ Creatinina: Fuera de rango";
        }
    boton("https://medlineplus.gov/spanish/ency/article/003475.htm")
    }


    if (hbA1c) {
        resultadoHTML += hbA1c < 5.7 ? "<p>✅ Hemoglobina Glicosilada: Normal" : hbA1c >= 5.7 && hbA1c <= 6.4 ? "<p>⚠️ Hemoglobina Glicosilada: Prediabetes" : "<p>⚠️ Hemoglobina Glicosilada: Diabetes";
    boton("https://medlineplus.gov/spanish/a1c.html")
    }

    if (sexo === "hombre" && antigenoProstatico) {
        resultadoHTML += antigenoProstatico < 4 ? "<p>✅ Antígeno Prostático: Normal" : "<p>⚠️ Antígeno Prostático: Alto, consulte a un médico";
    boton("https://www.cancer.gov/espanol/tipos/prostata/hoja-informativa-psa")
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
