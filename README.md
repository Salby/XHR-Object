# XHR-Object

A minimal XHR object for easily doing XMLHttpRequests

## How-to

### xhr.send

#### POST example

```javascript
const data = {
  id: 1,
  name: 'Rose'
};
const url = 'test.html';

xhr.send('POST', url, data, (res) => {
  console.log(res);
});
```

#### GET example

```javascript
const data = {
  id: 1,
  name: 'Rose'
};
const url = 'test.html';

xhr.send('GET', url, data, (res) => {
  console.log(res);
});
```
