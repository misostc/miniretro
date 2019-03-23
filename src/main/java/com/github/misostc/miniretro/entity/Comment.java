package com.github.misostc.miniretro.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
public class Comment extends AbstractEntity {
    @NotNull
    @ManyToOne
    private Note note;
    private String content;
}
