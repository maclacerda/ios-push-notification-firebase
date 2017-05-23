var FCM = require('fcm-node')
    
var serverKey = require('{path_to_private_key}.json') //put the generated private key path here    
    
var fcm = new FCM(serverKey)

var message = {
	to: 'your firebase device token', 
        
    notification: {
		title: 'Title of your push notification', 
		body: 'Body of your push notification' 
	},
        
	data: {
		my_key: 'my value',
		my_another_key: 'my another value'
	}
}
    
fcm.send(message, function(err, response){
	if (err) {
		console.log(err);
	} else {
		console.log("Successfully sent with response: ", response)
	}
})