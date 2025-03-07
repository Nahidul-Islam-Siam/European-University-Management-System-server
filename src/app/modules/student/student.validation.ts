import Joi from 'joi';
const userNameValidationSchema = Joi.object({
  firstName: Joi.string().max(20).trim().required(),
  middleName: Joi.string().max(20).trim().optional(),
  lastName: Joi.string()
    .max(20)
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().max(50).trim().required(),
  fatherOccupation: Joi.string().max(50).trim().required(),
  fatherContactNo: Joi.string().max(15).trim().required(),
  motherName: Joi.string().max(50).trim().required(),
  motherOccupation: Joi.string().max(50).trim().required(),
  motherContactNo: Joi.string().max(15).trim().required(),
});

const localguardianValidationSchema = Joi.object({
  name: Joi.string().max(50).trim().required(),
  occupation: Joi.string().max(50).trim().required(),
  contactNo: Joi.string().max(15).trim().required(),
  address: Joi.string().max(255).trim().required(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().max(20).trim().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.date().required(),
  email: Joi.string().email().trim().lowercase().required(),
  contactNumber: Joi.string().max(15).trim().required(),
  emergencyContactNo: Joi.string().max(15).trim().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional(),
  presentAddress: Joi.string().max(255).trim().required(),
  permanentAddress: Joi.string().max(255).trim().required(),
  gurdian: guardianValidationSchema.optional(),
  localGuardian: localguardianValidationSchema.required(),
  profileImg: Joi.string().uri().optional(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
