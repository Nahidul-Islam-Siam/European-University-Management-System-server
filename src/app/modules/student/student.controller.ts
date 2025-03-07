import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';
const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validation for the request body
    const userNameSchema = Joi.object({
      firstName: Joi.string().max(20).trim().required(),
      middleName: Joi.string().max(20).trim().optional(),
      lastName: Joi.string().max(20).trim().required().pattern(/^[A-Za-z]+$/),
    });
    
    const guardianSchema = Joi.object({
      fatherName: Joi.string().max(50).trim().required(),
      fatherOccupation: Joi.string().max(50).trim().required(),
      fatherContactNo: Joi.string().max(15).trim().required(),
      motherName: Joi.string().max(50).trim().required(),
      motherOccupation: Joi.string().max(50).trim().required(),
      motherContactNo: Joi.string().max(15).trim().required(),
    });
    
    const localGuardianSchema = Joi.object({
      name: Joi.string().max(50).trim().required(),
      occupation: Joi.string().max(50).trim().required(),
      contactNo: Joi.string().max(15).trim().required(),
      address: Joi.string().max(255).trim().required(),
    });
    
    const studentSchema = Joi.object({
      id: Joi.string().max(20).trim().required(),
      name: userNameSchema.required(),
      gender: Joi.string().valid('male', 'female', 'other').required(),
      dateOfBirth: Joi.date().required(),
      email: Joi.string().email().trim().lowercase().required(),
      contactNumber: Joi.string().max(15).trim().required(),
      emergencyContactNo: Joi.string().max(15).trim().required(),
      bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').optional(),
      presentAddress: Joi.string().max(255).trim().required(),
      permanentAddress: Joi.string().max(255).trim().required(),
      gurdian: guardianSchema.optional(),
      localGuardian: localGuardianSchema.required(),
      profileImg: Joi.string().uri().optional(),
      isActive: Joi.string().valid('active', 'blocked').default('active'),
    });
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error,
    });
  }
};

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error,
    });
  }
};

export const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentsFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Get Single Student Data successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
