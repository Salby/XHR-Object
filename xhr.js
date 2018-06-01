/*
MIT License

Copyright (c) 2018 Sander Larsen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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
