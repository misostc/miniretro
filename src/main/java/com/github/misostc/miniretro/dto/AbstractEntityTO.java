package com.github.misostc.miniretro.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
public abstract class AbstractEntityTO {
    private UUID id;
    private String selfLink;
    private Instant createdDate;
}
