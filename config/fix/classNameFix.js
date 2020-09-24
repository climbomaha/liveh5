const getPrefix = require('./getPrefix');

module.exports = function(babel) {
  const t = babel.types;

  return {
    name: 'babel-plugin-aims-class-fix',
    visitor: {
      StringLiteral(path, state) {
        if (path.node && path.node.value.includes('$_')) {
          let pJsx = path.findParent(x => x.isJSXAttribute());
          if (pJsx) {
            // 如果在JSX中 则替换
            let prefix = getPrefix(this.filename);
            if(prefix) {
              path.node.value = path.node.value.replace(/\$_/g, prefix);
            }
          }
        } else if(path.node.value.includes('!$_')) {
          let prefix = getPrefix(this.filename);
          if(prefix) {
            path.node.value = path.node.value.replace(/!?\$_/g, prefix);

          }
        }
        
      },
    },
  };
};
