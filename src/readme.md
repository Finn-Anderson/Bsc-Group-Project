
### Installation guide for nodeJS build version: LTS **18.14.2**

[Windows](https://nodejs.org/en/download/) / Debian Linux:
```
sudo apt install nodejs
```


### NodeJS HTTP-Server:

Windows / Linux:
```
npm i http-server
```

Launching http-server:
```
http-server
```


### A-Frame and components installation:
A-frame can be added through client side JavaScript or Node Package Manager (NPM) as a module.

CDN minified version:
```
 <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
```

A-frame look-at-component:
```
<script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
```

NPM install aframe:
```
npm install aframe
```

Adding the aframe module:
```
require('aframe');
```

NPM install look-at-component:
```
npm i aframe-look-at-component
```

Adding the look-at module:
```
require('aframe-look-at-component');
```

NPM install [express](http://expressjs.com/en/starter/installing.html)
```
npm install express
```

NPM Install MySQL server :
```
npm install mysql
```


### Certificate generation for localhost VR viewing
To view the tour in virtual reality mode we have to create a SSL certificate.

[Windows](https://github.com/openssl/openssl/blob/master/NOTES-WINDOWS.md) / Linux installation:
```
sudo apt install openssl
```

Generate certificate:
```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365
```


### Launching VR Tour

Enter the directory "src" and launch the HTTP server using the following command:
```
http-server --ssl cert.pem
```

The previous command will output the viewing URL:
```
C:\team project\src>http-server
Starting up http-server, serving ./

http-server version: 14.1.1

http-server settings:
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://192.168.0.4:8080
  http://192.168.56.1:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```


### Maintenance

A-frame will become deprecated over time so to maintain the most stable version you can get the latest framework copy of it from [here](https://github.com/aframevr/aframe/releases), this will keep you up-to-date with bug fixes and new features.

NPM install look-at-component:
```
npm i aframe-look-at-component
```
