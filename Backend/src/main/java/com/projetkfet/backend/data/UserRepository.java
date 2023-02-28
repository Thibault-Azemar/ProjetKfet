package com.projetkfet.backend.data;

import com.projetkfet.backend.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByEmailAndPassword(String email, String password);
}