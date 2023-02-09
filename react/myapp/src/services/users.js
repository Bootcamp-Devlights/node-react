export async function createUserService(user) {
  const userResponse = await fetch('http://localhost:4000/api/users', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  const userData = await userResponse.json();

  return userData;
}

export async function loginUser(user) {
  const loginResponse = await fetch('http://localhost:4000/api/users/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  const userData = await loginResponse.json();

  if (loginResponse.status === 401) {
    throw userData;
  }

  return userData;
}

export async function getUsers() {
  const usersResponse = await fetch('http://localhost:4000/api/users');

  const usersData = await usersResponse.json();

  return usersData;
}