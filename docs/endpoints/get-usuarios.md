# Endpoint: `GET /usuarios`

Permite obtener información detallada sobre lainfrmacion de los usuarios que estan registrados en la base de datos.



## Ejemplo de Solicitud
```http
GET /usuarios
```

## Respuesta Exitosa (Código 200 OK)
```json
[
{
"id_usuario": 1,
"nombre_usuario": "Usuario1",
"correo": "usuario1@example.com",
"contraseña": "contraseña1"
},
{
"id_usuario": 2,
"nombre_usuario": "Usuario2",
"correo": "usuario2@example.com",
"contraseña": "contraseña2"
},
{
"id_usuario": 3,
"nombre_usuario": "Usuario3",
"correo": "usuario3@example.com",
"contraseña": "contraseña3"
},
{
"id_usuario": 4,
"nombre_usuario": "Usuario189745",
"correo": "usuario1@example158744444444.com",
"contraseña": "contraseña444444444444"
}
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ```

## Notas Adicionales

- Aserciorase de que la base de datos este encendid (phpmyAdmin), y que los valores ingresados (/usuarios) en el get sean los correspondientes.