package vn.edu.iuh.fit.donchung.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.donchung.entity.Todo;
import vn.edu.iuh.fit.donchung.repository.TodoRepository;
import vn.edu.iuh.fit.donchung.service.TodoService;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {
    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<Todo> getAllByUserName(String name) {
        return todoRepository.findByUser_Username(name);
    }

    @Override
    public Todo getById(long id) {
        return todoRepository.findById(id).orElse(null);
    }

    @Override
    public Todo save(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public Todo changeStatus(long id, boolean status) {
        Todo todo = todoRepository.findById(id).orElse(null);
        if (todo != null) {
            todo.setCompleted(status);
            todoRepository.save(todo);
        }
        return todo;
    }
}
