module.exports = {
    check: function(permissions, member_roles) {
        return new Promise(function(resolve, reject) {
            for (let permission of permissions) {
                if (permission.type == 'ROLE' && permission.permission) {
                    for (var i = 0; i < member_roles.length; i++) {
                        if(member_roles[i] == permission.id) {
                            resolve(true);
                        }
                    }
                }
            }

            reject(new Error('User is unauthorised to perform this command'));
        });
    },
};