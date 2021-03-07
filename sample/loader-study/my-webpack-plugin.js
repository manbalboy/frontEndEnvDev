class MyWebpackPlugin {
    apply(compiler) {
        compiler.plugin('emit', (compilation, callback) => {
          const source = compilation.assets['main.js'].source();
          compilation.assets['main.js'].source = () => {
            const banner = [
              '/**',
              ' * 이것은 BannerPlugin이 처리한 결과입니다.',
              ' * Build Date: 2021-03-07',
              ' */'
            ].join('\n');
            return banner + '\n' + source;
          }
    
          callback();
        })
      }
}
module.exports = MyWebpackPlugin;