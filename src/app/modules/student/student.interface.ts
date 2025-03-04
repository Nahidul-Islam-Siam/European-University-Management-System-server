import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type localGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type userName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: userName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  avatar?: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  gurdian: Gurdian;
  localGuardian: localGuardian;
  profileImg?: string;
  isActive: 'active' | 'inactive';
};
