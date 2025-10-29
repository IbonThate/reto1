document.addEventListener('DOMContentLoaded', function() {
    
    // =======================================================
    // LÓGICA 1: Tipo de Documento (Permanece visible si hay selección)
    // =======================================================
    const selectDocumento = document.getElementById('tipoDocumento');
    const divOtroDocumento = document.getElementById('otroDocumentoCampo');
    const inputOtroDocumento = document.getElementById('otroDocumentoTexto');

    if (selectDocumento && divOtroDocumento) {
        function handleDocumentoChange() {
            const selectedValue = selectDocumento.value;

            // Condición: Si el valor NO es la opción vacía, mostrar el campo "Otro"
            if (selectedValue !== "") {
                // El campo para especificar siempre aparece, sin importar si es DNI o 'Otro'
                divOtroDocumento.style.display = 'block';

                // Solo hacemos el input requerido si el valor es 'Otro'
                if (selectedValue === 'Otro') {
                    if (inputOtroDocumento) inputOtroDocumento.required = true;
                } else {
                    if (inputOtroDocumento) inputOtroDocumento.required = false;
                }
            } else {
                // Si vuelve a "Selecciona una opción", se oculta
                divOtroDocumento.style.display = 'none';
                if (inputOtroDocumento) {
                    inputOtroDocumento.required = false;
                    inputOtroDocumento.value = ''; // Limpiar
                }
            }
        }
        
        selectDocumento.addEventListener('change', handleDocumentoChange);
        handleDocumentoChange(); // Ejecutar al cargar
    }

    // =======================================================
    // LÓGICA 2: País (Solo visible cuando la opción es 'Otro')
    // =======================================================
    const selectPais = document.getElementById('pais');
    const divOtroPais = document.getElementById('otroPaisCampo');
    const inputOtroPais = document.getElementById('otroPaisTexto');

    if (selectPais && divOtroPais) {
        function handlePaisChange() {
            // Condición: Solo mostrar el campo si el valor es EXACTAMENTE "Otro"
            if (selectPais.value === 'Otro') {
                divOtroPais.style.display = 'block';
                if (inputOtroPais) inputOtroPais.required = true;
            } else {
                divOtroPais.style.display = 'none';
                if (inputOtroPais) {
                    inputOtroPais.required = false;
                    inputOtroPais.value = ''; // Limpiar
                }
            }
        }

        selectPais.addEventListener('change', handlePaisChange);
        handlePaisChange(); // Ejecutar al cargar
    }
});