package com.zumwaloro.todolist.object;

import javax.persistence.*;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    public String user;
    @Column(columnDefinition = "TEXT")
    public String task;
    public String dueDate;

    private Item() {}

    public Item(String user, String task, String dueDate) {
        this.user = user;
        this.task = task;
        this.dueDate = dueDate;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public String getDueDate() {return dueDate; }

    public void setDueDate(String dueDate) { this.dueDate = dueDate; }
}
