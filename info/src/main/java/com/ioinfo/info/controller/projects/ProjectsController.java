package com.ioinfo.info.controller.projects;


import com.ioinfo.info.entity.Projects;
import com.ioinfo.info.service.ProjectsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//To add new API add it in the Security Config, Otherwise you will get an 403 http error in api.
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
public class ProjectsController {

    @Autowired
    private ProjectsService projectService;

    @GetMapping("/projects")
    public List<Projects> getAll() {
        return projectService.getProjects();
    }
}
