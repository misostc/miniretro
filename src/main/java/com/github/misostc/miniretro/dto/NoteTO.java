package com.github.misostc.miniretro.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class NoteTO extends AbstractEntityTO {
    private UUID boardColumn;
    private String content;
}
