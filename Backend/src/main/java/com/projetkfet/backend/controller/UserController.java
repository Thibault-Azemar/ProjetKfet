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
@CrossOrigin(origins = "*")
@Controller
@RequestMapping(path = "/user")
public class UserController {

    private static final Logger logger = LogManager.getLogger("UserLogger");

    @Autowired
    private UserRepository userRepository;

    // @Autowired
    // private JwtTokenUtil jwtTokenUtil;

    // Get

    // Retourne un utilisateur
    @GetMapping()
    public @ResponseBody User getUser(@RequestParam("id") String id) throws Exception {
        logger.info("Get User : " + id);

        Optional<User> u = userRepository.findById(UUID.fromString(id));

        User user = null;
        // if n est non null
        if (u.isPresent()) {
            user = u.get();
        } else {
            logger.info("No existing account for this ID");
            throw new Exception("No existing account for this ID");
        }
        return user;
    }

    // Retourne la liste de tous les utilisateurs
    @GetMapping(path = "/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        logger.info("Get all Users");
        return userRepository.findAll();
    }

    // Post

    // Retourne l'id de l'utilisateur avec lequel on se connecte
    @PostMapping()
    public @ResponseBody UUID connectUser(@RequestParam("email") String email,
            @RequestParam("password") String password) throws Exception {
        logger.info("Connect User : " + email);
        Optional<User> u = userRepository.findByEmailAndPassword(email, password);

        UUID id = null;
        if (u.isPresent()) {
            User user = u.get();
            id = user.getId();
            logger.info("Successful connection");
        } else {
            // TODO : améliorer la gestion d'erreur
            logger.info("Wrong email/password");
            throw new Exception("Wrong email/password");
        }
        return id;
    }

    // Permet d'ajouter un nouvel utilisateur
    @PostMapping(path = "/add")
    public @ResponseBody UUID addNewUser(@RequestParam("name") String name, @RequestParam("firstname") String firstname,
            @RequestParam("role") String role, @RequestParam("email") String email,
            @RequestParam("password") String password) throws Exception {
        logger.info("Create User");

        UUID id = null;

        if (userRepository.findByEmail(email).isEmpty()) {
            User n = new User();
            n.setName(name);
            n.setFirstname(firstname);
            n.setRole(role);
            n.setEmail(email);
            n.setPassword(password);
            userRepository.save(n);
            logger.info("User saved");

            Optional<User> u = userRepository.findByEmailAndPassword(email, password);

            if (u.isPresent()) {
                User user = u.get();
                id = user.getId();
                logger.info("Id user : " + id);
            } else {
                throw new Exception("User creation error");
            }
        } else {
            throw new Exception("Email already used");
        }
        return id;
    }

    // Update
    @PatchMapping()
    public @ResponseBody String updateUser(@RequestParam("id") String id,
            @RequestParam(required = false, name = "name") String name,
            @RequestParam(required = false, name = "firstname") String firstname,
            @RequestParam(required = false, name = "role") String role,
            @RequestParam(required = false, name = "email") String email,
            @RequestParam(required = false, name = "password") String password) throws Exception {
        logger.info("Update User : " + id);

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
            logger.info("Successful User Update");
            return "Confirm";
        } else {
            logger.info("No account for this ID");
            throw new Exception("No account for this ID");
        }
    }

    // Delete

    @DeleteMapping()
    public @ResponseBody String deleteUser(@RequestParam("id") String id) throws Exception {
        logger.info("Delete User");
        Optional<User> n = userRepository.findById(UUID.fromString(id));

        if (n.isPresent()) {
            logger.info("User deleted : " + id);
            userRepository.delete(n.get());
            return "Confirm";
        } else {
            logger.info("No account for this ID");
            throw new Exception("No account for this ID");
        }

    }

}