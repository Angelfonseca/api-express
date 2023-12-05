import { Schema, model } from "mongoose"
import { Sistema } from "../interfaces/sistema.interface"

const sistemaSchema = new Schema<Sistema>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    sensor: { type: Schema.Types.ObjectId, ref: 'sensores' }
},
{
  timestamps: true
})
  const SistemaModel = model("sistema", sistemaSchema)

  export default SistemaModel
  