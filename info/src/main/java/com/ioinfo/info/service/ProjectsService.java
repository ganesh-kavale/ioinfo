package com.ioinfo.info.service;

import com.ioinfo.info.entity.Projects;
import com.ioinfo.info.repository.LoginRepository;
import com.ioinfo.info.repository.ProjectsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectsService {

    @Autowired
    ProjectsRepository projectsRepository;

    public List<Projects> getProjects(){
        return projectsRepository.findAll();
    }


}
