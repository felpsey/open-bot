module.exports = {
    id: 'ID',
    name: 'NAME',

    permissions: [
        {
            id: process.env.USER_ROLE_ID,
            type: 'ROLE',
            permission: true,
        }
    ],
}
