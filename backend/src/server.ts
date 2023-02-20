import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

mongoose.set('strictQuery', false)
const PORT = 3000


type AnimalType = {
  _id: string
  name: string
  animalClass: string
  diet: string
  legCount: number
  endangerment: string
}


const main = async () => {
  const app = express();
  app.use(bodyparser.json());
  app.use(cors({ origin: "*" }));

  await mongoose.connect('mongodb://localhost:27017/Animals')

  const animalsSchema = new mongoose.Schema({
    name: String,
    class: String,
    diet: String,
    legCount: Number,
    endangerment: String
  }, {collection:"animals"})

  const Animal = mongoose.model('animals', animalsSchema)


  const createAnimal = (name:string, animalClass:string, diet:string, legCount:number, endangerment:string) => {
    const animal = new Animal({
      name,
      animalClass,
      diet,
      legCount,
      endangerment
    })
    return animal
  }


  app.get("/animals", (req: Request, res: Response) => {
    Animal.find().then((data) => {
      res.send(data)
      console.log(data)
    })
  })

  app.post("/animals", (req: Request, res: Response) => {
    const {name, animalClass, diet, legCount, endangerment}:AnimalType = req.body


    const animal = createAnimal(name, animalClass, diet, legCount, endangerment)
    console.log(animal)
    animal.save()
  })

  app.delete("/animals/:id" , (req: Request, res: Response) => {
    const animalID = req.params.id
  })


  app.listen(PORT, () => {
    console.log(`Application started on port ${PORT}!`);
  });
}


main()