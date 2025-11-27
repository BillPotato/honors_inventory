import express from "express"
import { Equipment, Location } from "../models"
import type { Request, Response } from "express"

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    const equipment = await Location.findAll({
        include: {
            model: Equipment
        }
    })
    res.status(200).json(equipment)
})

router.post("/", async (req: Request, res: Response) => {
    const location = await Location.create(req.body)
    res.status(201).json(location)
})

router.put("/:id", async (req: Request, res: Response) => {
    const location = await Location.findByPk(req.params.id)
    if (location) {
        const updated = await location.update({ ...req.body })
        await location.save()
        res.json(updated)
    } else {
        res.status(404).end()
    }
})

router.delete("/:id", async (req: Request, res: Response) => {
    const location = await Location.findByPk(req.params.id)
    if (location) {
        await location.destroy()
    }
    res.status(204).end()
})

export default router