package com.github.misostc.miniretro;

import com.github.misostc.miniretro.dto.AbstractEntityTO;
import com.github.misostc.miniretro.dto.NoteTO;
import com.github.misostc.miniretro.entity.BoardColumn;
import com.github.misostc.miniretro.entity.Note;
import ma.glasnost.orika.MapperFacade;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.hateoas.Resource;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.UUID;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MiniretroApplicationTests {

	@Autowired
	MapperFacade mapperFacade;

	@Test
	public void contextLoads() {
	}

	@Test
	public void mapperTest() {
		BoardColumn bc = new BoardColumn();
		bc.setId(UUID.randomUUID());

		Note note = new Note();
		note.setBoardColumn(bc);
		note.setContent("Olala");
		note.setComments(new ArrayList<>());

		NoteTO noteTO = new NoteTO();
		mapperFacade.map(note, noteTO);

		Assert.assertNotNull(noteTO.getContent());
		Assert.assertNotNull(noteTO.getBoardColumn());
	}

	@Test
	public void convertTest() {
		BoardColumn bc = new BoardColumn();
		bc.setId(UUID.randomUUID());

		Note note = new Note();
		note.setBoardColumn(bc);
		note.setContent("Olala");
		note.setComments(new ArrayList<>());

		AbstractEntityTO to = mapperFacade.map(note, AbstractEntityTO.class);

		Assert.assertTrue(to instanceof NoteTO);

		NoteTO noteTO = (NoteTO) to;
		Assert.assertNotNull(noteTO.getContent());
		Assert.assertNotNull(noteTO.getBoardColumn());
	}

}
