# Endpoint: `POST /citas`

nos permite hacer una inserción de una nueva cita al sistema.



## Ejemplo de Solicitud
```http
{"fecha_cita": "2023-12-17T16:00:00.000Z","fk_id_usuario": 1}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
        "id_cita": 4,
        "fecha_cita": "2023-12-17T16:00:00.000Z",
        "fk_id_usuario": 1
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