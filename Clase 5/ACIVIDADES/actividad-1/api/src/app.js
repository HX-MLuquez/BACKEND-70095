const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const logger = require("morgan");
const fs = require("fs").promises;

const multer = require("multer");

//* MIDDELWARE - EL ORDEN ES ESCENCIAL - aquí con el USE son MIDDELWARE GENERALES para todas nuestras RUTAS
const upload = multer({ dest: "uploads/" });

/*
*MULTER CONFIG standart
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/public/img/');
    },
    * ACA usamos este filename para renombrar el path 82376786981243 -> simple.jpg
    filename: (req, file, cb) => {
        cb(null, originalName);
    }
});
const upload = multer({ storage: storage });
*/

app.use(express.json()); // DATA x BODY  {} -> {...}
app.use(express.urlencoded({ extended: false })); // DATA FORM {} {...}

app.use(logger("dev"));
app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});
// app.use("/", express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "public")));

function miMiddelware(req, res, next) {
  console.log("es un middel de acción");
  req.pepeMessage = "Hola soy Pepe";
  next();
}

// app.use(miMiddelware)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("ERROR");
});

//*CORS

app.get("/soyunico/sisi", miMiddelware, (req, res) => {
  res.json({ HULK: "NO APLASTA" });
});

// Función para renombrar y validar archivo
const renameAndValidateFile = async (req, file) => {
  const id = req.params.id; // 3
  const originalName = file.originalname; // 'jhon.jpeg'
  const newPath = `${id}-${originalName}`; // '3-jhon.jpeg'
  const fullPath = path.join("uploads", newPath); // C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\70095 SABADOS VSC A\Clase 5\ACIVIDADES\actividad-1\api\src\app.js

  try {
    if (
      await fs
        .access(fullPath)
        .then(() => true)
        .catch(() => false)
    ) {
      // Verificar si el archivo ya existe
      await fs.access(fullPath);
      // El archivo ya existe, eliminar el archivo temporal
      await fs.unlink(file.path);
      throw new Error("El archivo ya existe");
    }

    await fs.rename(file.path, fullPath);
    return newPath;
  } catch (err) {
    throw err;
  }
};

app.post("/upload/single/:id", upload.single("image"), async (req, res) => {
  console.log(req.file);
  /*
{
  fieldname: 'image',
  originalname: 'jhon.jpeg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'uploads/',
  filename: 'f4276880e670ee0015562bee0252f65d', -> 3-jhon.jpeg
  path: 'uploads\\f4276880e670ee0015562bee0252f65d',
  size: 6076
}
*/
  console.log(req.params);
  try {
    const newPath = await renameAndValidateFile(req, req.file);
    res.send(`imagen del Usuario guardada ${newPath}`);
  } catch (error) {
    res.send(`imagen ERROR ${error}`);
  }
});

app.post("/upload/multiple/:id", upload.array("images", 15), async (req, res) => {
  console.log(req.files);
  /*
[{}{}{}]
*/
  res.send(`imagenes del Usuario guardada`);
});

app.get("/", (req, res) => {
  res.json({ HULK: "APLASTA" });
});

app.use("/api", routes);

module.exports = app;

/*
!IMPORTANTE

*MULTER PARA DB
const multer = require("multer");
const storage = multer.memoryStorage();
 
const upload = multer({
  // storage: storage,
  limits: {
    fieldSize: 4000000, //* son 4 mb
  },
  fileFilter: (_req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" 
      // || file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error(
          "Formato de archivo inválido. Sólo se permiten: .png, .jpg, .jpeg "
        )
      );
    }
  },
});

module.exports = { upload };

app.post("/upload/single/:id", upload.single("image"), async (req, res) => {
  console.log(req.file.buffer);


*/


/*
En este archivo deberá haber un formulario donde podremos ingresar una mascota a 
partir del método POST. Dicho POST conectará al endpoint raíz del router pets
✓ Configurar el router pets para que pueda recibir el json por parte del formulario 
(recordar express.json() y express.urlencoded({extended:true}))
✓ Verificar con POSTMAN que la información llegue al servidor y se guarde 
correctamente.

Tipo Form
{
    id: 12,
    nombre: "mau"
}

->
{ }

{ extended: false }
 ->
 {...}


 tipo form
 {
    id: 12,
    nombre: "mau"
    code: {
    data:
    }
}
{ extended: true }
*/



