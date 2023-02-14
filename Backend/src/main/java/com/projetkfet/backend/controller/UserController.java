package com.projetkfet.backend.controller;

import com.projetkfet.backend.data.UserRepository;
import com.projetkfet.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


// Classe contrôlleur des requêtes pour la classe User
@Controller
@RequestMapping(path="/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/add")
    public @ResponseBody
    String addNewUser (@RequestParam String name
            , @RequestParam String password) {

        User n = new User();
        n.setName(name);
        n.setPassword(password);
        userRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="/connect")
    public @ResponseBody
    User connectUser (@RequestParam String name
            , @RequestParam String password) {
        return userRepository.findByNameAndPassword(name, password);
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}