(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{"7RMy":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return o}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),l=a("TjRS");a("aD51");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Git/Git-Complete.md"}});var r={_frontmatter:i},c=l.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(c,b({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"git-complete"},"Git Complete"),Object(n.b)("h2",{id:"resources"},"Resources"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",b({parentName:"li"},{href:"https://gist.github.com/robmiller/6018582"}),"Git aliases"))),Object(n.b)("h2",{id:"git-config"},"Git Config"),Object(n.b)("p",null,"General setup for Git can be found at ~/.gitconfig."),Object(n.b)("h2",{id:"basic-commands"},"Basic Commands"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"What it does"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git init"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Initialise a git project")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git clone"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Clone a git project")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git add"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Add a file to git")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git commit"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Commit the current file list")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git pull"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Pull from a Git repository")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git push"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Push to a remote Git repository")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git status"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"See current status for Git repo")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git commit --amend ","[commit]"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Amend a commit")))),Object(n.b)("h2",{id:"tracked-files"},"Tracked Files"),Object(n.b)("p",null,"Files that have been added using ",Object(n.b)("inlineCode",{parentName:"p"},"git add")," can be tracked for staging and committing."),Object(n.b)("h2",{id:"add-files-recursively"},"Add Files Recursively"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git add .")," will add all files from this directory recursively."),Object(n.b)("h2",{id:"back-out-changes"},"Back Out Changes"),Object(n.b)("p",null,"If you decide that you do not want someGit changes, you can run ",Object(n.b)("inlineCode",{parentName:"p"},"git reset HEAD <file>"),". This will unstage a particular file."),Object(n.b)("p",null,"If you do not want any of the changes to the file at all, you can run ",Object(n.b)("inlineCode",{parentName:"p"},"git checkout -- <file>"),". This will remove all the changes. If you run ",Object(n.b)("inlineCode",{parentName:"p"},"git checkout ."),", it will remove all Git changes."),Object(n.b)("h2",{id:"renaming-and-moving-files"},"Renaming And Moving Files"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{className:"language-shell"}),"# renaming the file\ngit mv <old-name> <new-name>\n# git will rename the file and ls will confirm\n")),Object(n.b)("p",null,"If you ",Object(n.b)("inlineCode",{parentName:"p"},"mv")," the file, you will find that Git considers this as the old file being deleted while a new one being untracked. Adding the file using ",Object(n.b)("inlineCode",{parentName:"p"},"git add -A")," will have Git realise that we are just renaming the file."),Object(n.b)("p",null,"If we want to rename the file back, we can just use ",Object(n.b)("inlineCode",{parentName:"p"},"git mv <old-file> <new-file>"),"."),Object(n.b)("h2",{id:"git-history"},"Git History"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git help log")," will show help for the commit history."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git log")," will show you the basic Git history from the most recent to the oldest."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git log --oneline --graph --decorate")," will show one line for each commit, plus a graph history and will decorate the log."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},'git log --since="3 days ago"')," will show the commits from the last three days."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git log -- <file-name>")," will show the log for a specific file name."),Object(n.b)("p",null,"Adding ",Object(n.b)("inlineCode",{parentName:"p"},"git log --follow -- <file-name>")," will follow a file back through changes in the commit name."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git show <commit-SHA>")," will show the commit ID, author, diff + more."),Object(n.b)("h2",{id:"git-alias"},"Git Alias"),Object(n.b)("p",null,"Can has the ability to add aliases for other commands."),Object(n.b)("p",null,"We could add an alias by running ",Object(n.b)("inlineCode",{parentName:"p"},'git config --global alias.hist = "log --all --graph --decorate --oneline"'),"."),Object(n.b)("p",null,"Now we could run ",Object(n.b)("inlineCode",{parentName:"p"},"git hist")," as an alias for that lengthy command."),Object(n.b)("h2",{id:"git-comparisons"},"Git Comparisons"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git diff")," will show you the diff between the last commit and current files."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git diff HEAD")," will compare working directory and last commit."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git diff --staged HEAD")," will compare staging with last commit."),Object(n.b)("li",{parentName:"ul"},"To limit comparisons to one file, you can ",Object(n.b)("inlineCode",{parentName:"li"},"git diff -- <file-name>"),"."),Object(n.b)("li",{parentName:"ul"},"To compare to a particular command, you can run ",Object(n.b)("inlineCode",{parentName:"li"},"git diff <commit-id-one> <commit-id-two>")," to compare from HEAD to the specified commit."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git diff HEAD HEAD^")," will compare HEAD and HEAD - 1."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"git diff master origin/master")," where origin/master is the master branch on remote.")),Object(n.b)("h2",{id:"branching-and-merging"},"Branching and Merging"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Definition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git branch -a"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"List all branches")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git branch my-new-branch"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Creates new local branch")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git checkout my-new-branch"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Checkout local branch")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git branch -m my-new-branch branch"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Rename my-new-branch to branch")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git branch -d branch"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Delete branch")))),Object(n.b)("p",null,"Note that the first commit for each new branch has several labels associated with it. Those labels are just pointers and there won't be any new commits on the new branch until we make one."),Object(n.b)("h3",{id:"fast-forward-merges"},"Fast Forward Merges"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Definition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git checkout -b title-change"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Change into new branch title-change")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git merge title-change"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Merge title-change into current branch")))),Object(n.b)("p",null,"Fast-forward commits basically move the commits into the current branch as if there was no branch changes made at all."),Object(n.b)("p",null,"To disable fast-forward merges:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Definition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git merge branch --no-ff"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"This will result with a single merge commit with the branch line being preserved")))),Object(n.b)("h3",{id:"automatic-merges"},"Automatic Merges"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},'git merge simple-changes -m "Merging changes from simple changes branch"'),"."),Object(n.b)("h2",{id:"handling-conflicts"},"Handling Conflicts"),Object(n.b)("p",null,'When you run merge and run into a conflict, you will be in an "in between" merging state.'),Object(n.b)("p",null,"To resolve a conflict, you will need to open the conflicted files and see the updates Git has made to show the ",Object(n.b)("inlineCode",{parentName:"p"},"HEAD")," vs the branch conflicts separated by ",Object(n.b)("inlineCode",{parentName:"p"},"======"),"."),Object(n.b)("p",null,"Once the conflicts are resolved, you need to now commit the file. Git will generally create a ",Object(n.b)("inlineCode",{parentName:"p"},".orig")," file during resolutions that you can ignore or remove post-fix."),Object(n.b)("h2",{id:"rebase"},"Rebase"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Definition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git rebase ","[source-branch]"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Rebase source branch into current branch")))),Object(n.b)("h2",{id:"stashing"},"Stashing"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Definition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git stash"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Stash current changes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git stash apply"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Apply stash to working directory")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git stash list"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"List all stashes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git stash drop"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Drop the last stash")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git stash -u"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Include untracked files in stash (not Git ignored)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git stash pop"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Essentially runs git stash apply && git stash drop")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git stash show stash@{1}"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Show reflog of what is included in the stash")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git stash apply stash@{ref}"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Apply specific stash")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git stash drop stash@{ref}"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Drop specific stash reference")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git stash branch newchanges"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Creates newchanges branch, switches to branch, applies stash and then drops stash")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),'git stash push -m "Message"'),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Create stash associated with a message")))),Object(n.b)("p",null,"By default, ",Object(n.b)("inlineCode",{parentName:"p"},"git stash")," will only stash tracked files."),Object(n.b)("h2",{id:"tagging"},"Tagging"),Object(n.b)("p",null,"Tags are nothing more than labels. ",Object(n.b)("inlineCode",{parentName:"p"},"git tag myTag")," will create a tag - it's known as a lightweight tag."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Command"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Definition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git tags myTag"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Create tag")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git tag --list"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Show tag")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git tag --delete myTag"),Object(n.b)("td",b({parentName:"tr"},{align:null}),'Delete tag "myTag"')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git tag -a v-1.0"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"-a Createds an annotated tag - this will allow you to write release notes etc")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git show v-1.0"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"This will show tag, tagger, date and tag message with commit ID etc")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git diff v-tag1 v-tag2"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Diff between two different tags")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git tag -a ","[tag-name][commit]"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Annotate a specific commit")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),"git tag -a ","[tag-name]"," -f ","[commit]"),Object(n.b)("td",b({parentName:"tr"},{align:null}),"Edit a tag annotation")))),Object(n.b)("h2",{id:"reset-and-reflog"},"Reset and Reflog"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git reflog")," shows a log of everything that we have done. It's the reference log of the previous 60 days."),Object(n.b)("p",null,"We can then run ",Object(n.b)("inlineCode",{parentName:"p"},"git reset <ref>")," to actually go back and forward through history. We can also reset back to the top if required post-reset."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git reset --hard")),Object(n.b)("p",null,"Hard | Removes all changes from staging and working directory\nSoft | Points header back to new location"))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Git/Git-Complete.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-git-git-complete-md-9418df7bbd093aeb91c3.js.map