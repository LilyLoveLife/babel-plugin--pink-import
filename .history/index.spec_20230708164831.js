
import pinkPlugin from './index.js'

const MODULE = 'pink-ui'

it('import语句转换正确', () => {

    var input = `
        import {Button} from ${MODULE}
    `
    const {ast} = babel.transform(input, {plugins: [pinkPlugin]})
    
    // const program = ast.program
    // const declaration = program.body[0].declarations[0]
    console.log()
    assert.equal(declaration.id.name, 'guang');// 判断 AST 节点的值
})