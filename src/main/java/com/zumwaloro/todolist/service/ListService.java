package com.zumwaloro.todolist.service;

import com.zumwaloro.todolist.object.Item;
import com.zumwaloro.todolist.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListService {

    @Autowired
    ItemRepository repository;

    //Get all items by a specific user:
    public Iterable<Item> getAllPostsByUser(String user) {
        return repository.findAllByUser(user);
    }

    //Get all items from all users:
    public Iterable<Item> getAllItems() {
        return repository.findAll();
    }

    //Creates new item in the database:
    public String postItemToDatabase(Item item) {
        repository.save(item);
        return "Posted successfully.";
    }

    //Updates an entity in the database:
    public String updateItem(Item item) {
        Item entity;
        try {
          entity = repository.findById(item.id).get();
        } catch(Exception e) { return "Failed to update."; };
        entity.setUser(item.getUser());
        entity.setTask(item.getTask());
        entity.setDueDate(item.getDueDate());
        repository.save(entity);
        return "Update successful!";
    }

    //Deletes an item from the database:
    public String deleteItem(long id) {
        repository.deleteById(id);
        return "Deleted: " +id;
    }
}
