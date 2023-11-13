import { Schema, model } from "mongoose"
import { Sistema } from "../interfaces/sistema.interface"

const sistemaSchema = new Schema<Sistema>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    sensor: { type: Schema.Types.ObjectId, ref: 'sensores' },
    place: {
      type: String,
      required: true
    }
},
{
  timestamps: true
})
  const SistemaModel = model("sistema", sistemaSchema)

  export default SistemaModel
  