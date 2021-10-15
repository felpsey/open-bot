const { Role } = require(process.cwd() + '/app/classes/Role');

module.exports = {
    index: function() {
        return new Promise(function(resolve, reject) {
            role_list = [];

            (async function() {
                let fs = require('fs').promises;

                await fs.readdir('./app/components/roles/', { withFileTypes: true})
                .then(files => {
                    for (let file of files) {
                        if (file.isFile() && file.name != "") {                        
                            let role_schema = require(process.cwd() + '/app/components/roles/' + file.name);

                            let role = new Role(
                                role_schema.label,
                                role_schema.description,
                                role_schema.value,
                            );

                            this.role_list.push(role);
                        }
                    }
                })
                .catch(error => {
                    reject(error);
                });

                resolve(role_list);
            })();
        });
    },
}