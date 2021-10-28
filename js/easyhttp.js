// ES5 object oriented lib, we are going to use prototypes instad of class

function easyHTTP() {
    this.http = new XMLHttpRequest();
}



//GET Request
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
    this.http.setRequestHeader('X-APTRINSIC-API-KEY', '1f3046e3-12e1-4c2b-9d2f-335e2cad66e9');
    let self = this.http;
    this.http.onload = function () {
        if (self.status === 200) {

            callback(null, self.responseText);
        } else {
            callback('Error:'+self.status);
        }
    }
    this.http.send();
}

//POST Request
easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('X-APTRINSIC-API-KEY', '1f3046e3-12e1-4c2b-9d2f-335e2cad66e9');
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this.http;
    this.http.onload = function () {
            callback(null, self.responseText);
       
    }
    this.http.send(JSON.stringify(data));
}
//PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('X-APTRINSIC-API-KEY', '1f3046e3-12e1-4c2b-9d2f-335e2cad66e9');
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this.http;
    this.http.onload = function () {
            callback(null, self.responseText);
       
    }
    this.http.send(JSON.stringify(data));
}
//DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);
    this.http.setRequestHeader('X-APTRINSIC-API-KEY', '1f3046e3-12e1-4c2b-9d2f-335e2cad66e9');
    let self = this.http;
    this.http.onload = function () {
        if (self.status === 200) {

            callback(null, 'post deleted'); 
        } else {
            callback('Error:'+self.status);
        }
    }
    this.http.send();
}