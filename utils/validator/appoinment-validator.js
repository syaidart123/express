import Joi from "joi";

const appointmentSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.date().required(),
  hour: Joi.string().regex("^[0-9]{2}:[0-9]{2}$").required(),
  doctorName: Joi.string().required(),
  service: Joi.string().required(),
});
