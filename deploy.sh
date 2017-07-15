# DEPLOY SCRIPT

HOSTS="${BASH_SOURCE%/*}/ansible/hosts"
PLAYBOOK="${BASH_SOURCE%/*}/ansible/playbook.yml"

read -p "WARNING! This will update the live site. Continue? y/n " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # Build
    npm run build

    # Deploy
    ansible-playbook -i $HOSTS $PLAYBOOK
fi
