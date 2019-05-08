package com.github.misostc.miniretro.repository;

import com.github.misostc.miniretro.entity.BoardColumn;
import com.github.misostc.miniretro.entity.Note;
import com.github.misostc.miniretro.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public interface VoteRepository extends JpaRepository<Vote, UUID> {

    List<Vote> findByNoteIn(List<Note> notes);
}
