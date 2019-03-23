package com.github.misostc.miniretro.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Getter
@Setter
public class Note extends AbstractEntity {
    @NotNull
    @ManyToOne
    private BoardColumn boardColumn;
    private String content;
    @OneToMany(mappedBy = "note", cascade = CascadeType.ALL)
    private List<Comment> comments;
    @OneToMany(mappedBy = "note", cascade = CascadeType.ALL)
    private List<Vote> votes;

    @Override
    public Board findBoard() {
        return boardColumn.getBoard();
    }

    @Override
    public AbstractEntity findParent() {
        return boardColumn;
    }
}
