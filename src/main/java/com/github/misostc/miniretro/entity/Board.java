package com.github.misostc.miniretro.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Getter
@Setter
public class Board extends AbstractEntity {
    private String name;
    @OneToMany(mappedBy = "board")
    private List<BoardColumn> boardColumns;
}
