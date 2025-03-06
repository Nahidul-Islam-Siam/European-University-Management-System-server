import { Schema, model } from 'mongoose';
import {
  Gurdian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20, 'First Name should not be more than 20 characters'],
    message: 'First Name is required',
  },
  middleName: {
    type: String,
    trim: true,
    maxlength: [20, 'Middle Name should not be more than 20 characters'],
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20, 'Last Name should not be more than 20 characters'],
    message: 'Last Name is required',
  },
});

const guardianSchema = new Schema<Gurdian>({
  fatherName: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, 'Father Name should not be more than 50 characters'],
    message: 'Father name cannot be empty',
  },
  fatherOccupation: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, 'Father Occupation should not be more than 50 characters'],
    message: 'Father occupation cannot be empty',
  },
  fatherContactNo: {
    type: String,
    required: true,
    trim: true,
    maxlength: [15, 'Father Contact Number should not be more than 15 digits'],
    validate: {
      validator: (v: string) => /^[0-9]{10,15}$/.test(v),
      message: 'Invalid phone number format',
    },
  },
  motherName: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, 'Mother Name should not be more than 50 characters'],
    message: 'Mother name cannot be empty',
  },
  motherOccupation: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, 'Mother Occupation should not be more than 50 characters'],
    message: 'Mother occupation cannot be empty',
  },
  motherContactNo: {
    type: String,
    required: true,
    trim: true,
    maxlength: [15, 'Mother Contact Number should not be more than 15 digits'],
    validate: {
      validator: (v: string) => /^[0-9]{10,15}$/.test(v),
      message: 'Invalid phone number format',
    },
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [
      50,
      'Local Guardian Name should not be more than 50 characters',
    ],
    message: 'Local guardian name cannot be empty',
  },
  occupation: {
    type: String,
    required: true,
    trim: true,
    maxlength: [
      50,
      'Local Guardian Occupation should not be more than 50 characters',
    ],
    message: 'Local guardian occupation cannot be empty',
  },
  contactNo: {
    type: String,
    required: true,
    trim: true,
    maxlength: [
      15,
      'Local Guardian Contact Number should not be more than 15 digits',
    ],
    validate: {
      validator: (v: string) => /^[0-9]{10,15}$/.test(v),
      message: 'Invalid phone number format',
    },
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxlength: [
      255,
      'Local Guardian Address should not be more than 255 characters',
    ],
    message: 'Local guardian address cannot be empty',
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: [20, 'Student ID should not be more than 20 characters'],
    message: 'Student ID cannot be empty',
  },
  name: {
    type: userNameSchema,
    required: true,
    message: 'Student name cannot be empty',
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
    trim: true,
    message: 'Gender cannot be empty',
  },
  dateOfBirth: {
    type: Date,
    required: true,
    message: 'Date of birth cannot be empty',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
    message: 'Email cannot be empty',
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
    maxlength: [15, 'Contact Number should not be more than 15 digits'],
    validate: {
      validator: (v: string) => /^[0-9]{10,15}$/.test(v),
      message: 'Invalid phone number format',
    },
  },
  emergencyContactNo: {
    type: String,
    required: true,
    trim: true,
    maxlength: [
      15,
      'Emergency Contact Number should not be more than 15 digits',
    ],
    validate: {
      validator: (v: string) => /^[0-9]{10,15}$/.test(v),
      message: 'Invalid phone number format',
    },
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    trim: true,
    message: 'Invalid blood group',
  },
  presentAddress: {
    type: String,
    required: true,
    trim: true,
    maxlength: [255, 'Present Address should not be more than 255 characters'],
    message: 'Present address cannot be empty',
  },
  permanentAddress: {
    type: String,
    required: true,
    trim: true,
    maxlength: [
      255,
      'Permanent Address should not be more than 255 characters',
    ],
    message: 'Permanent address cannot be empty',
  },
  gurdian: {
    type: guardianSchema,
    message: 'Guardian information cannot be empty',
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
    message: 'Local guardian information cannot be empty',
  },
  profileImg: {
    type: String,
    trim: true,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
    trim: true,
    message: 'Account status cannot be empty',
  },
});

// Create model
export const StudentModel = model<Student>('Student', studentSchema);
