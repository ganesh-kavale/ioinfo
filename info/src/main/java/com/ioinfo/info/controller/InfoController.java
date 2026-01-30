package com.ioinfo.info.controller;

import com.ioinfo.info.configuration.JwtUtil;
import com.ioinfo.info.dto.LetsConnectDTO;
import com.ioinfo.info.dto.UserDTO;
import com.ioinfo.info.entity.*;
import com.ioinfo.info.repository.InfoRepository;
import com.ioinfo.info.repository.LoginRepository;
import com.ioinfo.info.response.AddressResponse;
import com.ioinfo.info.response.EmployeeResponse;
import com.ioinfo.info.service.BlogService;
import com.ioinfo.info.service.DataService;
import com.ioinfo.info.service.InfoService;
import jakarta.servlet.http.Part;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import javax.naming.AuthenticationException;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
//To add new API add it in the Security Config, Otherwise you will get an 403 http error in api.
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
public class InfoController {

	@Autowired
	InfoService empService;

	@Autowired
	InfoRepository empRepo;

	@Autowired
	RestTemplate restTemplate;

	@Autowired
	BlogService blogService;


	@PostMapping("testi")
	public String abcd() {

		return "Ok testt";
	}

	@GetMapping("/testiget")
	public String abced() {

		return "Ok testt";
	}

	@Autowired
	DataService dataService;
	
	@Autowired
	InfoService infoService;

	@GetMapping("employeeDetailsById/{id}")
	public ResponseEntity<EmployeeResponse> getEmployeedetailsById(@PathVariable("id") int id) {

		EmployeeResponse empResponse = empService.getEmployeedetailsById(id);
		return ResponseEntity.status(HttpStatus.CREATED).body(empResponse);
	}

	@GetMapping("getEmployeedetailsByModelMapperId/{id}")
	public EmployeeResponse getEmployeedetailsByMapperId(@PathVariable("id") int id) {
		String url = "http://localhost:8090/address-app/api/address/" + id;
		AddressResponse addressResponse = restTemplate.getForObject(url, AddressResponse.class);

		// Learnt about how to use ModelMapper
		EmployeeResponse empResponse = empService.getEmployeedetailsUseModelMapperById(id);

		empResponse.setAddressResponse(addressResponse);

		return empResponse;

	}

	// upload file
//		@RequestMapping(value = "/upload-file", method = RequestMethod.POST)
//		public int filesave( @RequestParam int userid) {
////			System.out.println("..........dlfmksdjfgksjk");
////			String filename = file.getOriginalFilename();
////			String location = file.getName();
//			System.out.println("sssssssssssssssssssss"+ userid);
//
////			try {
////				Files.copy(file.getInputStream(), Paths.get("D:\\miniProjectFiles\\" + file.getOriginalFilename()),
////						StandardCopyOption.REPLACE_EXISTING);
//////				fileDao.savefile(filename, userid,readfile,writefile,shareby,role);
////			} catch (Exception e) {
////				// TODO: handle exception
////				System.out.println(e);
////				return 0;
////			}
////			System.out.println(filename);
//			return 1;
//		}

	@PostMapping("upload-file-data")
	public String uploadImage(@RequestParam("file") MultipartFile file, @RequestParam("photoURL") String photoURL) {
		try {

			System.out.println("coming byte111111111111111" + file.getBytes() + file.getOriginalFilename());

			empService.updatePhotoById(file, photoURL);
			return "File uploaded successfully!";
		} catch (IOException e) {
			e.printStackTrace();
			return "Error uploading file!";
		}
	}

//	@PostMapping("/testapi")
//	public String uploadImage() {
//
//		return "Ok test";
//	}

	@GetMapping("/image/{id}")
	public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
		ResponseEntity<byte[]> imageEntity = empService.getImage(1);

		if (imageEntity == null) {
			return ResponseEntity.notFound().build();
		}

		return imageEntity;
	}

	@PostMapping("/save-employee")
	public Employee uploadEmployeePhoto(@RequestParam("file") MultipartFile file, @RequestBody Employee employee)
			throws IOException {
		// Set the employee ID to the employee object

		return empService.uploadEmployeePhoto(employee, file);
	}

//  Categories data provider

	@GetMapping("/navigation-nodes")
	public ResponseEntity<List<NavigationNodes>> provideCategoriesData() {

		String url = "http://localhost:8092/data-app/api/navigation-node-details";

		System.out.println("urlurlurlurlurlurlurlurlurl" + url);
//		ResponseEntity<List<NavigationNodes>> response = restTemplate.exchange(url, HttpMethod.GET, null,
//				new ParameterizedTypeReference<List<NavigationNodes>>() {
//		});

		System.out.println("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
		List<NavigationNodes> response = dataService.getNavigationNodeDetails();

		if (response.isEmpty()) {
			return ResponseEntity.noContent().build();
		}

		System.out.println("responsresponsresponsresponsresponsrespons" + response);

		return ResponseEntity.ok(response);
	}

//    Personal information data provider
//    
	@GetMapping("/about-me")
	public ResponseEntity<List<AboutMe>> aboutMeDetails() {

		String url = "http://localhost:8092/data-app/api/about-me";

//		ResponseEntity<List<AboutMe>> response = restTemplate.exchange(url, HttpMethod.GET, null,
//				new ParameterizedTypeReference<List<AboutMe>>() {
//				});

		List<AboutMe> response = dataService.getAboutMeDetails();

		if (response.isEmpty()) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.ok(response);
	}

	@GetMapping("/homepage-corousal")
	public ResponseEntity<List<HomepageCorousal>> getHomepageCorousal() {

		String url = "http://localhost:8092/data-app/api/homepage-corousal";

//		ResponseEntity<List<HomepageCorousal>> response = restTemplate.exchange(url, HttpMethod.GET, null,
//				new ParameterizedTypeReference<List<HomepageCorousal>>() {
//				});

		List<HomepageCorousal> response = dataService.getHomepageCorousal();

		if (response.isEmpty()) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.ok(response);
	}

	@GetMapping("/homepagetest")
	public String gmetHomepageCorousal() {

		String url = "http://localhost:8092/data-app/api/homepage-corousal";

		return url;
	}

//    email service app call

	@GetMapping("/user/{email}")
	public ResponseEntity<Map<String, String>> getUserByEmail(@PathVariable String email) {

		System.out.println("Email send checked successfuly" + email);
//		String url = "http://localhost:8050/email-service/api/user/" + email;

		Map<String, String> response = new HashMap<>();
		response.put("message", "Email sent successfully" + email);


		return ResponseEntity.ok(response);
	}

	@GetMapping("/homepage-image-row")
	public ResponseEntity<List<HomepageImageRow>> getHomepageImageRow() {

		List<HomepageImageRow> response = dataService.getHomepageImageRow();

		if (response.isEmpty()) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.ok(response);
	}

	@Autowired
	private LoginRepository userRepository;

	@Autowired
	private JwtUtil jwtUtil;
//
//	@PostMapping("/auth/login")
//	public ResponseEntity<?> login(@RequestBody User user) {
//
//		System.out.println("qqqqqqqqqqqqqqqqqqqqqqqqqq" + user);
//		Optional<User> dbUser = userRepository.findByUsername(user.getUsername());
//
//		if (dbUser.isPresent() && dbUser.get().getPassword().equals(user.getPassword())) {
//			String token = jwtUtil.generateToken(user.getUsername());
//			return ResponseEntity.ok(Collections.singletonMap("token", token));
//		}
//		return ResponseEntity.ok(Collections.singletonMap("token", "customm"));
//	}

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/auth/login")
	public ResponseEntity<?> login(@RequestBody User authRequest) throws AuthenticationException {

		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

		System.out.print("coming for authentification?!!!");
//		This method triggers Spring Security's authentication process.
//
//		It sends the token to a chain of AuthenticationProviders
//
//		The default one is usually a DaoAuthenticationProvider, which:
//
//		Loads the user using your UserDetailsService
//
//		Compares the password (with encoder)
//
//		If it matches, returns an authenticated token 
//		Sets Authentication Object in the SecurityContextHolder
		
		String token = jwtUtil.generateToken(authRequest.getUsername());
		return ResponseEntity.ok(new AuthResponse(token));
	}

	
	@PostMapping("user-registration")
	public ResponseEntity<UserDTO> saveUserRegistration(@RequestBody UserRegistration user) {

		System.out.println(user);
		UserDTO useDTO = infoService.userRegistration(user);
		return ResponseEntity.ok(useDTO);
	}

	//get all blogs

	@GetMapping("/admin-personal-blogs")
	public ResponseEntity<List<PersonalBlogs>> getAllPersonalBlogs() {

		List<PersonalBlogs> response = blogService.getAllBlogs();

		if (response.isEmpty()) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.ok(response);
	}

	//Lets Connect
	private static final String UPLOAD_DIR = "D:/WorkJava/ioinfo/ioinfo/info/src/main/resources/templates/";

	Part part;
	@PostMapping(value = "/lets-connect", consumes = "multipart/form-data")
	public ResponseEntity<String> letsConnect(
			@RequestPart("file") MultipartFile file,
			@RequestPart("body") String body,
			@RequestPart("emailId") String emailId,
			@RequestPart("mobileNo") String mobileNo,
			@RequestPart("subject") String subject,
			@RequestPart("name") String name) {
		try {

			String filePath = dataService.saveFileToLocation(file);

			LetsConnectDTO dto = new LetsConnectDTO();
			dto.setBody(body);
			dto.setEmailId(emailId);
			dto.setMobileNo(mobileNo);
			dto.setSubject(subject);
			dto.setName(name);
			infoService.letsConnectUsers(dto,filePath);
			return ResponseEntity.ok(
							". Thank you for your interest. We’ll connect with you soon via the shared email address!"
			);

		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(500).body("File upload failed: " + e.getMessage());
		}
	}
}
