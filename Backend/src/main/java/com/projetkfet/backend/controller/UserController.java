package com.projetkfet.backend.controller;

import com.projetkfet.backend.data.UserRepository;
import com.projetkfet.backend.model.User;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;


// Classe contrôlleur des requêtes pour la classe User
@Controller
@RequestMapping(path = "/user")
public class UserController {

    private static final Logger logger = LogManager.getLogger("UserLogger");

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private JwtTokenUtil jwtTokenUtil;


//  Get

    //    Retourne un utilisateur
    @GetMapping()
    public @ResponseBody
    User getUser(@RequestParam("id") String id) {
        logger.info("Get User");

        Optional<User> u = userRepository.findById(UUID.fromString(id));

        User user = null;
        // if n est non null
        if (u.isPresent()) {
            user = u.get();
        }
        return user;
    }

    //    Retourne la liste de tous les utilisateurs
    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<User> getAllUsers() {
        logger.info("All Users");
        return userRepository.findAll();
    }

//  Post

    //    Retourne l'id de l'utilisateur avec lequel on se connecte
    @PostMapping()
    public @ResponseBody
    UUID connectUser(@RequestParam("email") String email, @RequestParam("password") String password) {
        logger.info("Connect User");
        User user = userRepository.findByEmailAndPassword(email, password);
        return user.getId();
//        return JwtTokenUtil.generateToken(user);
    }

    //    Permet d'ajouter un nouvel utilisateur
    @PostMapping(path = "/add")
    public @ResponseBody
    UUID addNewUser(@RequestParam("name") String name, @RequestParam("firstname") String firstname, @RequestParam("role") String role, @RequestParam("email") String email, @RequestParam("password") String password) {
//        TODO: Vérifier que le name n'est pas déjà utilisé
        logger.info("New User");

        User n = new User();
        n.setName(name);
        n.setFirstname(firstname);
        n.setRole(role);
        n.setEmail(email);
        n.setPassword(password);
        userRepository.save(n);

        User user = userRepository.findByEmailAndPassword(email, password);
        return user.getId();
    }

    //  Update
    @PatchMapping()
    public @ResponseBody
    void updateUser(@RequestParam("id") String id, @RequestParam(required = false, name = "name") String name, @RequestParam(required = false, name = "firstname") String firstname, @RequestParam(required = false, name = "role") String role, @RequestParam(required = false, name = "email") String email, @RequestParam(required = false, name = "password") String password) {
        logger.info("Update User");

        Optional<User> n = userRepository.findById(UUID.fromString(id));

        // if n est non null
        if (n.isPresent()) {
            User user = n.get();

            if (name != null && !name.equals("")) {
                user.setName(name);
            }
            if (firstname != null && !firstname.equals("")) {
                user.setFirstname(firstname);
            }
            if (role != null && !role.equals("")) {
                user.setRole(role);
            }
            if (email != null && !email.equals("")) {
                user.setEmail(email);
            }
            if (password != null && !password.equals("")) {
                user.setPassword(password);
            }

            userRepository.save(user);
        }
    }

    //    Delete
    @DeleteMapping()
    public @ResponseBody
    void deleteUser(@RequestParam("id") String id) {
        logger.info("Delete User");
        Optional<User> n = userRepository.findById(UUID.fromString(id));

        // if n est non null
        n.ifPresent(user -> userRepository.delete(user));
    }

}