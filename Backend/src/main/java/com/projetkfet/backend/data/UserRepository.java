package com.projetkfet.backend.data;

import com.projetkfet.backend.model.User;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByNameAndPassword(String name, String password);
}