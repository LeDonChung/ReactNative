package vn.edu.iuh.fit.donchung.service;

import vn.edu.iuh.fit.donchung.entity.Account;

public interface AccountService {
    Account getByUsername(String name) throws Exception;
    Account save(Account account) throws Exception;
}
