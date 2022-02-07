export function addFriend(friends, name) {
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    
    friends.push(newFriend);
}

export function findFriendByName(friends, input) {
    for (friend of friends) {
       const name = friend.name;
    }
}