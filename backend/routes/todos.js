import express from 'express';
import Todo from '../models/todoModel.js'

const todoRoutes=express.Router();

// Controllers

import {getAllTodos, getSingleTodo, createTodo, deleteTodo, updateTodo} from "../controllers/todo.controller.js"

todoRoutes.get("/", getAllTodos)
todoRoutes.get("/:id", getSingleTodo)
todoRoutes.post("/", createTodo)
todoRoutes.delete("/:id", deleteTodo)
todoRoutes.patch("/:id", updateTodo)



export default todoRoutes