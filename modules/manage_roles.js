function addRole(member,role_name){
    member.guild.roles.fetch()
        .then(roles => {
            roles.cache.map(role => {
                if(role.name === role_name){
                    member.roles.add(role);
                }
            });
        });
}

function removeRole(member,role_name){
    member.guild.roles.fetch()
        .then(roles => {
            roles.cache.map(role => {
                if(role.name === role_name){
                    member.roles.remove(role);
                }
            });
        });
}

function hasRole(member,role_name){
    if(member && role_name){
        return member.roles.cache.map(role => {
            if(role.name === role_name){
                return true;
            }
        })[1];
    } else {
        return false;
    }
}

module.exports.addRole = addRole;
module.exports.removeRole = removeRole;
module.exports.hasRole = hasRole;