export function addFriend(name) {
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    
    return newFriend;
}

export function findFriendByName(friends, input) {
    for (friend of friends) {
       const name = friend.name;
    }
}