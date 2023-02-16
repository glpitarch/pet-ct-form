# Formularios para un servicio de imágenes PET-CT

## Dependencias utilizadas

Ninguna dependencia fue utilizada. La idea de este proyecto es la creación de dos formularios (en tamaño de hoja A4) utilizados en un servicio de PET-CT (Positron Emission Tomography - Computer Tomography) mediante código HTML, CSS y Javascript en su estado VANILLA.
El resultado es una mejora estética en relación a los antiguos formularios utilizados y un aumento en la celeridad de su creación.

## Brief

--> Aquella persona que inicia el archivo "index.html" comienza en 1 de las 2 páginas disponibles, destinada al apartado técnico y médico, respectivamente.

--> Todos los datos que deberían ser ingresados se encuentran entre bordes rojos.

--> La barra de navegación se encuentra compuesta de la siguiente forma:

     1. Navigation Bar:
      1.1. Planilla Técnicos
        1.1.1 Visualiza el formulario técnico
      1.2. Planilla Médicos
        1.2.1 Visualiza el formulario médico
      1.3. Icono de impresora
        1.3.1 Guarda los valores de los inputs en el local storage
        1.3.2 Elimina los bordes rojos de los inputs
        1.3.3 Calcula el índice de masa corporal
        1.3.4 Calcula la actividad óptima de inyección
        1.3.5 Accede a la ópcion de imprimir mediante "window.print"
      1.4. Guardar datos
        1.4.1 Guarda los valores de los inputs en el local storage
      1.5. Borrar datos
        1.5.1 Elimina los pares key/values del local storage
        
--> Luego del ingreso de datos del paciente y estudio a realizar en el formulario técnico se procede a clickear el icono de la impresora. Este ícono ejecuta todo lo necesario para guardar los datos ingresados (local storage) y volcarlos en la página que no se está visualizando, elimina todos los bordes rojos de los inputs y realiza distintos cálculos (anteriormente, estos calculos debían realizarse manualmente por el personal técnico).

--> Posteriormente, se debe dirigir al formulario médico y completar solamente 2 nuevos inputs que no se visualizan en el formulario técnico. Clickear el ícono de la impresora nuevamente para la impresión del formulario médico y concluir con la totalidad del proceso de creación de ambos formularios de 1 paciente.

--> De ser necesaria la impresión de una única planilla, por ejemplo la planilla médica, y el personal que ingresa los datos los realizó en la planilla técnica por error, puede guardar los datos velozmente mediante la opción "guardar datos" dentro del navbar y luego dirigirse a la planilla médica para finalizar el proceso. De esta forma se evita la ejecución del "window.print", mejorando la velocidad en el guardado de datos.

## Imágenes del antiguo formulario

## Imágenes del nuevo formulario
<p align="center">
    ### Formulario técnico
    <img src="https://user-images.githubusercontent.com/104110115/219230270-dae8fe19-31f8-4a23-806d-9fd60f1e8f17.png">

    ### Formulario médico
    <img> ![medic-form-page-1](https://user-images.githubusercontent.com/104110115/219230326-54d15887-cf33-4413-8dd1-f6d759941bed.png)
    <img> ![medic-form-page-2](https://user-images.githubusercontent.com/104110115/219230328-00234807-6419-413d-b385-ff4c8f8931bd.png)
</p>
