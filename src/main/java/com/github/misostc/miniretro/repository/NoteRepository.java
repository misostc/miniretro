package com.github.misostc.miniretro.repository;

import com.github.misostc.miniretro.entity.BoardColumn;
import com.github.misostc.miniretro.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Transactional
@Component
public interface NoteRepository extends JpaRepository<Note, UUID> {

    List<Note> findByBoardColumnIn(List<BoardColumn> boardColumns);
}
