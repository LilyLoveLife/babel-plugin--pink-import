const MODULE = 'pink-ui'
export default function({types: t }) {
    return {
        pre(state) {
            // 前置操作，可选，可以用于准备一些资源
        },
        visitor: {
            ImportDeclaration(path, state) {
                if (path.node.source.value !== MODULE) {
                    return
                }
                const specs = path.node.specifiers
                if (specs.length === 0) {
                    path.remove()
                    return
                }
                if (specs.some( each => t.isImportDefaultSpecifier(each))) {
                    throw path.buildCodeFrameError("不能使用默认导入")
                }
                // console.log('specs: ', specs)
                const imports  = []
                for (const spec of specs) {
                    const named = MODULE + '/' + spec.imported.name
                    const local = spec.local
                    imports.push(t.importDeclaration([t.importDefaultSpecifier(local)], t.stringLiteral(`${named}/index`)))
                    imports.push(t.importDeclaration([], t.stringLiteral(`${named}/index.css`)))
                }
                path.replaceWithMultiple(imports)
            }
        },
        post(state) {
            // 后置操作，可选
        }
    }
}