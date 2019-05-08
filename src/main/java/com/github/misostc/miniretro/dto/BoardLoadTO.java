package com.github.misostc.miniretro.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class BoardLoadTO {
    private BoardTO board;
    private List<BoardColumnTO> boardColumns;
    private List<NoteTO> notes;
    private List<CommentTO> comments;
    private List<VoteTO> votes;
}
