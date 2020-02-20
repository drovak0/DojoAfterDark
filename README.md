# Dojo After Dark

Community site where anyone can create a page and contribute to the project.

## Links

- [Live Site](https://dojoafterdark.com/)
- [Repo](https://github.com/CBaut/DojoAfterDark)
- [Project Board](https://github.com/CBaut/DojoAfterDark/projects/1)
- Deployed automatically using GitHub and [Zeit](zeit.co).

## How to run the project locally

- open `index.html` in a browser

## How to create your own page

- From the terminal `cd` into the folder you want to save the project
- Clone the project `git clone https://github.com/CBaut/DojoAfterDark.git`
- `cd` into the newly created project folder (`ls` or `dir` to view the contents of the current directory)
- Create a new local branch with the following convention `git checkout -b {{first_name}}-{{last_name}}` (replace the contents of `{{}}` including the brackets)
- Create your folder in the project folder using the same convention `{{first_name}}-{{last_name}}`
- Create an `index.html` and a `styles.css` in your folder (optionaly a js file)
- Add a link `<a>` to your folder path on the homepage
- Stage your changes `git add .`
- Commit your changes `git commit -m "{{commit message}}"`
- Request to be a contributor (ask CBaut to add you to the project by sending your github username)
- Push your local changes to the github repository `git push`
- Create a pull request from your branch to master branch
- Get your code reviewed
- Merge branch into master
- If automated deployment is successful check the [website](https://dojoafterdark.com/)
