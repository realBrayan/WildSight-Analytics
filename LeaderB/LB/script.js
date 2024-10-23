// Placeholder data for leaderboard
const users = [
    { name: "Ben", uploads: 999, profilePic: "https://via.placeholder.com/40" },
    { name: "Umang ", uploads: 911, profilePic: "https://via.placeholder.com/40" },
    { name: "Long", uploads: 450, profilePic: "https://via.placeholder.com/40" },
    { name: "Derian", uploads: 154, profilePic: "https://via.placeholder.com/40" }
];

// Icons for top 3 users
const rankIcons = [
    '🥇', // Gold for 1st place
    '🥈', // Silver for 2nd place
    '🥉'  // Bronze for 3rd place
];

function loadLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboard-body');
    
    users.sort((a, b) => b.uploads - a.uploads); // Sort users by uploads in descending order
    
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        
        // Left section: rank icon, profile picture, and user name
        const leftSection = document.createElement('td');
        leftSection.classList.add('left-section');

        const rankIcon = document.createElement('span');
        rankIcon.classList.add('rank-icon');
        if (index < 3) {
            rankIcon.innerHTML = rankIcons[index];
        } else {
            rankIcon.innerHTML = index + 1; // Show rank as a number for others
        }

        const profilePic = document.createElement('img');
        profilePic.src = user.profilePic;
        profilePic.alt = `${user.name}'s profile picture`;
        profilePic.classList.add('user-image');
        
        const userName = document.createElement('span');
        userName.classList.add('user-name');
        userName.innerHTML = user.name;

        leftSection.appendChild(rankIcon);
        leftSection.appendChild(profilePic);
        leftSection.appendChild(userName);

        // Right section: number of uploads
        const rightSection = document.createElement('td');
        rightSection.classList.add('upload-count');
        rightSection.innerHTML = `${user.uploads} uploads`;

        row.appendChild(leftSection);
        row.appendChild(rightSection);
        
        leaderboardBody.appendChild(row);
    });
}

// Load leaderboard when the page loads
window.onload = loadLeaderboard;
