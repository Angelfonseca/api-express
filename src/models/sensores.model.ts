import { Schema, model } from "mongoose"
import { Sensores } from '../interfaces/sensores.interface'

const SensoresSchema = new Schema<Sensores>(
  {
    sens_temp: {
      type: Number,
      required: true
    },
    sens_hum: {
      type: Number,
      required: true
    },
    sens_soilh: {
      type: Number,
      required: true
    },
    date: {
        type: Date,
        required: true
        
    }
    },
)

const SensoresModel = model("sensores", SensoresSchema) 
export default SensoresModel