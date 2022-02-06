import { Router } from "express";
import { ListAbilities } from "../Modules/useCases/ListAbilities";

const router = Router()

router.post("/", async (req, res) => {
  const { name } = req.body;

  const listAbilities = new ListAbilities();

  const abilities = await listAbilities.list(name.toLowerCase())

  res.json(abilities)
})

export default router;