package com.github.misostc.miniretro.event;

import com.github.misostc.miniretro.config.WebSocketsConfig;
import com.github.misostc.miniretro.entity.AbstractEntity;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.data.rest.core.support.SelfLinkProvider;
import org.springframework.hateoas.Resource;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@RepositoryEventHandler
@Component
@Log
public class EventHandler {
    private final SimpMessagingTemplate template;
    private final SelfLinkProvider selfLinkProvider;

    @Autowired
    public EventHandler(SimpMessagingTemplate template, SelfLinkProvider selfLinkProvider) {
        this.template = template;
        this.selfLinkProvider = selfLinkProvider;
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

    private <T extends AbstractEntity> DatabaseEvent<T> eventFor(T entity, DatabaseEvent.Type type) {
        Resource<T> resource = new Resource<>(entity);
        resource.add(selfLinkProvider.createSelfLinkFor(entity).withSelfRel());
        if (entity.findParent() != null) {
            resource.add(selfLinkProvider.createSelfLinkFor(entity.findParent()).withRel("parent"));
        }
        return new DatabaseEvent<>(type, resource);
    }

    private String getPath(AbstractEntity entity) {
        return String.format("%s/boards/%s", WebSocketsConfig.TOPIC_NANE, entity.findBoard().getId());
    }
}
