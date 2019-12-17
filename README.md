# Blog Dojo After Dark

## How to run the project locally

- Make sure [Node Package Manager](https://nodejs.org/en/) is installed
- Install the now cli globally using npm `npm i -g now`
- Run the dev server in the project folder to work on changes `now dev`

## How to create your own page

- From the terminal `cd` into the folder you want to save the project
- Clone the project `git clone https://github.com/CBaut/BlogDojoAfterDark.git`
- Create a new local branch with the following convention `git checkout -b {{first_name}}-{{last_name}}`
- Create your folder using the same convention `{{first_name}}-{{last_name}}`
- Create an `index.html` and a `styles.css` in your folder (optionaly a js file)
- Add a link `<a>` to your folder path on the homepage
- Stage your changes `git add .`
- Commit your changes `git commit -m '{{commit message}}'`
- Request to be a contributor (ask CBaut to add you to the project by sending your github username)
- Push your local changes to the github repository `git push`
- Create a pull request from your branch to master branch
- Get your code reviewed
- Merge branch into master
- If automated deployment is successful check the [website](https://blog.dojoafterdark.com/)
