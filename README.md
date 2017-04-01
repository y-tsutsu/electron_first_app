# Electron first app

Electron sample app

# Install Electron

```
> npm install electron-prebuilt -g
> npm install electron-packager -g
```

# Install TypeScript

```
> npm install typescript --save-dev
> .\node_modules\.bin\tsc.cmd --init
> npm install @types/electron --save
> npm install @types/node --save
```

# tasks.json

```
{
    "version": "0.1.0",
    "command": "node_modules\\.bin\\tsc",
    "isShellCommand": true,
    "args": ["-p", "."],
    "showOutput": "silent",
    "problemMatcher": "$tsc"
}
```

# package.json

```
{
  :
  "scripts": {
    "build": "tsc",
    "prestart": "npm run build",
    "start": "electron ."
  },
  :
}
```

# Run

```
> npm run build    # build
> npm start        # build ＆ run
```
