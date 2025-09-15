package com.ioinfo.info.service;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.ioinfo.info.entity.AboutMe;
import com.ioinfo.info.entity.HomepageCorousal;
import com.ioinfo.info.entity.HomepageImageRow;
import com.ioinfo.info.entity.NavigationNodes;
import com.ioinfo.info.repository.AdminInfoRepository;
import com.ioinfo.info.repository.CustomDataRepository;
import com.ioinfo.info.repository.HomepageCorousalRepository;
import com.ioinfo.info.repository.HomepageImageRowRepository;
import org.springframework.web.multipart.MultipartFile;

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

	@Value("${iosys.lets.connect.file.upload.location}")
	private String letsConnectFileUploadLocation;

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

	public String saveFileToLocation(MultipartFile file) throws IOException {

		// 1. Save file to server path
		File directory = new File(letsConnectFileUploadLocation);
		if (!directory.exists()) {
			directory.mkdirs();
		}
		// Create the file on server
		String filePath = letsConnectFileUploadLocation + file.getOriginalFilename();
		File dest = new File(filePath);

		file.transferTo(dest);  // Save the file//

		return filePath;
	}
}
