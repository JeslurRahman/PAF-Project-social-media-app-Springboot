package com.group25.foodiesapi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group25.foodiesapi.Entity.Users;
import com.group25.foodiesapi.Service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("")
	private Users submitUser(@RequestBody Users users) {
		return userService.submitMetaDataOfUser(users);
		
	}
	
	@GetMapping("/{userid}")
	private Users getUserDetails(@PathVariable("userid") String userId) {
		return userService.displayUserMetaData(userId);
		
	}
	
	@PutMapping("/{userid}")
	private Users updateUserDetails(@PathVariable("userid") String userId, @RequestBody Users users) {
		return userService.updateUserMetaData(userId, users);
	
	}
	
	@DeleteMapping("/{userid}")
	private void deleteUser(@PathVariable("userid") String userId) {
		userService.deleteUserMetaData(userId);
	
	}
	
	
}
