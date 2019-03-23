package com.github.misostc.miniretro.event;

import com.github.misostc.miniretro.entity.AbstractEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.Resource;

@Getter
@Setter
@AllArgsConstructor
public class DatabaseEvent<T extends AbstractEntity> {
    private Type operationType;
    private Resource<T> resource;

    public String getResourceName() {
        return resource.getContent().getClass().getSimpleName();
    }

    public static enum Type {
        UPDATE,
        CREATE,
        DELETE
    }
}
