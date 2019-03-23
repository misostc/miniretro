package com.github.misostc.miniretro.repository;

import com.github.misostc.miniretro.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public interface BoardRepository extends JpaRepository<Board, UUID> {

    @Override
    @RestResource(exported = false)
    void delete(Board entity);
}
