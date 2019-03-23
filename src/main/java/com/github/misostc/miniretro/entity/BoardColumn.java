package com.github.misostc.miniretro.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Getter
@Setter
public class BoardColumn extends AbstractEntity {
    @NotNull
    @ManyToOne
    private Board board;
    private String name;
    private Long sortOrder;
    @OneToMany(mappedBy = "boardColumn")
    private List<Note> notes;

    @Override
    public Board findBoard() {
        return board;
    }

    @Override
    public AbstractEntity findParent() {
        return board;
    }
}
