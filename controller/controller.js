class AppointmentController {
  constructor(appointmentService) {
    this.svc = appointmentService;
  }

  addAppointment = (req, res, next) => {
    const { name, date, doctorName, hour, service } = req.body;
    this.svc.addAppointment(name, date, doctorName, hour, service);
    res.send({
      status: "success",
    });
  };

  getAppointment = (req, res, next) => {
    const data = this.svc.getAppointment();
    res.send({
      data: data,
    });
  };
  updateAppointment = (req, res, next) => {
    const { id } = req.params;
    const { name, date } = req.body;
    this.svc.updateAppoinmentById(id, name, date);
    res.send(this.svc.getAppoinment());
    res.send("sukses");
  };
  deleteAppointment = (req, res, next) => {
    const { id } = req.params;
    this.svc.deleteAppoinmentById(id);
    res.send(this.svc.getAppoinment());
    res.send("sukses");
  };
}

export default AppointmentController;
