package com.ioinfo.info.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

import com.ioinfo.info.dto.LetsConnectDTO;
import com.ioinfo.info.entity.LetsConnect;
import com.ioinfo.info.entity.UserRegistration;
import com.ioinfo.info.repository.LetsConnectUsersRepository;
import com.ioinfo.info.repository.UserRegistrationRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.multipart.MultipartFile;

import com.ioinfo.info.dto.UserDTO;
import com.ioinfo.info.entity.Employee;
import com.ioinfo.info.entity.User;
import com.ioinfo.info.repository.InfoRepository;
import com.ioinfo.info.repository.LoginRepository;
import com.ioinfo.info.response.EmployeeResponse;

@Service
public class InfoService {

	@Autowired
	InfoRepository empRepo;

	@Autowired
	LoginRepository userRepository;

	@Autowired
	private UserRegistrationRepository userRegistrationRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private SysIOInfoEmailService sysIOInfoEmailService;

	private final String uploadDir = "D:/images/";

	@Autowired
	private LetsConnectUsersRepository letsConnectUsersRepository;


	public EmployeeResponse getEmployeedetailsById(int id) {

		Employee emp = empRepo.findById(id).get();

		EmployeeResponse empResponse = new EmployeeResponse();

		empResponse.setId(emp.getId());
		empResponse.setName(emp.getName());

		empResponse.setEmail(emp.getEmail());
		empResponse.setBloodGroup(emp.getBloodGroup());

		return empResponse;

	}

	// using ModelMapper

	private final ModelMapper modelMapper;

	@Autowired
	public InfoService(ModelMapper modelMapper) {
		// TODO Auto-generated constructor stub

		this.modelMapper = modelMapper;
	}

	public EmployeeResponse getEmployeedetailsUseModelMapperById(int id) {

		Employee emp = empRepo.findById(id).get();

		return modelMapper.map(emp, EmployeeResponse.class);

	}

	public void updatePhotoById(MultipartFile file, String photoURL) throws IOException {
		// TODO Auto-generated method stub

		Employee imageEntity = empRepo.findById(1).orElse(null);

		// Check if the image with the given ID exists
		if (imageEntity == null) {
			return;
		}

		// Update the fields
		imageEntity.setName(file.getOriginalFilename());
		imageEntity.setPhoto(file.getBytes());

		// Save the updated image entity
		empRepo.save(imageEntity);

	}

	public ResponseEntity<byte[]> getImage(int id) {
		Employee imageEntity = empRepo.findById(1).orElse(null);

		if (imageEntity == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok().header(HttpHeaders.CONTENT_TYPE, "image/png") // Or appropriate content type (e.g.,
																					// PNG, GIF)
				.body(imageEntity.getPhoto());
	}

	private String getContentType(String fileName) {
		// Check file extension (you can add more types as needed)
		if (fileName.endsWith(".png")) {
			return MimeTypeUtils.IMAGE_PNG_VALUE;
		} else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) {
			return MimeTypeUtils.IMAGE_JPEG_VALUE;
		} else if (fileName.endsWith(".gif")) {
			return MimeTypeUtils.IMAGE_GIF_VALUE;
		} else {
			return "application/octet-stream"; // Default binary stream
		}
	}

	public Employee uploadEmployeePhoto(Employee employee, MultipartFile file) throws IOException {
		// Check if the file exists and is not empty
		if (file.isEmpty()) {
			throw new RuntimeException("File is empty");
		}

		// Create a unique file name
		String fileName = file.getOriginalFilename();
		Path path = Paths.get(uploadDir, fileName);

		// Save the file to the local file system
		Files.copy(file.getInputStream(), path);

		// Set the file path in the employee object
//	        employee.setPhotoURL(path.toString());

		employee.setPhoto(file.getBytes());

		// Save the employee with updated photo URL
		return empRepo.save(employee);
	}

	public UserDTO userRegistration(UserRegistration userRegister) {
		// ✅ Save registration details
		UserRegistration userDetails = userRegistrationRepository.save(userRegister);

		// ✅ Create login credentials
		User newLoginCredentials = new User();
		newLoginCredentials.setUsername(userRegister.getUsername());

		// 🔑 Encrypt password before saving
		String encodedPassword = passwordEncoder.encode(userRegister.getPassword());
		newLoginCredentials.setPassword(encodedPassword);

		userRepository.save(newLoginCredentials);

		// ✅ Prepare variables for email template
		Map<String, Object> templateModel = new HashMap<>();
		templateModel.put("name", userRegister.getUsername());
		templateModel.put("loginUrl", "http://localhost:4200/login"); // 🔗 Replace with your actual login URL

		// ✅ Send Welcome Email using template
		sysIOInfoEmailService.sendEmailWithTemplate(
				userRegister.getEmailId(),                             // recipient
				"🎉 Welcome to Our Platform!",                       // subject
				"user-registration-template.html",                   // Thymeleaf template
				templateModel                                        // template variables
		);

		// ✅ Return response as DTO
		return modelMapper.map(userDetails, UserDTO.class);
	}

	public LetsConnectDTO letsConnectUsers(LetsConnectDTO letsConnectUsers,String filePath) {

		LetsConnect newLetsConnectUser = new LetsConnect();

		newLetsConnectUser.setBody(letsConnectUsers.getBody());
		newLetsConnectUser.setSubject(letsConnectUsers.getSubject());
		newLetsConnectUser.setName(letsConnectUsers.getName());
		newLetsConnectUser.setEmailId(letsConnectUsers.getEmailId());
		newLetsConnectUser.setMobileNo(letsConnectUsers.getMobileNo());
		newLetsConnectUser.setFilePath(filePath);
		letsConnectUsersRepository.save(newLetsConnectUser);

		Map<String, Object> templateModel = new HashMap<>();
		templateModel.put("recipientName", newLetsConnectUser.getName());


		sysIOInfoEmailService.sendEmailWithTemplate(
				newLetsConnectUser.getEmailId(),                             // recipient
				"🎉 Thanks for Reaching Out – Let’s Connect!!",                       // subject
				"lets-connect-email-template.html",                   // Thymeleaf template
				templateModel                                        // template variables
		);
		return modelMapper.map(letsConnectUsers, LetsConnectDTO.class);
	}
}
