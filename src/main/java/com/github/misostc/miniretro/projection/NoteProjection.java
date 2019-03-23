package com.github.misostc.miniretro.projection;

import com.github.misostc.miniretro.entity.Note;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(
        name = "NoteProjection",
        types = { Note.class })
public interface NoteProjection extends AbstractEntityProjection {
    String getContent();
    List<CommentProjection> getComments();
    List<VoteProjection> getVotes();
}
