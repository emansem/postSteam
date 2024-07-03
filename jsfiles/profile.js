import { users, loggeUser, saveUsersData, displayProfile } from "../jsfiles/app.js";
let renderuser = displayProfile;

renderuser = renderProfile('eman1')

export function renderProfile(username) {
    const user = users.find((user) => user.userName === username);
    let displayHtml = '';
    
    if (user) {
        displayHtml = `
        <div class="profile-header">
            <div class="profile-cover-photo"></div>
            <div class="profile-avatar">
                <img src="${user.avatarUrl || '/images/avata1.png'}" alt="User profile photo" />
            </div>
        </div>
        <div class="profile-info">
            <h1 class="profile-name">${user.fullName || 'Eman Sem'}</h1>
            <p class="profile-bio">${user.bio || 'AI enthusiast and tech blogger'}</p>
            <div class="profile-stats">
                <div class="stat">
                    <span class="stat-value">${user.followers || '1.2k'}</span>
                    <span class="stat-label">Followers</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${user.following || '450'}</span>
                    <span class="stat-label">Following</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${user.shares || '52'}</span>
     
                    <span class="stat-label">Shares</span>
                </div>
            </div>
            <div class="profile-actions">
                <button class="btn btn-primary">Follow</button>
                <button class="btn btn-secondary" id="edit-profile-btn">Edit Profile</button>
            </div>
        </div>`;
    } else {
        displayHtml = '<p>User not found</p>';
    }
    const displayProfileHeader = document.querySelector('.profile-container');
    displayProfileHeader.innerHTML = displayHtml;
    console.log(displayHtml);
    return displayHtml;
}

 

