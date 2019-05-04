package com.github.misostc.miniretro.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class BoardColumnTO extends AbstractEntityTO {
    private UUID board;
    private String name;
    private Long sortOrder;

}
