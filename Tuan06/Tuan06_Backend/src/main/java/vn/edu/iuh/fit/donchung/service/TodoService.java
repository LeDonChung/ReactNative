package vn.edu.iuh.fit.donchung.service;

import vn.edu.iuh.fit.donchung.entity.Todo;

import java.util.List;

public interface TodoService {
    List<Todo> getAllByUserName(String name);
    Todo getById(long id);
    Todo save(Todo todo);
    Todo changeStatus(long id, boolean status);
}
