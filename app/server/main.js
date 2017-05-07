import { Meteor } from 'meteor/meteor';

Meteor.publish('userslistings', function() {
  //TODO: Subscribe only to active and public polls
  return users.find();
});

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
 createVoter: function(name,email,password,fake,cin,gov)
{
	/*var voter_id,                                                         // 8
	    hash = "";  
	    users.insert({'email':email,'password':password});                                                      //
                                                                       //
	var emailAlreadyExist = users.find({ "email": email }, { limit: 1 }).count() > 0;
                                                                       //
	if (emailAlreadyExist === true) {                                     // 12
		throw new Meteor.Error(403, "email already registered");             // 13
	}                                                                     //
                                                                       //
	console.log(Auth.generatePasswordHash('test'));                       // 16
	if (typeof Auth !== "undefined") {                                    // 17
		hash = Auth.generatePasswordHash(password);                          // 18
		hashFake = Auth.generatePasswordHash(fakePassword);                  // 19
	}                                                                     //
                                                                       //
	try {                                                                 // 22
		voter_id = Voters.insert({                                           // 23
			created: Date.now(),                                                // 24
			modified: Date.now(),                                               // 25
			name: name,                                                         // 26
			email: email,                                                       // 27
			password_hash: hash,                                                // 28
			fakePassword_hash: hashFake,                                        // 29
			cin: cin,                                                           // 30
			gouvernerat: gouvernerat,                                           // 31
			registered: cin ? true : false                                      // 32
		});                                                                  //
                                                                       //
		return voter_id;                                                     // 35
	} catch (e) {}                                                        //
                                                                       //
	return false;    */
},

 generatePasswordHash: function (password) {
		var bcrypt = Meteor.npmRequire("bcrypt-nodejs");
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(password, salt);

		return hash;
	}

});
