/* jshint esversion: 8 */

//multer host de imagenes
let host


//PUERTO
process.env.PORT = process.env.PORT || 3001;

//entorno
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//conexion a la db
let urlDB;

if (process.env.NODE_ENV === "dev") {
    urlDB= "mongodb+srv://ivan1:csOX3MZpZvdJj94J@cluster0.plo5k.mongodb.net/Control?retryWrites=true&w=majority"
  // urlDB = "mongodb://localhost:27017/Control";

} 

 
process.env.URLDB = urlDB;

process.env.APP_HOST = host
