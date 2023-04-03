package com.projetkfet.backend.controller.customer;


import com.projetkfet.backend.data.customer.GroupRepository;
import com.projetkfet.backend.model.customer.Group;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="/group")
public class GroupController {

    private static final Logger logger = LogManager.getLogger("CustomerLogger");

    @Autowired
    private GroupRepository groupRepository;

    //    GET

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<Group> getAllGroups() {
        return groupRepository.findAll();
    }

    //    POST

    @PostMapping(path="/add")
    public @ResponseBody
    UUID addNewGroup(@RequestParam("name") String name) throws Exception {
        logger.info("New group : " + name);

        UUID id = null;

        Group g = new Group();
        g.setName(name);

        groupRepository.save(g);

        if (g.getId() != null)
        {
            id = g.getId();
            logger.info("Id Group : "+ id);
            return id;
        }
        else
        {
            logger.info("Error create Group");
            throw new Exception("Error create Group");
        }
    }

    //    UPDATE

    @PatchMapping()
    public @ResponseBody
    String UpdateGroup(@RequestParam("id") String id, @RequestParam(required = false, name = "name") String name) throws Exception {
        logger.info("Update Group : " + id);

        Optional<Group> g = groupRepository.findById(UUID.fromString(id));

        if (g.isPresent()) {
            Group group = g.get();

            if (name != null && !name.equals("")) {
                group.setName(name);
            }
            logger.info("Update Group successful: " + id);

            groupRepository.save(group);
            return "Confirm";
        }
        else
        {
            logger.info("Error update Group");
            throw new Exception("Error update Group");
        }
    }

    //    DELETE

    @DeleteMapping()
    public @ResponseBody
    String deleteUser(@RequestParam("id") String id) throws Exception {
        logger.info("Delete Group : " + id);
        Optional<Group> g = groupRepository.findById(UUID.fromString(id));

        if (g.isPresent())
        {
            logger.info("Group deleted");
            groupRepository.delete(g.get());
            return "Confirm";
        }
        else
        {
            logger.info("No group for this ID");
            throw new Exception("No group for this ID");
        }

    }
}
