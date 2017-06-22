var express = require("express");

var todoRoutes = express.Router();
var Todo = require("../models/todo");

todoRoutes.route("/")
    .get(function (req, res) {
        Todo.find({
            user_id: req.user._id
        }, function (err, todos) {
            if (err) return res.status(500).send(err);
            return res.send(todos);
        })
    })
    .post(function (req, res) {
        var newTodo = new Todo(req.body);
        newTodo.user_id = req.user._id;
        newTodo.save(function (err, createdTodo) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(createdTodo);
        })
    });

todoRoutes.route("/:id")
    .get(function (req, res) {
        Todo.findOne({
            user_id: req.user._id,
            _id: req.params.id
        }, function (err, todo) {
            if (todo === null) return res.status(500).send("No todo found");
            if (err) return res.status(500).send(err);
            return res.send(todo);
        })
    })
    .put(function (req, res) {
        Todo.findOneAndUpdate({
            user_id: req.user._id,
            _id: req.params.id
        }, req.body, {new: true}, function (err, todo) {
            if (todo === null) return res.status(500).send("No todo found");
            if (err) return res.status(500).send(err);
            return res.send(todo);
        })
    })
    .delete(function (req, res) {
        Todo.findOneAndRemove({
            user_id: req.user._id,
            _id: req.params.id
        }, function (err, deletedTodo) {
            if (deletedTodo === null) return res.status(500).send("No todo found");
            if (err) return res.status(500).send(err);
            return res.send(deletedTodo);
        });
    });

module.exports = todoRoutes;