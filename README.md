# my-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Upload to server
rsync -avh --progress --exclude "node_modules" /home/asean/Programming/Projects/personal-website/src/personal-website-front/* sean@web-server:~/var/www/seanervinson.com/personal-website-front/