package com.ioinfo.info.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ioinfo.info.entity.AboutMe;
import com.ioinfo.info.entity.HomepageCorousal;
import com.ioinfo.info.entity.HomepageImageRow;
import com.ioinfo.info.entity.NavigationNodes;
import com.ioinfo.info.repository.AdminInfoRepository;
import com.ioinfo.info.repository.CustomDataRepository;
import com.ioinfo.info.repository.HomepageCorousalRepository;
import com.ioinfo.info.repository.HomepageImageRowRepository;

@Service
public class DataService {

	@Autowired
	private CustomDataRepository customDataRepository;

	@Autowired
	private AdminInfoRepository adminInfoRepository;

	@Autowired
	private HomepageCorousalRepository homepageCorousalRepository;

	@Autowired
	private HomepageImageRowRepository homepageImageRowRepository;

	public List<NavigationNodes> getNavigationNodeDetails() {
		// TODO Auto-generated method stub

		return customDataRepository.findAll();

	}

	public List<AboutMe> getAboutMeDetails() {
		// TODO Auto-generated method stub

		return adminInfoRepository.findAll();

	}

	public List<HomepageCorousal> getHomepageCorousal() {
		// TODO Auto-generated method stub
		return homepageCorousalRepository.findAll();
	}
	
	public List<HomepageImageRow> getHomepageImageRow() {
		// TODO Auto-generated method stub
		return homepageImageRowRepository.findAll();
	}

}
