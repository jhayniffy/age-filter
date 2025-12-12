const users = [];

function addUser() {
  const first = document.getElementById("first").value.trim();
  const last = document.getElementById("last").value.trim();
  const age = parseInt(document.getElementById("age").value);

  if (!first || !last || !age) {
    alert("Please fill all fields.");
    return;
  }

  // Ignore users under 18
  if (age < 18) {
    alert("User ignored (below 18).");
    return;
  }

  // Transform user
  const fullName = `${first} ${last}`;
  const ageGroup = age < 30 ? "Below 30" : "Above 30";

  const transformedUser = { fullName, ageGroup };
  users.push(transformedUser);

  displayUsers();
}

function displayUsers() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  users.forEach((user, index) => {
    const div = document.createElement("div");
    div.className = "user-card";
    div.innerHTML = `
      <strong>${index + 1}. ${user.fullName}</strong><br>
      Age Group: ${user.ageGroup}
    `;
    output.appendChild(div);
  });
}
