# Endpoint: `GET /inventario`

Permite obtener la informacion alojada en la tabla de inventario.


## Ejemplo de Solicitud
```http
GET /inventario
```

## Respuesta Exitosa (Código 200 OK)
```json
[
{
"id_ropa": 1,
"nombre_ropa": "Camiseta Estampada",
"talla": "M",
"color": "Blanca",
"precio": "19.99",
"fk_id_categoria": 1
},
{
"id_ropa": 2,
"nombre_ropa": "Pantalón Vaquero",
"talla": "L",
"color": "Azul",
"precio": "39.99",
"fk_id_categoria": 2
},
{
"id_ropa": 3,
"nombre_ropa": "Vestido Floral",
"talla": "S",
"color": "Rosa",
"precio": "59.99",
"fk_id_categoria": 3
},
{
"id_ropa": 4,
"nombre_ropa": "Chaqueta de Cuero",
"talla": "XL",
"color": "Negra",
"precio": "79.99",
"fk_id_categoria": 4
},
{
"id_ropa": 5,
"nombre_ropa": "Camiseta Estampada",
"talla": "M",
"color": "NEGRAAAAAAAAAAAAAAAAAAAAAAaaa",
"precio": "19.99",
"fk_id_categoria": 1
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

-  Aserciorase de que la base de datos este encendid (phpmyAdmin), y que los valores ingresados (/inventario) en el get sean los correspondientes.