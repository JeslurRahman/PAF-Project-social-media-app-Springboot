package com.group25.foodiesapi.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group25.foodiesapi.Entity.Users;
import com.group25.foodiesapi.Repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo userRepo;
	
	public Users submitMetaDataOfUser(Users user) {
		return userRepo.save(user);
		
	}
	
	public Users displayUserMetaData(String userid) {
		return userRepo.findByUserId(userid);
	
	}
	
	public Users updateUserMetaData(String userId, Users updatedUser) {
		Users user = userRepo.findByUserId(userId);
		if (user != null) {
			user.setName(updatedUser.getName());
			user.setUserName(updatedUser.getUserName());
			user.setProfileImage(updatedUser.getProfileImage());
			return userRepo.save(user);
		}
		return null;
	}
	
	public void deleteUserMetaData(String userId) {
		Users user = userRepo.findByUserId(userId);
		if (user != null) {
			userRepo.delete(user);
		}
	}
}
