# Endpoint: `POST /usuarios`

Nos permite hacer una inserción de un nuevo usuario.

## Ejemplo de Solicitud
```http
   {       "nombre_usuario": "Usuario189745",
        "correo": "usuario1@example158744444444.com",
        "contraseña": "contraseña444444444444"}
```

## Respuesta Exitosa (Código 200 OK)
```json
   {
        "id_usuario": 4,
        "nombre_usuario": "Usuario189745",
        "correo": "usuario1@example158744444444.com",
        "contraseña": "contraseña444444444444"
    }
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se insertaron los datos."
  }
  ```

-

## Notas Adicionales

- Si no se presenta el mensaje de exito se recomienda hacer uso de un metodo get y comprobar si se inserto o no la información.