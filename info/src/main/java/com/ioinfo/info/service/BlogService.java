package com.ioinfo.info.service;

import com.ioinfo.info.entity.PersonalBlogs;
import com.ioinfo.info.repository.BlogRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {

    private final BlogRepository blogRepository;

    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public List<PersonalBlogs> getAllBlogs() {
        return blogRepository.findAll();
    }

    public PersonalBlogs getBlogById(Long id) {
        return blogRepository.findById(id).orElse(null);
    }
}
