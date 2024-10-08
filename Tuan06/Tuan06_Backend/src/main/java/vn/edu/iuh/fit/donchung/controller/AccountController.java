package vn.edu.iuh.fit.donchung.controller;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.donchung.entity.Account;
import vn.edu.iuh.fit.donchung.service.AccountService;


@RestController
@RequestMapping("/accounts")
public class AccountController {
    @Autowired
    private AccountService accountService;


    @GetMapping("/{username}")
    public ResponseEntity<Account> getByUsername(@PathVariable String username) throws Exception {
        return ResponseEntity.ok(accountService.getByUsername(username));
    }

    @PostMapping
    public ResponseEntity<Account> save(@RequestBody Account account) throws Exception {
        return ResponseEntity.ok(accountService.save(account));
    }
}
