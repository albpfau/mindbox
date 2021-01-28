function addUser() {
  var user = {
    primaryEmail: "liz@example.com",
    name: {
      givenName: "Elizabeth",
      familyName: "Smith",
    },
    
    password: Math.random().toString(36),
  };
  user = AdminDirectory.Users.insert(user);
  Logger.log("User %s created with ID %s.", user.primaryEmail, user.id);
}
addUser()
