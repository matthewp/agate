# Set the source directory
srcdir = src/

builddir = build/

tmpless = /tmp/agate.less

# Create the list of modules
js = ${srcdir}utils.js\
     ${srcdir}button.js\
     ${srcdir}radio_button.js\
     ${srcdir}radio_group.js\
     ${srcdir}toggle_button.js\
     ${srcdir}checkbox.js\
     ${srcdir}groupbox.js\
     ${srcdir}toolbar.js\
     ${srcdir}agate.js\

css = ${srcdir}style/gradient.less\
      ${srcdir}style/agate.css\
      ${srcdir}style/button.less\
      ${srcdir}style/radio_button.less\
      ${srcdir}style/toggle_button.less\
      ${srcdir}style/toolbar.less\
      ${srcdir}style/img/checkbox_img.css\
      ${srcdir}style/checkbox.css\
      ${srcdir}style/groupbox.less\

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
