import express from "express";
import {
  deleteOneUser,
  forgotPassword,
  getAllusers,
  loginUser,
  myProfile,
  register,
  resetPassword,
  updateRole,
  verifyUser,
} from "../controllers/user.js";
import { isAuth } from "../middlewares/isAuth.js";


const router = express.Router();

router.post("/user/register", register);
router.post("/user/verify", verifyUser);
router.post("/user/login", loginUser);
router.get("/user/me", isAuth, myProfile);
router.post("/user/forgot", forgotPassword);
router.post("/user/reset", resetPassword);
router.get("/user/getall", isAuth, getAllusers);
router.delete("/user/deleteone/:id", isAuth, deleteOneUser);
router.put("/user/updateRole/:id", isAuth, updateRole);


export default router;
