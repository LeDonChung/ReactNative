package vn.edu.iuh.fit.donchung.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.edu.iuh.fit.donchung.entity.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
}
