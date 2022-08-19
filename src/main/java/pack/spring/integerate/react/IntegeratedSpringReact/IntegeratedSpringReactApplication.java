package pack.spring.integerate.react.IntegeratedSpringReact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class IntegeratedSpringReactApplication {

	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	ResourceService service;
	
	@Autowired
	TelevisionService serv;

	public static void main(String[] args) {
		SpringApplication.run(IntegeratedSpringReactApplication.class, args);
	}
	
//	@PostConstruct
//	public void zealous() {
//		Resource res=new Resource();
//		
//		res.setEmail("razzaksr@gmail.com");res.setEmpName("Razak Mohamed S");
//		res.setMobile(87654345678L);res.setPassword(encoder.encode("mohamed"));
//		res.setUsername("razak");
//		
//		service.implementSave(res);
//		
//		
//		Television t1=new Television(12, "alphaX", "LG", 41900, 24.5, "UHD");
//		Television t2=new Television(87, "DeltaCG", "Samsung", 31900, 24.5, "FHD");
//		Television t3=new Television(123, "alphaX", "Micromax", 14900, 24.5, "HD");
//		Television t4=new Television(9, "MegaX", "TCL", 31900, 44.5, "3D");
//		
//		serv.makeNewOne(t1);serv.makeNewOne(t2);
//		serv.makeNewOne(t3);serv.makeNewOne(t4);
//		
//		
//	}

}
