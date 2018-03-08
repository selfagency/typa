module.exports = grunt => {
  require('jit-grunt')(grunt)

  const bumpType = grunt.option('bump') || 'patch'
  const commitMsg = grunt.option('msg') || '...'
  
  grunt.initConfig({
    exec: {
     lint: './node_modules/.bin/eslint src/typa.js',
     test: 'npm test',
     commit: `git add .; git commit -m "${commitMsg}"; git push;`,
     bump: `echo "YES\n" | bump -c -p ${bumpType}`,
     push: 'npm publish'
    },
    
    'node-minify': {
      gcc: {
        options: {
          generateExports: true
        },
        files: {
          'dist/typa.min.js': ['src/typa.js']
        }
      }
    }
  })
  
  grunt.task.registerTask('default', ['exec:lint', 'exec:test', 'node-minify'])
  grunt.task.registerTask('deploy', ['default', 'exec:commit', 'exec:bump', 'exec:push'])
}
