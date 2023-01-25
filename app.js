const github = new GitHub;
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input event listner
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show Alert
          console.log('1');
          ui.showAlert('User Not Found', 'alert alert-danger');
          ui.clearProfile();


        } else {
          // Show Profile
          console.log('2');
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);

        }

      })

  } else {
    ui.clearProfile();
  }


});