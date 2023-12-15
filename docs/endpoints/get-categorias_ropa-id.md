# Endpoint: GET /categorias/{id}

Permite obtener información detallada sobre una categoria en especifico.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la categoria.

## Ejemplo de Solicitud
```http
GET /categorias/1
```


## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_categoria":1
  "nombre_categoria": "Camisetas",
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:
```json
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró la categoria solicitada."
}
```

- Código 500 Internal Server Error:
```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
}
``` 


## Notas Adicionales

- Asegúrate de incluir un ID válido en la solicitud para obtener la categoria solicitada.
