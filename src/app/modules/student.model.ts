import { Schema, model, connect } from 'mongoose';
import { Student } from './student/student.interface';
const  studentSchema = new Schema<Student>({
    id:{type: String},
    name:{
        firstName:{
            type: String,
            required: true
        },
        middleName:{
            type:String,
        },
        lastName:{
            type:String,
            required: true,
        }
    },
    gender:["male","female"],
    dateOfBirth:{type: String},
    email:{
type:String,
required:true,
contactNo:{ type: String, required: true },

    }
})