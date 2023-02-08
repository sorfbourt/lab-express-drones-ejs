// Iteration #1
const { Schema, model } = require('mongoose')

const droneSchema = new Schema(
  {
    name: {
      type:String, 
      unique: true
    },
    propellers: Number,
    maxSpeed: Number
    }
,
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Drone = model('Drone', droneSchema)

module.exports = Drone