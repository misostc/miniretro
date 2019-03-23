package com.github.misostc.miniretro.repository;

import com.github.misostc.miniretro.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public interface CommentRepository extends JpaRepository<Comment, UUID> {
}
