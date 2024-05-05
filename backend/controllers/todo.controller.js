import mongoose from "mongoose";
import Todo from "../models/todoModel.js"

export const getAllTodos = async (request, response) => {
    try {
        const todos= await Todo.find({});

        if (todos) {
            response.status(200).send(todos)
        }
    } catch (error) {
        console.log(`Error in getAllTodos ${error.message}`);
        return response.status(404).send({error: "Internal Server Error"})
    }
}

export const getSingleTodo = async (request, response) => {
    try {
        const {id}=request.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            response.status(404).send({error : "Invalid Id"})
        }

        const todo= await Todo.findById(id)

        if (!todo) {
            response.status(404).send({error : "No such Todo"})
        }
        response.status(200).send(todo)


    } catch (error) {
        console.log(`Error in getSingleTodo ${error.message}`);
        return response.status(404).send({error: "Internal Server Error"})
    }
}

export const createTodo = async (request, response) => {
    try {
        const { title }=request.body

        const newTodo= await Todo.create({title})

        response.status(201).send(newTodo)
    } catch (error) {
        console.log(`Error in createTodo ${error.message}`);
        return response.status(404).send({error: "Internal Server Error"})
    }
}

export const deleteTodo = async (request, response) => {
    try {
        const {id}=request.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            response.status(404).send({error : "Invalid Id"})
        }

        const todo= await Todo.findByIdAndDelete(id)

        if (!todo) {
            response.status(404).send({error : "No such Todo"})
        }
        response.status(200).send(todo)


    } catch (error) {
        console.log(`Error in deleteTodo ${error.message}`);
        return response.status(404).send({error: "Internal Server Error"})
    }
}

export const updateTodo = async (request, response) => {
    try {
        const {id}=request.params;
        const {title}=request.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            response.status(404).send({error : "Invalid Id"})
        }

        const todo= await Todo.findByIdAndUpdate({_id:id},{title})

        if (!todo) {
            response.status(404).send({error : "No such Todo"})
        }
        response.status(200).send(todo)


    } catch (error) {
        console.log(`Error in UpdateTodo ${error.message}`);
        return response.status(404).send({error: "Internal Server Error"})
    }
}