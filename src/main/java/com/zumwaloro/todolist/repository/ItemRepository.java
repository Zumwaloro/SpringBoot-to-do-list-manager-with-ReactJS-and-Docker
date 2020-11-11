package com.zumwaloro.todolist.repository;

import com.zumwaloro.todolist.object.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Long> {
    Iterable<Item> findAllByUser(String user);
}
