// Initial load of users data from local storage
export let displayProfile;
export let users = loadUsersData();
export let loggeUser;

// Sample user data
const initialUsers = [
  {
    userName: "eman1",
    password: "1234",
    fullName: "Bung sem cedrick",
    email: "eman1@gmail.com",
    phone: "0123456789",
    userProfile: "png",
    userCoverPhoto: "png",
    bio: "hello word",
    userPosts: [
      {
        postTitle: "post1",
        postContent: "content1",
        postImage: "png",
      },
    ],

    followers: 13,
    following: 12,
    likes: 120,
    shares: 30,

    userPoints: 50,
    userPlan: "Vip1",
  },
];

// Check if initialUsers should be added (only if no users exist in local storage)
if (users.length === 0) {
  users = initialUsers;
 
}

// Function to load users data from local storage
function loadUsersData() {
  const usersData = localStorage.getItem("users");
  if (usersData) {
    const parsedData = JSON.parse(usersData);
    console.log("Loaded users data:", parsedData); // Log the loaded data
    return parsedData;
  }
  console.log("No users data found, initializing with empty array."); // Log when no data is found
  return [];
}

// Function to save users data to local storage
export function saveUsersData() {
  localStorage.setItem("users", JSON.stringify(users));
  console.log("Users data saved:", users); // Log the data being saved
}
