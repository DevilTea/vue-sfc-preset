module.exports = (api, options, rootOptions) => {
  let pkgName = rootOptions.projectName
  let comName = ''
  pkgName.split('-').forEach(word => {
    comName += word[0].toUpperCase() + word.slice(1, word.length)
  })

  options['packageName'] = pkgName
  options['componentName'] = comName
  options['repositoryUrl'] = 'https://github.com/' + options.authorName + '/' + options.packageName + '.git'

  api.extendPackage({
    name: pkgName,
    description: options.description,
    author: {
      name: options.authorName,
      email: options.authorEmail,
      url: 'https://github.com/' + options.authorName
    },
    repository: {
      'type': 'git',
      'url': options.repositoryUrl
    },
    private: false,
    main: 'src/components/' + pkgName + 'dist/' + pkgName + '.umd.js',
    module: 'src/components/' + pkgName + 'dist/' + pkgName + '.esm.js',
    unpkg: 'src/components/' + pkgName + 'dist/' + pkgName + '.min.js',
    browser: {
      './sfc': 'src/components/' + pkgName + '/' + pkgName + '.vue'
    },
    scripts: {
      'build:component': 'yarn build:umd & yarn build:es & yarn build:unpkg',
      'build:umd': 'rollup --config src/components/' + pkgName + '/build/rollup.config.js --format umd --file src/components/' + pkgName + '/dist/' + pkgName + '.umd.js',
      'build:es': 'rollup --config src/components/' + pkgName + '/build/rollup.config.js --format es --file src/components/' + pkgName + '/dist/' + pkgName + '.esm.js',
      'build:unpkg': 'rollup --config src/components/' + pkgName + '/build/rollup.config.js --format iife --file src/components/' + pkgName + '/dist/' + pkgName + '.min.js'
    },
    devDependencies: {
      'rollup': '^0.57.1',
      'rollup-plugin-buble': '^0.19.2',
      'rollup-plugin-vue': '^3.0.0'
    }
  })

  let toBeRendered = {}
  toBeRendered['./src/components/' + pkgName + '/build/rollup.config.js'] = './template/src/components/component-template/build/rollup.config.js'
  toBeRendered['./src/components/' + pkgName + '/build/wrapper.js'] = './template/src/components/component-template/build/wrapper.js'
  toBeRendered['./src/components/' + pkgName + '/' + pkgName + '.vue'] = './template/src/components/component-template/component-template.vue'
  toBeRendered['./src/components/' + pkgName + '/README.md'] = './template/src/components/component-template/README.md'

  api.render(toBeRendered)
}
