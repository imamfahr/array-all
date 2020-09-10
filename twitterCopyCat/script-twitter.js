let tweet = [];
let tweetContainer = document.getElementById('timeLine');


function myFunc (){
    tweet.push(document.getElementById('tweetInput').value);
    
        // document.getElementById('timeLine').appendChild(tweet[i])
        let newTweet = document.createElement('div');
        newTweet.innerHTML=tweet[tweet.length-1];
        console.log(newTweet)
        console.log(tweetContainer)
        tweetContainer.appendChild(newTweet)
    
    console.log(tweet)
}


console.log(tweet)