package com.github.misostc.miniretro.projection;

import com.github.misostc.miniretro.entity.Board;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(
        name = "fullBoard",
        types = { Board.class })
public interface BoardProjection extends AbstractEntityProjection {
    String getName();
    List<BoardColumnProjection> getBoardColumns();
}
