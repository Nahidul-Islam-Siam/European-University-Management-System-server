import { z } from 'zod';

const UserNameValidationSchema = z.object({
  firstName: z.string().max(20),
  middleName: z.string().max(20).optional(),
  lastName: z.string().max(20),
});

const GuardianValidationSchema = z.object({
  fatherName: z.string().max(50),
  fatherOccupation: z.string().max(50),
  fatherContactNo: z.string().max(15),
  motherName: z.string().max(50),
  motherOccupation: z.string().max(50),
  motherContactNo: z.string().max(15),
});

const LocalGuardianValidationSchema = z.object({
  name: z.string().max(50),
  occupation: z.string().max(50),
  contactNo: z.string().max(15),
  address: z.string().max(255),
});

const StudentValidationSchema = z.object({
  id: z.string().max(20),
  password: z.string().max(20),
  name: UserNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNumber: z.string().max(15),
  emergencyContactNo: z.string().max(15),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().max(255),
  permanentAddress: z.string().max(255),
  gurdian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']),
});

export default StudentValidationSchema;
