import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import { z } from 'zod';
import StudentValidationSchema from './student.zod.validation';
// import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validation for the request body

    const { student: studentData } = req.body;

    // data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // creating validation using ZOD

    const zodparseData = StudentValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodparseData);
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Internal server error',
    //     error: error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message || 'something went wrong',
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
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
