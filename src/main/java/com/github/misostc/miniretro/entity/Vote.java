package com.github.misostc.miniretro.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(uniqueConstraints={
        @UniqueConstraint(columnNames = {"user_hash", "note_id"})
})
public class Vote extends AbstractEntity {
    @ManyToOne
    @JoinColumn(name = "note_id")
    private Note note;
    @Column(name = "user_hash")
    private String userHash;
}
