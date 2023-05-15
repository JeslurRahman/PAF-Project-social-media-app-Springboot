package com.group25.foodiesapi.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.group25.foodiesapi.Entity.UserProfile;

@Repository
public interface UserProfileRepository extends CrudRepository<UserProfile, Long> {

	UserProfile save(UserProfile userProfile);
    UserProfile findByProfileId(String id);

}