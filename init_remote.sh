ssh $1 "git init $2.git/;cd $2.git/;git config receive.denyCurrentBranch updateInstead"
git remote add $3 $1:$2.git
git push $3 master
