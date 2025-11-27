import express from "express"
import { Equipment } from "../models"
import type { Request, Response } from "express"

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    const equipment = await Equipment.findAll()
    res.status(200).json(equipment)
})

router.post("/", async (req: Request, res: Response) => {
    // request.body would include locationId
    const equipment = await Equipment.create(req.body)
    res.status(201).json(equipment)
})

router.put("/:id", async (req: Request, res: Response) => {
    const equipment = await Equipment.findByPk(req.params.id)
    if (equipment) {
        const updated = await equipment.update({ ...req.body })
        await equipment.save()
        res.json(updated)
    } else {
        res.status(404).end()
    }
})

// TODO: make delete enpoint
router.delete("/:id", async (req: Request, res: Response) => {
    const equipment = await Equipment.findByPk(req.params.id)
    if (equipment) {
        await equipment.destroy()
    }
    res.status(204).end()
})

export default router