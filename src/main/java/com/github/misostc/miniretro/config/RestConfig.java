package com.github.misostc.miniretro.config;

import com.github.misostc.miniretro.projection.BoardProjection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

@Configuration
public class RestConfig implements RepositoryRestConfigurer {
    @Autowired
    private EntityManager entityManager;

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        // This fixes issue where id is not marshalled in get for an object.
        // See: http://stackoverflow.com/questions/24839760/spring-boot-responsebody-doesnt-serialize-entity-id
        config.exposeIdsFor(
                entityManager.getMetamodel().getEntities().stream()
                        .map(Type::getJavaType)
                        .toArray(Class[]::new));
        config.getProjectionConfiguration().addProjection(BoardProjection.class);
    }
}
