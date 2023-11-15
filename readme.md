# Run in ES6 module mode (no compile)
  
```
bun server.js
```

# Comibe DEV Build with Watch:
  
```
bun build ./src/index.js --outdir ./build --watch

bun prod.js
```

# Minify Build:

```
bun build ./src/index.js --outdir ./build --minify --sourcemap=external

bun prod.js
```