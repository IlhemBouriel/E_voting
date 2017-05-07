
Session.setDefault('latestBlock', {});

/*
Template['blockchainStatus'].helpers({
    currentBlock: function () {
        return JSON.stringify(Session.get('latestBlock'), null, 2);
    }
});


Template['deposits'].helpers({
    deposits: function () {
        return Deposits.find({},{sort: {blockNumber: -1}});
    },
    value: function(){
        return web3.fromWei(this.value, 'ether') + ' ether';
    }
});


Template['guessNumber'].events({
    'click button.guess': function (e, template) {
        alert(template.find('input').value +' is '+ GuessNumberInstance.guessNumber(template.find('input').value));
        template.find('input').value = '';
    },
    'click button.set': function (e, template) {
        GuessNumberInstance.setNumber(template.find('input').value, {from: web3.eth.accounts[0], gas: 50000});
        template.find('input').value = '';
    },
    'click a.switch': function (e, template) {
        TemplateVar.set('setNumber', !TemplateVar.get('setNumber'));
    }
});
*/
Meteor.subscribe('users_listings');        

var createVoter= function (name, email, password, fakePassword, cin, gouvernerat, cb) {
  Meteor.call("createVoter", name, email, password, fakePassword, cin, gouvernerat, cb);
}

var login= function (email, password, cb) {
  Meteor.call("login", email, password, cb);
}

var logout= function () {
  return Meteor.call("logout", getSessionToken());
}


Template.auth.events({
  'click #submitRegister': function(event) {
    event.preventDefault();
    var voter = {
      'name': '',
      'cin': '',
      'email': '',
      'birth':'',
      'gov':'',
      'password': '',
      'fakePassword': ''
    }

    // Test Voting
    GuessNumberInstance.register_candidate('c35',{from:web3.eth.accounts[0]});
    GuessNumberInstance.register_candidate('c36',{from:web3.eth.accounts[0]});
    GuessNumberInstance.register_voter('v35',{from:web3.eth.accounts[0]});
    console.log("Before Any Vote");
    console.log("Number of Voter => c35 "+GuessNumberInstance.get_votes('c35',{from:web3.eth.accounts[0]}));
    console.log("Number of Voter => c36 "+GuessNumberInstance.get_votes('c36',{from:web3.eth.accounts[0]}));
    GuessNumberInstance.vote('v35','c35',{from:web3.eth.accounts[0]});
    console.log("V35 has voted to C35");
    console.log("Number of Voter => "+GuessNumberInstance.get_votes('c35',{from:web3.eth.accounts[0]}));
    console.log("Number of Voter => "+GuessNumberInstance.get_votes('c36',{from:web3.eth.accounts[0]}));
    GuessNumberInstance.vote('v35','c36',{from:web3.eth.accounts[0]});
    console.log("V35 has voted to C36 ");
    console.log("Number of Voter => "+GuessNumberInstance.get_votes('c35',{from:web3.eth.accounts[0]}));
    console.log("Number of Voter => "+GuessNumberInstance.get_votes('c36',{from:web3.eth.accounts[0]}));
    console.log("Resume ");
    console.log("candidates =>"+GuessNumberInstance.get_num_candidates({from:web3.eth.accounts[0]}));
    console.log("voters =>"+GuessNumberInstance.get_num_voters({from:web3.eth.accounts[0]}));

    
    // Test Setting Authority
    console.log("Old Authority"+toString(GuessNumberInstance.get_authority({from:web3.eth.accounts[0]})));
    GuessNumberInstance.set_authority(web3.eth.accounts[1],{from:web3.eth.accounts[0]});
    console.log("New Authority"+toString(GuessNumberInstance.get_authority({from:web3.eth.accounts[1]})));
    Router.go('/home');

/*
    voter['name']= $('#register').find('#full_name').val();
    voter['email']= $('#register').find('#email').val();
    voter['cin'] = $('#register').find('#cin').val();
    voter['birth']= $('#register').find('#datepicker').val();
    voter['gov'] = $('#register').find('#gouvernerat').val();
    voter['password'] = $('#register').find('#password').val();
    voter['fakePassword'] = $('#register').find('#fakePassword').val();

    createVoter(voter['name'], voter['email'], voter['password'], voter['fakePassword'], voter['cin'], voter['gouvernerat'], function (error, result) {
      if (!error) {
        console.log('Do register')
        login(voter['email'], voter['password'], function(error, sessionToken) {
          if(!error) {
           // rememberSessionToken(sessionToken);
            Router.go('/')
          }
              console.log('done');
              Session.set('name',name);
              Router.go('/home');
        })
      } else {
        console.log('Theres and error ' + error);
        Router.go('/');
      }
    });*/

   } 
});