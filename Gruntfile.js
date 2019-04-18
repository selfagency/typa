module.exports = grunt => {
  require('jit-grunt')(grunt)

  const commitMsg = grunt.option('msg') || '...'

  grunt.initConfig({
    exec: {
      lint: './node_modules/.bin/eslint src/typa.js',
      test: 'npm test',
      coverage: 'npm run test-with-coverage',
      commit: `git add .; git commit -m "${commitMsg}"; git push;`,
      bump: 'bump patch',
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
  grunt.task.registerTask('deploy', ['exec:lint', 'exec:coverage', 'node-minify', 'exec:commit', 'exec:bump', 'exec:push'])
}
