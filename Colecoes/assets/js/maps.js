const getAdmins = (map) => {
    let admins =  [];

    for ([key, value] of map) {
        if (value === 'ADMIN') {
            admins.push(key);
        }
    }
    return admins;
}

const userRoles = new Map();

userRoles.set('Danielle', 'ADMIN');
userRoles.set('Jadson', 'DEV');
userRoles.set('Diego', 'ADMIN');
userRoles.set('Thales', 'ADMIN');
userRoles.set('Luciano', 'DEV');
userRoles.set('Jailton', 'DEV');
userRoles.set('Marinaldo', 'DEV');
userRoles.set('Lorion', 'USER');

console.log(getAdmins(userRoles));