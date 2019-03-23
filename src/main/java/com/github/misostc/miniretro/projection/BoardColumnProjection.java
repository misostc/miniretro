package com.github.misostc.miniretro.projection;

import com.github.misostc.miniretro.entity.BoardColumn;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(
        name = "BoardColumnProjection",
        types = { BoardColumn.class })
public interface BoardColumnProjection extends AbstractEntityProjection {
    String getName();
    Long getSortOrder();
    List<NoteProjection> getNotes();
}
