# API RESTful con Node.js

Proyecto Innovador-Especialidad.

## Tabla de contenido

- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Tener instalado y configurado Docker antes de comenzar.
Tener el servicio de XAMP instalado ya que se necesitara para ejecutar la base de datos.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/Cesarhugocasta/FashionGuru.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd node-restful
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado Docker para poder ejecutar el comando pasado,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

