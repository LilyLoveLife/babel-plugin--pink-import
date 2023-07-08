
import pinkPlugin from './index.js'


it('包含guang', () => {
    const {ast} = babel.transform(input, {plugins: [plugin]});
    
    const program = ast.program;
    const declaration = program.body[0].declarations[0];
    
    assert.equal(declaration.id.name, 'guang');// 判断 AST 节点的值
});