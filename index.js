import express from "express";
const app = express();
const port = 3000;
import AppointmentService from "./service/service.js";
import bodyParser from "body-parser";
import AppointmentController from "./controller/controller.js";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
const routes = express.Router();

const svc = new AppointmentService();
const controller = new AppointmentController();

routes(app, controller);

// app.get("/", (req, res, next) => {
//   res.send(svc.getAppoinment());
// });

// app.get("/appointment", (req, res, next) => {
//   res.send(svc.getAppoinment());
// });
// app.post("/appointment/create", (req, res, next) => {
//   const { name, date } = req.body;
//   svc.addAppointment(name, date);
//   res.send(svc.getAppoinment(name, date));
//   res.send("sukses");
// });

// app.patch("/appointment/update/:id", (req, res, next) => {
//   const { id } = req.params;
//   const { name, date } = req.body;
//   svc.updateAppoinmentById(id, name, date);
//   res.send(svc.getAppoinment());
//   res.send("sukses");
// });

// app.delete("/appointment/delete/:id", (req, res, next) => {
//   const { id } = req.params;
//   svc.deleteAppoinmentById(id);
//   res.send(svc.getAppoinment());
//   res.send("sukses");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
