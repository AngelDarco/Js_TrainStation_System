# Train Station Passenger Counting System

#### Necesitamos controlar el número de pasajeros que llegan al final de un trayecto teniendo en cuenta cuántos suben y bajan en cada parada.
#### Le facilitaremos una lista del tipo: [s1,b1][s2,b2][s3,b3]… donde en cada par de elementos va el número de pasajeros que se suben (s) y el número de pasajeros que se bajan (b). Así, procesando esa lista, sabremos el número de pasajeros finales que debería llegar a fin de trayecto.
#### Ejemplo de entrada: [[7,0][8,2][9,5][3,1]]
#### Ejemplo de salida: 19 pasajeros

##### * Nota: En el primer par de números, el segundo siempre será 0 porque en la estación de origen no se baja nadie. No hace falta controlar ese número: se lo facilitaremos siempre de manera correcta.