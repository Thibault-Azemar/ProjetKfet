package com.projetkfet.backend.controller;

import com.projetkfet.backend.data.UserRepository;
import com.projetkfet.backend.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


// Classe contrôlleur des requêtes pour la classe User
@Controller
@RequestMapping(path="/user")
public class UserController {

    Logger logger = LoggerFactory.getLogger("UserLogger");

    @Autowired
    private UserRepository userRepository;

//  Get

//    Retourne la liste de tous les utilisateurs
    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers()
    {
        logger.info("All Users");
        return userRepository.findAll();
    }

//  Post

//    Retourne l'id de l'utilisateur avec lequel on se connecte
    @PostMapping()
    public @ResponseBody
    Integer connectUser (@RequestParam("name") String name, @RequestParam("password") String password)
    {
        logger.info("Connect User");
        return userRepository.findByNameAndPassword(name, password).getId();
    }

//    Permet d'ajouter un nouvel utilisateur
    @PostMapping(path="/add")
    public @ResponseBody
    String addNewUser (@RequestParam("name") String name, @RequestParam("password") String password)
    {
//        TODO: Vérifier que le name n'est pas déjà utilisé
        logger.info("New User");

        User n = new User();
        n.setName(name);
        n.setPassword(password);
        userRepository.save(n);
        return "Saved";
    }

//  Update
    @PatchMapping()
    public @ResponseBody void updateUser(@RequestParam("id") Integer id, @RequestParam(required = false, name = "name") String name, @RequestParam(required = false, name = "password") String password)
    {
        logger.info("Update User");

        Optional<User> n = userRepository.findById(id);

        // if n est non null
        if (n.isPresent())
        {
            User user = n.get();

            if (name != null)
            {
                user.setName(name);
            }
            if (password != null)
            {
                user.setPassword(password);
            }

            userRepository.save(user);
        }
    }

//    Delete
    @DeleteMapping()
    public @ResponseBody void deleteUser(@RequestParam("id") Integer id)
    {
        logger.info("Delete User");
        userRepository.deleteById(id);
    }

}