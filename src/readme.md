
### Installation guide for nodeJS build version:  LTS **18.14.2**

Windows:
```
https://nodejs.org/en/download/
```

Debian Linux:
```
sudo apt install npm
```



### NodeJS HTTP-Server:

Windows/Linux:
```
npm i http-server
```



### A-Frame and components installation:

CDN minified version:
```
 <script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
```

A-frame CDN look-at-component:
```
<script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
```

NPM install aframe:
```
npm install aframe
```

Edit index.html
```
require('aframe');
``` 

NPM install look-at-component:
```
npm i aframe-look-at-component
```

Edit index.html:
```
require('aframe-look-at-component');
```

### Certificate generation for localhost VR viewing

```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365
```



### Start HTTP-SERVER

```
http-server --ssl key.pem
```
