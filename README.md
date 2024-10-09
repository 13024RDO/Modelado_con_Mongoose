# Gestión de Ventas - Suministros de Limpieza

## Contexto

Este proyecto está diseñado para un comercio de suministros de limpieza, donde los empleados pueden registrar sus ventas de manera individual y acceder al sistema con credenciales.

## Modelos Principales

1. **User**: Autenticación y gestión de usuarios.
2. **Employer**: Representa a los empleados.
3. **Products**: Detalles de los productos disponibles.
4. **Sales**: Registro de las ventas realizadas.

### Modelo: User

```javascript
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
```

### Modelo: Employer

```javascript
const employerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  DNI: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
```

### Modelo: Products

```javascript
const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
});
```

### Modelo: Sales

```javascript
const saleSchema = new mongoose.Schema({
  employer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employer",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  amount: { type: Number, required: true, min: 0 },
  quantity: { type: Number, required: true, min: 1 },
});
```

## Relaciones entre Modelos

- **Employer** se asocia con **User** para la autenticación.
- **Sales** se conecta con **Employer** y **Products** para registrar las transacciones.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias con:
   ```bash
   npm install
   ```
3. Configura la conexión a MongoDB.
4. Ejecuta el proyecto con:
   ```bash
   npm start
   ```

## Notas

Este README ofrece una vista general rápida del proyecto, resaltando los aspectos clave de cada modelo y sus relaciones de una manera clara y organizada.
