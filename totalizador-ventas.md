# Totalizador de Ventas

> ## Paso 1

### Planificacion de funcionalidades para desarrollo incremental

* Ingreso de Los datos Requeridos y mostrarlos con el total
  * Cantidad de items
  * Ingreso del precio unitario
  * El codigo de estado ( 2 Letras)
    * Mostrar la tasa impuesto(%)
      * $CA \longrightarrow 8.25\%$
      * $UT \longrightarrow 6.65\%$
      * $NV \longrightarrow 8.00\%$
      * $TX \longrightarrow 6.25\%$
      * $AL \longrightarrow 4.00\%$
* Calcular y mostrar el precio neto con la tasa de desceunto
* Calcular y mostrar el descuento del precio neto y el total aplicado
  * $>= 1000 \rightarrow 3\%$
  * $>= 3000 \rightarrow 5\%$
  * $>= 7000 \rightarrow 7\%$
  * $>= 10000 \rightarrow 10\%$
  * $>= 30000 \rightarrow 15\%$
* Calcular y mostrar el impuesto del precio neto descontado si es posible por el estado.

> ## Paso 2

### Plan de Pruebas

* Deberia mostrar la cantidad de items ingresados
  * $5 \longrightarrow 5$
  * $f(x) \Longrightarrow x$
* Deberia mostrar el precio unitario del item
  * $20 \longrightarrow 20$
  * $f(x) \Longrightarrow x$
* Deberia mostrar el precio neto de todos los productos
  * $(5,20) \Longrightarrow 100$
  * $f(x,y) \Longrightarrow xy$
* Deberia mostrar la tasa de impuesto por el estado
  * $CA \longrightarrow 8.25$
  * $UT \longrightarrow 6.65$
  * $NV \longrightarrow 8.00$
  * $TX \longrightarrow 6.25$
  * $AL \longrightarrow 4.00$
* Deberia mostrar el total aplicado el impuesto
  * $f(x,y,CA) \Longrightarrow 8.25(xy)$
  * $f(x,y,UT) \Longrightarrow 6.65(xy)$
  * $f(x,y,NV) \Longrightarrow 8.00(xy)$
  * $f(x,y,TX) \Longrightarrow 6.25(xy)$
  * $f(x,y,AL) \Longrightarrow 4.00(xy)$
* Deberia calcular y mostrar el descuento del precio neto
  * $f(0>= x >100) \Longrightarrow  0\%$
    * $500 \longrightarrow  500-0$
  * $f(x>=1000) \Longrightarrow  3\%(x)$
    * $(1000 \longrightarrow 1000 -(3\%*1000))$
  * $f(x>=3000) \Longrightarrow  5\%(x)$
    * $(3000 \longrightarrow 3000 -(5\%*3000))$
  * $f(x>=7000) \Longrightarrow  7\%(x)$
    * $(7000 \longrightarrow 7000 -(7\%*7000))$
  * $f(x>=10000) \Longrightarrow  10\%(x)$
    * $(10000 \longrightarrow 10000 -(10\%*10000))$
  * $f(x>=30000) \Longrightarrow  15\%(x)$
    * $(30000 \longrightarrow 30000 -(15\%*30000))$