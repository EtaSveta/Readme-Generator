const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [title, github] = profileDataArgs;

const generateReadme = (title, github) => {
    return `
    # ${title}
    ## ${github} 
    `;
}


fs.writeFile('README.md', generateReadme(title, github), err => {
    if (err) throw err;

    console.log('Readme complete!')
})