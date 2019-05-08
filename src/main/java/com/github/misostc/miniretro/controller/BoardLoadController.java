package com.github.misostc.miniretro.controller;

import com.github.misostc.miniretro.dto.*;
import com.github.misostc.miniretro.entity.*;
import com.github.misostc.miniretro.repository.BoardRepository;
import com.github.misostc.miniretro.repository.CommentRepository;
import com.github.misostc.miniretro.repository.NoteRepository;
import com.github.misostc.miniretro.repository.VoteRepository;
import ma.glasnost.orika.MapperFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@BasePathAwareController
public class BoardLoadController {

    private BoardRepository boardRepository;
    private NoteRepository noteRepository;
    private CommentRepository commentRepository;
    private VoteRepository voteRepository;
    private MapperFacade mapperFacade;

    @Autowired
    public BoardLoadController(BoardRepository boardRepository, NoteRepository noteRepository, CommentRepository commentRepository, VoteRepository voteRepository, MapperFacade mapperFacade) {
        this.boardRepository = boardRepository;
        this.noteRepository = noteRepository;
        this.commentRepository = commentRepository;
        this.voteRepository = voteRepository;
        this.mapperFacade = mapperFacade;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/boardLoad")
    public @ResponseBody
    ResponseEntity<BoardLoadTO> loadBoard(@RequestParam(name = "id") String boardId) {
        try {
            Board board = boardRepository.getOne(UUID.fromString(boardId));
            if (board == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(constructResult(board));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();

        }
    }

    private BoardLoadTO constructResult(Board board) {
        BoardLoadTO result = new BoardLoadTO();
        result.setBoard(mapperFacade.map(board, BoardTO.class));

        List<BoardColumn> boardColumns = board.getBoardColumns();
        result.setBoardColumns(mapperFacade.mapAsList(boardColumns, BoardColumnTO.class));

        List<Note> notes = noteRepository.findByBoardColumnIn(boardColumns);
        result.setNotes(mapperFacade.mapAsList(notes, NoteTO.class));

        List<Vote> votes = voteRepository.findByNoteIn(notes);
        result.setVotes(mapperFacade.mapAsList(votes, VoteTO.class));

        List<Comment> comments = commentRepository.findByNoteIn(notes);
        result.setComments(mapperFacade.mapAsList(comments, CommentTO.class));

        return result;
    }
}
