var users = require('./models/users');
var videos = require('./models/videos');
var history = require('./models/history');

var alice = {username:'alice', password:'password', first_name:'Alice', last_name:'Test', email:'alice@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'alice.js'};
var bob = {username:'bob', password:'password', first_name:'Bob', last_name:'Test', email:'bob@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'bob.js'};
var calvin = {username:'calvin', password:'password', first_name:'Calvin', last_name:'Test', email:'calvin@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'calvin.js'};
var daniel = {username:'daniel', password:'password', first_name:'Daniel', last_name:'Test', email:'daniel@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'daniel.js'};
var edward = {username:'edward', password:'password', first_name:'Edward', last_name:'Test', email:'edward@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'edward.js'};
var frank = {username:'frank', password:'password', first_name:'Frank', last_name:'Test', email:'frank@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'frank.js'};
var george = {username:'george', password:'password', first_name:'George', last_name:'Test', email:'george@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'george.js'};
var howie = {username:'howie', password:'p', first_name:'Howie', last_name:'Test', email:'howie@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'howie.js'};
var ingrid = {username:'ingrid', password:'password', first_name:'Ingrid', last_name:'Test', email:'ingrid@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'ingrid.js'};
var janice = {username:'janice', password:'password', first_name:'Janice', last_name:'Test', email:'janice@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'janice.js'};
var kevin = {username:'kevin', password:'password', first_name:'Kevin', last_name:'Test', email:'kevin@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'kevin.js'};
var leanne = {username:'leanne', password:'password', first_name:'Leanne', last_name:'Test', email:'leanne@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'leanne.js'};
var michael = {username:'michael', password:'password', first_name:'Michael', last_name:'Test', email:'michael@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'michael.js'};
var nick = {username:'nick', password:'password', first_name:'Nick', last_name:'Test', email:'nick@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'nick.js'};
var oscar = {username:'oscar', password:'password', first_name:'Oscar', last_name:'Test', email:'oscar@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'oscar.js'};
var pat = {username:'pat', password:'password', first_name:'Pat', last_name:'Test', email:'pat@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'pat.js'};
var questlove = {username:'questlove', password:'password', first_name:'Questlove', last_name:'Thompson', email:'questlove@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'questlove.js'};
var randy = {username:'randy', password:'password', first_name:'Randy', last_name:'Test', email:'randy@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'randy.js'};
var sandy = {username:'sandy', password:'password', first_name:'Sandy', last_name:'Test', email:'sandy@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'sandy.js'};
var tim = {username:'tim', password:'password', first_name:'Tim', last_name:'Test', email:'tim@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'tim.js'};
var ulga = {username:'ulga', password:'password', first_name:'Ulga', last_name:'Test', email:'ulga@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'ulga.js'};
var veronica = {username:'veronica', password:'password', first_name:'Veronica', last_name:'Test', email:'veronica@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'veronica.js'};
var will = {username:'will', password:'password', first_name:'Will', last_name:'Test', email:'will@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'willS.js'};
var xenon = {username:'xenon', password:'password', first_name:'Xenon', last_name:'Test', email:'xenon@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'xenon.js'};
var yasmina = {username:'yasmina', password:'password', first_name:'Yasmina', last_name:'Test', email:'yasmina@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'yasmina.js'};
var zed = {username:'zed', password:'password', first_name:'Zed', last_name:'Test', email:'zed@gmail.com', promoted_video_url:'promoted_video_url', picture:'picture',bio:'zed.js'};

var fake_users = [alice,bob,calvin,daniel,edward,frank,george,howie,ingrid,janice,kevin,leanne,michael,nick,oscar,pat,questlove,randy,sandy,tim,ulga,veronica,will,xenon,yasmina,zed];


var iht = {username:alice.username,url:"//www.youtube.com/embed/CMNry4PE93Y",length:18,title:'I like turtles',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'comedy',promoted:true,thumbnail:''};
var numa = {username:calvin.username,url:"//www.youtube.com/embed/60og9gwKh1o",length:98,title:'Numa!',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'music',promoted:true,thumbnail:''};
var starwars_kid = {username:bob.username,url:"//www.youtube.com/embed/HPPj6viIBmU",length:139,title:'Star wars kid',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'sports',promoted:false,thumbnail:''};
var c_rain = {username:daniel.username,url:"//www.youtube.com/embed/EwTZ2xpQwpA",length:292,title:'Chocolate Rain',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'music',promoted:true,thumbnail:''};
var evolution_dance = {username:edward.username,url:"//www.youtube.com/embed/dMH0bHeiRNg",length:360,title:'Evolution of Dance',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'educational',promoted:true,thumbnail:''};
var dinner_talk = {username:frank.username,url:"//www.youtube.com/embed/NTAhwUWWYoY",length:125,title:'Awkward Dinner Talk',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'comedy',promoted:true,thumbnail:''};
var coffvtea = {username:george.username,url:"//www.youtube.com/embed/fVfXDDBtZAk",length:27,title:'Coffee Vs. Tea',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'comedy',promoted:true,thumbnail:''};
            
            
            
            
            
            
var fake_video_array =[iht,numa,starwars_kid,c_rain,evolution_dance,dinner_talk,coffvtea];


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


// Populate history with fake stuff
var hist1 = {username:'howie', video_owner:'alice', timestamp:'tuesday', url:"//www.youtube.com/embed/CMNry4PE93Y"};

var fake_history = [hist1];

fake_history.forEach(function(fake_history_item) {
   history.add_item(fake_history_item.username, fake_history_item.video_owner, fake_history_item.timestamp, fake_history_item.url, function() {
        console.log('Added history: '+fake_history_item.url);
   });
});