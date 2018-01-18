console.log('api script included');

function Api_smartresponder(api_key, api_id){
	var config = {
		api_key: api_key,
		api_id: api_id,
		format: 'json',
		action: 'create'
	};

	this.addSubscriber = function(data){
		var baseUrl = 'http://api.smartresponder.ru/subscribers.html?';
		console.log(data);

		var requestUrl = baseUrl+
			'api_id='+config.api_id+'&'+
			'api_key='+config.api_key+'&'+
			'format='+config.format+'&'+
			'action='+config.action+'';

		$.ajax({
			type:'POST',
			url:requestUrl,
			dataType: 'jsonp',
			crossDomain: true,
			data:data
		});

	};
};
