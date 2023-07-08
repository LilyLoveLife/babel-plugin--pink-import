
import * as babel from "babel-core";
import assert from 'node:assert'

import pinkPlugin from './index.js'

const MODULE = 'pink-ui'

it('import语句转换正确', () => {

    var input = `
        import {Button} from '${MODULE}'
    `
    const {code} = babel.transform(input, {plugins: [pinkPlugin]})
    console.log('result: ', code)
    assert.equal(code, `import {Button} from '${MODULE}/Button/index';
import {Button} from '${MODULE}/Button/index.css;
    `);// 判断 AST 节点的值
})