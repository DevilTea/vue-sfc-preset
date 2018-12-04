const exec = require('child_process').execSync

let username = ''
let useremail = ''

try {
  username = exec('git config --get user.name')
  useremail = exec('git config --get user.email')
} catch (e) {}

username = username && username.toString().trim()
useremail = useremail && useremail.toString().trim()

module.exports = [
  {
    type: 'input',
    name: 'description',
    message: 'Description :',
    default: 'A Vue.js Component'
  },
  {
    type: 'input',
    name: 'authorName',
    message: 'Author Name :',
    default: username || 'example'
  },
  {
    type: 'input',
    name: 'authorEmail',
    message: 'Author Email :',
    default: useremail || 'example@mail.com'
  }
  // {
  //   type: 'input',
  //   name: 'repository',
  //   message: 'Repository Url :',
  //   default: answers => {
  //     console.log(answers)
  //     return 'https://github.com/' + answers.authorName + '/' + answers.packageName + '.git'
  //   }
  // }
]
