package vn.edu.iuh.fit.donchung.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.donchung.entity.Account;
import vn.edu.iuh.fit.donchung.entity.Todo;
import vn.edu.iuh.fit.donchung.service.TodoService;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoController {
    @Autowired
    private TodoService todoService;
    @GetMapping("/findByAccount/{username}")
    public ResponseEntity<List<Todo>> findByName(@PathVariable String username) {
        return ResponseEntity.ok(todoService.getAllByUserName(username));
    }

    @PostMapping("/{username}")
    public ResponseEntity<Todo> save(@RequestBody Todo todo, @PathVariable String username) {
        Account account = new Account();
        account.setUsername(username);
        todo.setUser(account);
        return ResponseEntity.ok(todoService.save(todo));
    }

    @PostMapping("/changeStatus/{id}")
    public ResponseEntity<Todo> changeStatus(@PathVariable long id, @RequestParam boolean status) {
        return ResponseEntity.ok(todoService.changeStatus(id, status));
    }
}
