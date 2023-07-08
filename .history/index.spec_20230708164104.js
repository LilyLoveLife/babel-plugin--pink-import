
import pinkPlugin from './index.js'


it('import语句转换正确', () => {

    var input = `
    var foo = 'guang';
    // 把baz重命名为foo
    var res = baz;
  `
  
    const {ast} = babel.transform(input, {plugins: [plugin]});
    
    const program = ast.program;
    const declaration = program.body[0].declarations[0];
    
    assert.equal(declaration.id.name, 'guang');// 判断 AST 节点的值
})