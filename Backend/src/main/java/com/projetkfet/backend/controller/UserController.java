package com.projetkfet.backend.controller;

import com.projetkfet.backend.data.UserRepository;
import com.projetkfet.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


// Classe contrôlleur des requêtes pour la classe User
@Controller
@RequestMapping(path="/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

//  Get

//    Retourne l'id de l'utilisateur avec lequel on se connecte
    @GetMapping(path="/connect")
    public @ResponseBody
    Integer connectUser (@RequestParam("name") String name, @RequestParam("password") String password)
    {
        return userRepository.findByNameAndPassword(name, password).getId();
    }

//    Retourne la liste de tous les utilisateurs
    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers()
    {
        return userRepository.findAll();
    }

//  Post

//    Permet d'ajouter un nouvel utilisateur
    @PostMapping(path="/add")
    public @ResponseBody
    String addNewUser (@RequestParam("name") String name, @RequestParam("password") String password)
    {
//        TODO: Vérifier que le name n'est pas déjà utilisé
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
        }
    }

//    Delete
    @DeleteMapping()
    public @ResponseBody void deleteUser(@RequestParam("id") Integer id)
    {
        userRepository.deleteById(id);
    }

}