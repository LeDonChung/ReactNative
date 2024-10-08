package vn.edu.iuh.fit.donchung.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.donchung.entity.Account;
import vn.edu.iuh.fit.donchung.repository.AccountRepository;
import vn.edu.iuh.fit.donchung.service.AccountService;

import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountRepository accountRepository;

    @Override
    public Account getByUsername(String username) throws Exception {
        Optional<Account> account = accountRepository.findById(username);
        if(account.isPresent()) {
            return account.get();
        }
        throw new Exception(String.format("Account with username %s not found", username));
    }

    @Override
    public Account save(Account account) throws Exception {
        Optional<Account> accountOptional = accountRepository.findById(account.getUsername());
        if(accountOptional.isPresent()) {
            throw new Exception(String.format("Account with username %s already exists", account.getUsername()));
        }
        return accountRepository.save(account);
    }
}
