package com.group25.foodiesapi.Entity;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity(name = "Profile")
public class UserProfile {

    @Id
    @GeneratedValue
    private int id;
    
    @Nonnull
    private String profileId;
    private String username;
    private String firstname; 
    private String lastname; 
    private String email;  
    private String nicnumber;
    private String phonenumber;
    private String aboutme;
    private String background;
    
	public UserProfile() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserProfile(int id, String profileId , String username, String firstname, String lastname, String email, String nicnumber,
			String phonenumber, String aboutme, String background) {
		super();
		this.id = id;
		this.profileId = profileId;
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.nicnumber = nicnumber;
		this.phonenumber = phonenumber;
		this.aboutme = aboutme;
		this.background = background;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public String getProfileId() {
		return profileId;
	}

	public void setProfileId(String profileId) {
		this.profileId = profileId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNicnumber() {
		return nicnumber;
	}

	public void setNicnumber(String nicnumber) {
		this.nicnumber = nicnumber;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getAboutme() {
		return aboutme;
	}

	public void setAboutme(String aboutme) {
		this.aboutme = aboutme;
	}

	public String getBackground() {
		return background;
	}

	public void setBackground(String background) {
		this.background = background;
	}

}
