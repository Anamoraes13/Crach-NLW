const LinksSocialMedia = {
  github: 'Anamoraes13',
  youtube: 'channel/UC0y4IuwmKmFV4z60LX97JKQ',
  instagram: 'brancamoraes_',
  facebook: 'branca.moraes.14',
  twitter: '@AnnaMoraes1313'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfilesInfos()
