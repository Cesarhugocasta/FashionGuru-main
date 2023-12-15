# Endpoint: `GET /citas

Permite obtener la información alojada en la tabla de citas que se encuentra en la base de datos.



## Ejemplo de Solicitud
```http
GET /citas
```

## Respuesta Exitosa (Código 200 OK)
```json
[
{
"id_cita": 1,
"fecha_cita": "2023-12-15T16:00:00.000Z",
"fk_id_usuario": 1
},
{
"id_cita": 2,
"fecha_cita": "2023-12-16T20:30:00.000Z",
"fk_id_usuario": 2
},
{
"id_cita": 3,
"fecha_cita": "2023-12-17T17:45:00.000Z",
"fk_id_usuario": 3
},
{
"id_cita": 5,
"fecha_cita": "2023-12-17T22:00:00.000Z",
"fk_id_usuario": 1
},
{
"id_cita": 6,
"fecha_cita": "2023-12-17T22:00:00.000Z",
"fk_id_usuario": 1
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

- - Aserciorase de que la base de datos este encendid (phpmyAdmin), y que los valores ingresados (/citas) en el get sean los correspondientes.