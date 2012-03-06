# Set the source directory
srcdir = src/

builddir = build/

tmpless = /tmp/agate.less

# Create the list of modules
js = ${srcdir}button.js\
     ${srcdir}radio_button.js\
     ${srcdir}toolbar.js\
     ${srcdir}agate.js\

css = ${srcdir}style/agate.css\
      ${srcdir}style/button.css\
      ${srcdir}style/radio_button.css\
      ${srcdir}style/toolbar.css\

all: agate.js agate.min.js agate.css
		              
# Compress all of the modules into agate.js
agate.js: ${js}
	echo "/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */" > ${builddir}$@
	echo ${\n} >> ${builddir}$@
	echo "(function() {" >> ${builddir}$@
	echo "'use strict';" >> ${builddir}$@
	cat >> ${builddir}$@ $^
	echo "}).call(this);" >> ${builddir}$@

agate.min.js:
	uglifyjs -nc -o ${builddir}$@ ${builddir}agate.js

agate.css: ${css}
	cat > ${tmpless} $^
	lessc ${tmpless} > ${builddir}$@
