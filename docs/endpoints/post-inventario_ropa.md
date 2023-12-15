# Endpoint: `POST /inventario`

Nos permite hacer una inserción de una nueva categoría.

## Ejemplo de Solicitud
```http
   {  
        "nombre_ropa": "Camiseta Estampada",
        "talla": "M",
        "color": "NEGRAAAAAAAAAAAAAAAAAAAAAAaaa",
        "precio": "19.99",
        "fk_id_categoria": 1
    }
```

## Respuesta Exitosa (Código 200 OK)
```json
   {
        "id_ropa": 5,
        "nombre_ropa": "Camiseta Estampada",
        "talla": "M",
        "color": "NEGRAAAAAAAAAAAAAAAAAAAAAAaaa",
        "precio": "19.99",
        "fk_id_categoria": 1
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