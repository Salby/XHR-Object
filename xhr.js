var xhr = {

  /**
   * Sends data via GET
   * 
   * @param {url} first Url you want to send to, including data
   * @param {success} second Lets you work with the response in a function
   * @returns {request}
   */
  get: function(url, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState > 3 && xhr.status === 200) success(xhr.responseText);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
  },

  /**
   * Sends data via POST
   * 
   * @param {url} first Url you wish to send data to
   * @param {data} second Data you wish to send. Takes a string or an object
   * @param {success} third Lets you work with the response in a function
   * @returns {request}
   */
  post: function(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
      function(k) { return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
    ).join('&');
    var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    request.open('POST', url);
    request.onreadystatechange = function() {
      if (request.readyState > 3 && request.status === 200) success(request.responseText);
    };
    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(params);
    return request;
  }
};