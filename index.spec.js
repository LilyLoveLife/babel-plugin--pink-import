
import * as babel from "babel-core";
import assert from 'node:assert'

import pinkPlugin, {DefaultOptions}  from './index.js'

const MODULE = 'antd'
const jsDir = '/dist/lib'
const cssName = 'style.css'

it('import语句转换正确', () => {
    var input = `import {Button} from '${MODULE}'`
    const {code} = babel.transform(input, {plugins: [[pinkPlugin, {[MODULE]: {
        jsDir,
        cssName
    }}]]})
    assert.equal(code, `import Button from '${MODULE || DefaultOptions.defaultModuleName}${jsDir}/Button/index.cjs';
import '${MODULE || DefaultOptions.defaultModuleName}${DefaultOptions.defaultCssDir}/Button/${cssName}';`);
})