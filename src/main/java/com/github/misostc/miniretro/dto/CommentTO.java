package com.github.misostc.miniretro.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class CommentTO extends AbstractEntityTO {
    private UUID note;
    private String content;
}
