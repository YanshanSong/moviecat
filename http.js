(function(window,document,undefined){
	var jsonp = function(url,data,callback) {
		// 1.挂载回调函数
		var fnSuffix = Math.random().toString().replace('.','');
		var cbFuncName = "my_json_cb_" + fnSuffix;
		//不推荐(无前缀)
		window[cbFuncName] = callback;
		// 2.将data转换为url字符串的形式
		// 如{id:1,name:'zhangsan'} --> id=1&name=zhangsan
		var querystring = url.indexOf("?")==-1 ? '?' : '&';
		for(var key in data){
			querystring += (key + '=' + data[key] + '&');
		} 
		//querystring = ?id=1&name=zhangsan&

		// 3.处理URL中的回调函数
		querystring += "callback=" + cbFuncName;
		//querystring = ?id=1&name=zhangsan&callback=my_json_cb_021231242

		// 4.创建一个script标签
		var scriptElement = document.createElement('script');
		scriptElement.src = url + querystring;

		// 5.将script标签放到页面中
		document.body.append(scriptElement);
		//qppend过后会自动对这个地址发送请求
	}
	window.$jsonp = jsonp;
})(window,document,undefined);