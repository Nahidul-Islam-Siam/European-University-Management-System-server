/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  avatar?: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  gurdian: TGurdian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
  isDeleted: boolean;
};

// for creating static

export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

// for creating insrance
// export type StudentMethod = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethod
// >;
