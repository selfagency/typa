module.exports = grunt => {
  require('jit-grunt')(grunt)

  grunt.initConfig({
    'node-minify': {
      gcc: {
        files: {
          'dist/typa.min.js': ['src/typa.js']
        }
      }
    }
  })
  
  grunt.task.registerTask('default', ['node-minify'])
}
