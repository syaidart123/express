import * as fs from "fs";
import { v4 as uuidv4 } from "uuid";

const fileName = "appoinment.json";
//Appointment will store new appointment in appoinment.js

// Separation of concerns
class AppointmentService {
  constructor() {}
  addAppointment = (addAppointmentRequest) => {
    let data = readAppoinment();
    try {
    } catch {}
    const { error, value } = appoinmentSchema.validate(addAppointmentRequest, {
      abortEarly: true,
    });
    if (error) throw error;
    const { name, date, doctorName, hour, service } = addAppointmentRequest;
    data.push({
      id: uuidv4(),
      name,
      date,
      doctorName,
      hour,
      service,
    });
    fs.writeFileSync("appoinment.json", JSON.stringify(data));
  };

  getAppoinment = () => {
    return readAppoinment();
  };
  deleteAppoinmentById = (deleteId) => {
    let data = readAppoinment();
    const Filtdata = data.filter((appoinment) => appoinment.id != deleteId);
    fs.writeFileSync("appoinment.json", JSON.stringify(Filtdata));
  };
  updateAppoinmentById = (updateId, updateAppointment) => {
    let data = readAppoinment();
    const { name, date, hour, service, doctorName } = updateAppointment;
    data = data.map((appoinment) => {
      if (appoinment.id == updateId) {
        appoinment.name = name;
        appoinment.date = date;
        appoinment.hour = hour;
        appoinment.service = service;
        appoinment.doctorName = doctorName;
      }
      return appoinment;
    });
    fs.writeFileSync("appoinment.json", JSON.stringify(data));
  };
}

const readAppoinment = () => {
  try {
    let appoinment = fs.readFileSync(fileName);
    if (appoinment.byteLength == 0) appoinment = "[]";
    return JSON.parse(appoinment);
  } catch (error) {
    console.log(error);
  }
};
//read appoinment.js
export default AppointmentService;
