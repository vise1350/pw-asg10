const express = require('express');
const todoModel = require('./models/todo');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
  const todos = todoModel.find({}, { _id: 0 });
  res.json(todos);
});

app.post('/add', (req, res) => {
  const { task } = req.body;

  if (!task) {
    res.json({ error: 'Please provide a task' });
    return;
  }

  const todo = new todoModel({ task });
  todo.save((err) => {
    if (err) {
      res.json({ error: err });
      return;
    }

    res.json({ message: 'Todo created successfully' });
  });
});

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const { task } = req.body;

  if (!task) {
    res.json({ error: 'Please provide a task' });
    return;
  }

  todoModel.updateOne({ _id: id }, { task }, (err, updatedTodo) => {
    if (err) {
      res.json({ error: err });
      return;
    }

    res.json({ message: 'Todo updated successfully', data: updatedTodo });
  });
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  todoModel.deleteOne({ _id: id }, (err, deletedTodo) => {
    if (err) {
      res.json({ error: err });
      return;
    }

    res.json({ message: 'Todo deleted successfully', data: deletedTodo });
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
