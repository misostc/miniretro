package com.github.misostc.miniretro.event;

import com.github.misostc.miniretro.dto.AbstractEntityTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.ResourceSupport;

@Getter
@Setter
@AllArgsConstructor
public class DatabaseEvent<T extends AbstractEntityTO> extends ResourceSupport {
    private Type operationType;
    private T resource;

    public String getResourceName() {
        return resource.getClass().getSimpleName().replaceAll("TO$","");
    }

    public static enum Type {
        UPDATE,
        CREATE,
        DELETE
    }
}
