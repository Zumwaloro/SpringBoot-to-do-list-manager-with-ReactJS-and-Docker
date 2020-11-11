package com.zumwaloro.todolist.controller;

import com.zumwaloro.todolist.object.Item;
import com.zumwaloro.todolist.service.ListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/items")
@CrossOrigin(origins = "*")
public class ItemController {

    @Autowired
    private ListService service;


    //Get all list items from the database
    @RequestMapping (method = RequestMethod.GET)
    public Iterable<Item> getAllItems() {
        return service.getAllItems();
    }

    //Get all list items of a user
    @RequestMapping(value = "/{user}", method = RequestMethod.GET)
    public Iterable<Item> getItemsByUser(@PathVariable(value="user") String user) {
        return service.getAllPostsByUser(user);
    }

    //Post a list item to the database
    @PostMapping(value = "/post",
                 consumes = MediaType.APPLICATION_JSON_VALUE,
                 produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String postItemToDatabase(@RequestBody Item item) {
        return service.postItemToDatabase(item);
    }

    //Update a list item in the database
    @PutMapping(value = "/update",
                consumes = MediaType.APPLICATION_JSON_VALUE,
                produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String updateItemInDatabase(@RequestBody Item item) {
        return service.updateItem(item);
    }

    //Delete a list item in the database
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public String deleteItemInDataBase(@PathVariable(value = "id") long id) {
        return service.deleteItem(id);
    }

}
