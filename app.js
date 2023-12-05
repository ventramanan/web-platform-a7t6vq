
const Data = () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

// Progression 2: SHOW MY PROMISE
Data()
  .then(result => {
    console.log('List of Users:', result); // Display in console

    // Display as a list
    let player='<h2>Lists of Users</h2>';
    result.forEach(function(user) {
      player+=`<div class="player">
                <div class="strength">Name : ${user.name}</div>
                <div>Email   : ${user.email}</div>
                <div>Phone   : ${user.phone}</div>
                <div>Website : ${user.website}</div>
                <div>Company : ${user.company.name}</div>
                <div>City    : ${user.address.city}</div>
                <div>Zipcode : ${user.address.zipcode}</div>
              </div>`;
    });

    // Display the list in the console
    document.getElementById('message').innerHTML = player
  })
  .catch(error => {
    // Progression 3: REJECT ME
    console.log('Promise rejected.');
    console.log(error.message);
  });

