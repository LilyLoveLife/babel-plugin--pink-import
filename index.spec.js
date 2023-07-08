
import * as babel from "babel-core";
import assert from 'node:assert'

import pinkPlugin from './index.js'

const MODULE = 'pink-ui'

it('import语句转换正确', () => {

    var input = `
        import {Button} from '${MODULE}'
    `
    const {code} = babel.transform(input, {plugins: [pinkPlugin]})
    assert.equal(code, `import Button from '${MODULE}/Button/index.cjs';
import '${MODULE}/Button/index.css';`);
})