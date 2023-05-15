package com.group25.foodiesapi.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group25.foodiesapi.Entity.UserProfile;
import com.group25.foodiesapi.Repository.UserProfileRepository;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    public UserProfile getUserProfileById(String id) {
    	return userProfileRepository.findByProfileId(id);
       
    }

    public UserProfile createUserProfile(UserProfile userProfileDTO) {
      return userProfileRepository.save(userProfileDTO);
        
    }

    public UserProfile updateUserProfile(String profileId, UserProfile userProfileDTO) {
        UserProfile userProfile = userProfileRepository.findByProfileId(profileId);
        if (userProfile != null) {
        userProfile.setUsername(userProfileDTO.getUsername());
        userProfile.setFirstname(userProfileDTO.getFirstname());
        userProfile.setLastname(userProfileDTO.getLastname());
        userProfile.setEmail(userProfileDTO.getEmail());
        userProfile.setNicnumber(userProfileDTO.getNicnumber());
        userProfile.setPhonenumber(userProfileDTO.getPhonenumber());
        userProfile.setAboutme(userProfileDTO.getAboutme());
        userProfile.setBackground(userProfileDTO.getBackground());
        return userProfileRepository.save(userProfile);
        }
        return null;

    }
    

    public void deleteUserProfile(String id) {
        UserProfile userProfile = userProfileRepository.findByProfileId(id);
		if (userProfile != null) {
			userProfileRepository.delete(userProfile);
		}
    }

}