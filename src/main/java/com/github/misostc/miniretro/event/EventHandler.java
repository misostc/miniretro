package com.github.misostc.miniretro.event;

import com.github.misostc.miniretro.config.WebSocketsConfig;
import com.github.misostc.miniretro.dto.AbstractEntityTO;
import com.github.misostc.miniretro.entity.AbstractEntity;
import lombok.extern.java.Log;
import ma.glasnost.orika.MapperFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.data.rest.core.support.SelfLinkProvider;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@RepositoryEventHandler
@Component
@Log
public class EventHandler {
    private final SimpMessagingTemplate template;
    private final SelfLinkProvider selfLinkProvider;
    private final MapperFacade mapperFacade;

    @Autowired
    public EventHandler(SimpMessagingTemplate template, SelfLinkProvider selfLinkProvider, MapperFacade mapperFacade) {
        this.template = template;
        this.selfLinkProvider = selfLinkProvider;
        this.mapperFacade = mapperFacade;
    }

    @HandleAfterCreate
    public void handleEntityCreate(AbstractEntity entity) {
        template.convertAndSend(getPath(entity), eventFor(entity, DatabaseEvent.Type.CREATE));
    }

    @HandleAfterSave
    public void handleEntityUpdate(AbstractEntity entity) {
        template.convertAndSend(getPath(entity), eventFor(entity, DatabaseEvent.Type.UPDATE));
    }

    @HandleAfterDelete
    public void handleEntityDelete(AbstractEntity entity) {
        template.convertAndSend(getPath(entity), eventFor(entity, DatabaseEvent.Type.DELETE));
    }

    private <T extends AbstractEntity> DatabaseEvent<AbstractEntityTO> eventFor(T entity, DatabaseEvent.Type type) {
        DatabaseEvent<AbstractEntityTO> event = new DatabaseEvent<>(type, mapperFacade.map(entity, AbstractEntityTO.class));
        event.add(selfLinkProvider.createSelfLinkFor(entity).withRel("resourceLink"));
        return event;
    }

    private String getPath(AbstractEntity entity) {
        return String.format("%s/boards/%s", WebSocketsConfig.TOPIC_NANE, entity.findBoard().getId());
    }
}
