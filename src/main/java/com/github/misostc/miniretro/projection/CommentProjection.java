package com.github.misostc.miniretro.projection;

import com.github.misostc.miniretro.entity.Comment;
import org.springframework.data.rest.core.config.Projection;

@Projection(
        name = "CommentProjection",
        types = { Comment.class })
public interface CommentProjection extends AbstractEntityProjection {
    String getContent();
}
