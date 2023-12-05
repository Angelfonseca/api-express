import { Schema, model } from "mongoose"
import { Sensor } from '../interfaces/sensores.interface'

const SensoresSchema = new Schema<Sensor>(
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
    place: {
      type: String,
      required: true,
      unique: true
  },
},
  {
    timestamps: true
  }
)

const SensoresModel = model("sensores", SensoresSchema) 
export default SensoresModel