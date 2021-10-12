async function asyncCall() {
  const team_members = await (await fetch('/js/team/team.json')).json();
  // expected output: "resolved"
  printMembersDOM(team_members)
}

asyncCall()

function printMembersDOM (members) {
  let container = document.querySelector('.team')
  members.forEach(member => {
    var a = document.createElement('a'); 
    a.classList.add('member__card');
    a.href = member.linkedin;
    a.innerHTML = `<img src="${member.photo_url}${member.name}" alt="" class="member__card__image">
      <h3 class="member__card__name">${member.name}</h3>
      <h4 class="member__card__nickname">${member.nickname}</h4>
      <p class="member__card__role">${member.role}</p>`
    container.append(a)
  })
}