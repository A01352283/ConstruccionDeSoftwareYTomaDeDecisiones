# Llevar el modelo a la 3FN

## Para llevarlo a la 1FN
- De Deportista, apellidos se separa en primer y segundo apellido. Se pone "" para aquellos que no tienen segundo apellido.
- El Lugar de la tabla Prueba, se puede separar en los componentes de la dirección: calle, número y CP. La fecha se puede separar en hora, día, mes año.
- Todas la entidades tienen una llave primaria.
- Se evitan los valores nulos en segudo apellido de Deportista usando un campo vacío "".
- Todas las filas tienen el mismo número de columnas.

## Para llevarlo a la 2FN
- Todos los atributos son dependientes de sus llaves primarias.

## Para llevarlo a la 3FN
- No hay dependencias funcionales entre columnas que no sean la llave primaria.