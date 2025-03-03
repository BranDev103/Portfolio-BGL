document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", function () {
        
        const pdfUrl = "/assets/Curriculum_BGL.pdf";
        
        // Crear un enlace temporal
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "cv_BGL.pdf"; 
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

/******************************************************************** */

var Typed = new Typed(".input", {
    strings:["Brandon !", "Dev. Web", "UI Designer"],
    typeSpeed: 100, //Velocidad de Escritura
    backSpeed:60, //Velocidad de retroceso de escritura
    loop: true
});




