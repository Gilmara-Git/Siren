const SocialNetworkGraph = require("../movieInFriendsNetwork");
const newFriend = new SocialNetworkGraph();  

test("newFriend should be an Object", function(){
    expect(newFriend).toEqual({"friendsList": {}, "totalMoviesList": []})
});

test("addFriend() should be a function", function(){
    expect(typeof newFriend.addFriend).toBe("function");
});


test("addFriendsWith should be a function", function(){
    expect(typeof newFriend.addFriendsWith).toBe("function");
});

test("getMovieWithHighestLikesAmongFriends should be a function", function(){
    expect(typeof newFriend.getMovieWithHighestLikesAmongFriends).toBe("function");
})