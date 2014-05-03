var users = require('./models/users');
var videos = require('./models/videos');

var alice = {username:'alice', password:'password', first_name:'Alice', last_name:'Test', email:'alice@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'app.js'};
var bob = {username:'bob', password:'password', first_name:'Bob', last_name:'Test', email:'bob@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'app.js'};
var fake_users = [alice,bob];

// Alice 
var iht = {username:alice.username,url:"//www.youtube.com/embed/CMNry4PE93Y",length:18,title:'I like turtles',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'comedy',promoted:true,thumbnail:''};
var numa = {username:bob.username,url:"//www.youtube.com/embed/60og9gwKh1o",length:98,title:'Numa!',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'comedy',promoted:true,thumbnail:''};
var starwars_kid = {username:bob.username,url:"//www.youtube.com/embed/HPPj6viIBmU",length:139,title:'Star wars kid',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'comedy',promoted:false,thumbnail:''};
var fake_video_array =[iht,numa];


// Populate server with fake users
fake_users.forEach(function(fake_user){
    users.adduser(fake_user.username, fake_user.password, fake_user.first_name, fake_user.last_name, fake_user.email, fake_user.promoted_video_url, fake_user.picture, fake_user.bio, function(success) {
        console.log('User added:'+fake_user.username);
    });
});


// Populate server with fake videos and gives them to random users
fake_video_array.forEach(function(fake_video){

    videos.post_new_video(fake_video.username,fake_video.url,fake_video.length,fake_video.title,fake_video.view_count,
                          fake_video.shares_needed,fake_video.likes,fake_video.favorites,fake_video.flagged,fake_video.category,
                          fake_video.promoted,fake_video.thumbnail, function() {
        console.log('Added video: '+fake_video.title); 
    });    
});