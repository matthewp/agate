# Set the source directory
srcdir = src/

builddir = build/

# Create the list of modules
js = ${srcdir}button.js\
     ${srcdir}toolbar.js\
     ${srcdir}agate.js\
		              
# Compress all of the modules into agate.js
agate.js: ${js}
	echo "/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */" > ${builddir}$@
	echo ${\n} >> ${builddir}$@
	echo "(function() {" >> ${builddir}$@
	echo "'use strict';" >> ${builddir}$@
	cat >> ${builddir}$@ $^
	echo "}).call(this);" >> ${builddir}$@

