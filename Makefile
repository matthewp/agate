# Set the source directory
srcdir = src/

builddir = build/

# Create the list of modules
js = ${srcdir}button.js\
     ${srcdir}toolbar.js\
     ${srcdir}agate.js\

css = ${srcdir}css/agate.css\
      ${srcdir}css/button.css\
      ${srcdir}css/toolbar.css\

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
	cat > ${builddir}$@ $^
