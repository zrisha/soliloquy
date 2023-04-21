mkdir -p build/embed
cat src/imports.module.css `find build/static/css -name '[[:digit:]]*.css'` <(echo) `find build/static/css -name 'main*.css'` > build/embed/soliloquy.css

cat `find build/static/js -name 'runtime*.js'` <(echo) `find build/static/js -name '[[:digit:]]*.js'` <(echo) `find build/static/js -name 'main*.js'` > build/embed/soliloquy.js