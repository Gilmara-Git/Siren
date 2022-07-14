
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
});

// test("addFriend() is called with arguments", function(){
//     //Preparing a Spy for newFriend.addFriend() method 
//     const newFriendSpy = jest.spyOn(newFriend, "addFriend");

//     //Creating a mock rule for use as a function argument;
//     const trueRule = jest.fn(()=>true);
//     expect(newFriendSpy).toHaveBeenCalled("value", ["true"]);
//     setRuleSpy.mockClear();

// })
