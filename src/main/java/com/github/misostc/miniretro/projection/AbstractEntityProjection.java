package com.github.misostc.miniretro.projection;

import java.util.Date;
import java.util.UUID;

public interface AbstractEntityProjection {
    UUID getId();
    Date getCreatedDate();
}
