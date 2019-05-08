package com.github.misostc.miniretro.config;

import com.github.misostc.miniretro.dto.*;
import com.github.misostc.miniretro.entity.*;
import ma.glasnost.orika.*;
import ma.glasnost.orika.converter.builtin.PassThroughConverter;
import ma.glasnost.orika.impl.DefaultMapperFactory;
import ma.glasnost.orika.metadata.Type;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.support.SelfLinkProvider;

import java.time.Instant;
import java.util.UUID;

/**
 * Mapper configuration for Orika for websocket event objects
 */
@Configuration
public class MapperConfig {

    @Bean
    public MapperFacade mapperFacade(SelfLinkProvider selfLinkProvider) {
        MapperFactory mapperFactory = new DefaultMapperFactory.Builder().build();

        mapperFactory.classMap(Note.class, NoteTO.class).byDefault().register();
        mapperFactory.classMap(BoardColumn.class, BoardColumnTO.class).byDefault().register();
        mapperFactory.classMap(Board.class, BoardTO.class).byDefault().register();
        mapperFactory.classMap(Vote.class, VoteTO.class).byDefault().register();
        mapperFactory.classMap(Comment.class, CommentTO.class).byDefault().register();


        mapperFactory.classMap(AbstractEntity.class, AbstractEntityTO.class).customize(new CustomMapper<AbstractEntity, AbstractEntityTO>() {
            @Override
            public void mapAtoB(AbstractEntity entity, AbstractEntityTO abstractEntityTO, MappingContext context) {
                abstractEntityTO.setSelfLink(selfLinkProvider.createSelfLinkFor(entity).getHref());
            }
        })
        .register();

        mapperFactory.getConverterFactory()
                .registerConverter(new CustomConverter<AbstractEntity, UUID>() {
                    @Override
                    public UUID convert(AbstractEntity entity, Type<? extends UUID> type) {
                        return entity.getId();
                    }
                });
        mapperFactory.getConverterFactory().registerConverter(new PassThroughConverter(Instant.class));

        return mapperFactory.getMapperFacade();
    }
}
