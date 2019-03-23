package com.github.misostc.miniretro.projection;

import com.github.misostc.miniretro.entity.Vote;
import org.springframework.data.rest.core.config.Projection;

@Projection(
        name = "VoteProjection",
        types = { Vote.class })
public interface VoteProjection extends AbstractEntityProjection {
    String getUserHash();
}
