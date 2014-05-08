var users = require('./models/users');
var videos = require('./models/videos');
var history = require('./models/history');
var inbox = require('./models/messages');

var female = "./statics/female.png";

// adds fake users
var alice = {username:'alice', password:'password', first_name:'Alice', last_name:'Test', email:'alice@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://sowhatfaith.com/wp-content/uploads/2011/03/female-gender-sign.jpg',bio:'alice.js'};
var bob = {username:'bob', password:'password', first_name:'Bob', last_name:'Test', email:'bob@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'bob.js'};
var calvin = {username:'calvin', password:'password', first_name:'Calvin', last_name:'Test', email:'calvin@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'calvin.js'};
var daniel = {username:'daniel', password:'password', first_name:'Daniel', last_name:'Test', email:'daniel@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'daniel.js'};
var edward = {username:'edward', password:'password', first_name:'Edward', last_name:'Test', email:'edward@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'edward.js'};
var frank = {username:'frank', password:'password', first_name:'Frank', last_name:'Test', email:'frank@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'frank.js'};
var george = {username:'george', password:'password', first_name:'George', last_name:'Test', email:'george@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'george.js'};
var howie = {username:'howie', password:'p', first_name:'Howie', last_name:'Test', email:'howie@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'howie.js'};
var ingrid = {username:'ingrid', password:'password', first_name:'Ingrid', last_name:'Test', email:'ingrid@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://sowhatfaith.com/wp-content/uploads/2011/03/female-gender-sign.jpg',bio:'ingrid.js'};
var janice = {username:'janice', password:'password', first_name:'Janice', last_name:'Test', email:'janice@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'janice.js'};
var kevin = {username:'kevin', password:'password', first_name:'Kevin', last_name:'Test', email:'kevin@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'kevin.js'};
var leanne = {username:'leanne', password:'password', first_name:'Leanne', last_name:'Test', email:'leanne@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'leanne.js'};
var michael = {username:'michael', password:'password', first_name:'Michael', last_name:'Test', email:'michael@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'michael.js'};
var nick = {username:'nick', password:'password', first_name:'Nick', last_name:'Test', email:'nick@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'nick.js'};
var oscar = {username:'oscar', password:'password', first_name:'Oscar', last_name:'Test', email:'oscar@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'oscar.js'};
var pat = {username:'pat', password:'password', first_name:'Pat', last_name:'Test', email:'pat@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'pat.js'};
var questlove = {username:'questlove', password:'password', first_name:'Questlove', last_name:'Thompson', email:'questlove@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'questlove.js'};
var randy = {username:'randy', password:'password', first_name:'Randy', last_name:'Test', email:'randy@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'randy.js'};
var sandy = {username:'sandy', password:'password', first_name:'Sandy', last_name:'Test', email:'sandy@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://sowhatfaith.com/wp-content/uploads/2011/03/female-gender-sign.jpg',bio:'sandy.js'};
var tim = {username:'tim', password:'password', first_name:'Tim', last_name:'Test', email:'tim@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'tim.js'};
var ulga = {username:'ulga', password:'password', first_name:'Ulga', last_name:'Test', email:'ulga@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://sowhatfaith.com/wp-content/uploads/2011/03/female-gender-sign.jpg',bio:'ulga.js'};
var veronica = {username:'veronica', password:'password', first_name:'Veronica', last_name:'Test', email:'veronica@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://sowhatfaith.com/wp-content/uploads/2011/03/female-gender-sign.jpg',bio:'veronica.js'};
var will = {username:'will', password:'password', first_name:'Will', last_name:'Test', email:'will@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'willS.js'};
var xenon = {username:'xenon', password:'password', first_name:'Xenon', last_name:'Test', email:'xenon@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://sowhatfaith.com/wp-content/uploads/2011/03/female-gender-sign.jpg',bio:'xenon.js'};
var yasmina = {username:'yasmina', password:'password', first_name:'Yasmina', last_name:'Test', email:'yasmina@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://sowhatfaith.com/wp-content/uploads/2011/03/female-gender-sign.jpg',bio:'yasmina.js'};
var zed = {username:'zed', password:'p', first_name:'Zed', last_name:'Test', email:'zed@gmail.com', promoted_video_url:'promoted_video_url', picture:'http://www.psdgraphics.com/wp-content/uploads/2009/06/male-sign.jpg',bio:'zed.js'};

var fake_users = [alice,bob,calvin,daniel,edward,frank,george,howie,ingrid,janice,kevin,leanne,michael,nick,oscar,pat,questlove,randy,sandy,tim,ulga,veronica,will,xenon,yasmina,zed];

// Populate server with fake users
fake_users.forEach(function(fake_user){
    users.adduser(fake_user.username, fake_user.password, fake_user.first_name, fake_user.last_name, fake_user.email, fake_user.promoted_video_url, fake_user.picture, fake_user.bio, function(success) {
        console.log('User added:'+fake_user.username);
    });
});

// adds fake videos (real)
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
var g_pro = {username:howie.username,url:"//www.youtube.com/embed/wNX9WOuWDSc?list=PLrEnWoR732-B62Psx7Z58pfFHrS9rtxL_",length:27,title:'Moonroof',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'sports',promoted:true,thumbnail:''};
var bases = {username:ingrid.username,url:"//www.youtube.com/embed/qItugh-fFgg",length:27,title:'All Your Bases',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'technology',promoted:true,thumbnail:''};
var fox = {username:janice.username,url:"//www.youtube.com/embed/jofNR_WkoCE",length:27,title:'What Does the Fox Say?',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'music',promoted:true,thumbnail:''};
var jelly = {username:kevin.username,url:"//www.youtube.com/embed/Z3ZAGBL6UBA",length:27,title:'Jelly Time!',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'music',promoted:true,thumbnail:''};
var leeroy = {username:leanne.username,url:"//www.youtube.com/embed/LkCNJRfSZBU",length:27,title:'Leeroy Jenkins!',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'comedy',promoted:true,thumbnail:''};
var taser = {username:michael.username,url:"//www.youtube.com/embed/6bVa6jn4rpE",length:27,title:'Don\'t Tase Me Bro!',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'educational',promoted:true,thumbnail:''};
var cat = {username:nick.username,url:"//www.youtube.com/embed/J---aiyznGQ",length:27,title:'Keyboard Cat!',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'music',promoted:true,thumbnail:''};
var hey = {username:oscar.username,url:"//www.youtube.com/embed/ZZ5LpwO-An4",length:27,title:'Hey!',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'music',promoted:true,thumbnail:''};
var hpvs = {username:pat.username,url:"//www.youtube.com/embed/9N5KyjM5v0c",length:27,title:'HP vs SW!',
            view_count:10,shares_needed:10,likes:10,favorites:10,flagged:10,category:'comedy',promoted:true,thumbnail:''};

var fake_video_array =[iht,numa,starwars_kid,c_rain,evolution_dance,dinner_talk,coffvtea, g_pro, bases, jelly, leeroy, taser, cat, hey, hpvs, fox];


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

// Populate messages with fake stuff

// add fake dates
var date1 = new Date(); date1.setDate(1);
var date2 = new Date(); date2.setDate(2);
var date3 = new Date(); date3.setDate(3);
var date4 = new Date(); date4.setDate(4);

// create fake messages
var aliceTobob = {username:alice.username,recipient:bob.username,subject:'Hi',timestamp:date1,body:"Hi bob, how are you?"};
var bobToalice = {username:bob.username,recipient:alice.username,subject:'Hi',timestamp:date1,body:"Hi alice, iam doing good, thank you"};
var aliceTobob2 = {username:alice.username,recipient:bob.username,subject:'Hi',timestamp:date1,body:"I really like your video!"};
var bobToalice2 = {username:alice.username,recipient:bob.username,subject:'Hi',timestamp:date1,body:"Oh thanks!"};
var zedTobob = {username:zed.username,recipient:bob.username,subject:'video',timestamp:date1,body:"yo bob that video rocks bro!"};
var bobTozed = {username:bob.username,recipient:zed.username,subject:'video',timestamp:date2,body:"Haha thanks man!"};
var zedToalice = {username:zed.username,recipient:alice.username,subject:'bobs video',timestamp:date1,body:"Hey alice did you check out bob's vid?"};
var aliceTozed = {username:alice.username,recipient:zed.username,subject:'bobs video',timestamp:date2,body:"yeah i did its awesome!"};
var aliceTozed2 = {username:alice.username,recipient:zed.username,subject:'bobs video',timestamp:date2,body:"You should also check out calvins video."};
var zedToalice2 = {username:zed.username,recipient:alice.username,subject:'bobs video',timestamp:date3,body:"Sure ill check it out."};
var zedTocalvin = {username:zed.username,recipient:calvin.username,subject:'video',timestamp:date3,body:"Brooooooooo, that video tho!"};
var calvinTozed = {username:calvin.username,recipient:zed.username,subject:'video',timestamp:date4,body:"Huh? What about it?"};


// Array with messages
var message_array =[aliceTobob,bobToalice,aliceTobob2,bobToalice2,zedTobob,bobTozed,zedToalice,aliceTozed,aliceTozed2,zedToalice2,zedTocalvin,calvinTozed];

// loop to add the messages to database
message_array.forEach(function(fake_message) {
   inbox.send_message(fake_message.username, fake_message.recipient, fake_message.subject, fake_message.timestamp,fake_message.body, function() {
        console.log('Added messages: '+fake_message.username+' to '+fake_message.recipient);
   });
});
