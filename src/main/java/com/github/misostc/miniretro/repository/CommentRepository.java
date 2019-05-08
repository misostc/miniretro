package com.github.misostc.miniretro.repository;

import com.github.misostc.miniretro.entity.Comment;
import com.github.misostc.miniretro.entity.Note;
import com.github.misostc.miniretro.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public interface CommentRepository extends JpaRepository<Comment, UUID> {
    List<Comment> findByNoteIn(List<Note> notes);
}
