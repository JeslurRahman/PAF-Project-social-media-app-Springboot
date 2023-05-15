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

import com.group25.foodiesapi.Entity.UserProfile;
import com.group25.foodiesapi.Service.UserProfileService;

@RestController
@RequestMapping("/profile")
public class UserProfileController {

    @Autowired
    private UserProfileService userProfileService;

    @GetMapping("/{id}")
    public UserProfile getUserProfileById(@PathVariable("id") String id) {
        return userProfileService.getUserProfileById(id);
    }

    @PostMapping("")
    public UserProfile createUserProfile(@RequestBody UserProfile userProfileDTO) {
        return userProfileService.createUserProfile(userProfileDTO);
    }

    @PutMapping("/{id}")
    public UserProfile updateUserProfile(@PathVariable("id") String id, @RequestBody UserProfile userProfileDTO) {
        
        return userProfileService.updateUserProfile(id,userProfileDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteUserProfile(@PathVariable("id") String id) {
        userProfileService.deleteUserProfile(id);
    }
}
