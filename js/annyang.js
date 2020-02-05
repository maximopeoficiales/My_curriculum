if (annyang) {
    var comandos = {
        hola: function () {
            alert("Hola bro");
        },
        Inicio: Inicio,
        Competencias: Competencias,
        Proyectos: Proyectos,
        Intereses: Intereses,
        abrir: github
    };
    annyang.addCommands(comandos);
    annyang.setLanguage("es-MX");
    annyang.start();
}
function Inicio() {
    window.location.href = "index.html#Inicio";
}

function Competencias() {
    window.location.href = "index.html#Competencias";
}
function Proyectos() {
    window.location.href = "index.html#Proyectos";
}

function Intereses() {
    window.location.href = "index.html#Intereses";
}

function github() {
    window.open("https://github.com/maximopeoficiales","","width=400,height=600");
}


