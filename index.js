
export const DefaultOptions = {
    defaultModuleName: 'pink-flower-ui',
    defaultJsDir: '/dist/es',
    defaultCssDir: '/dist/es',
    defaultJsName: 'index.cjs',
    defaultCssName: 'index.css'
}
export default function({types: t }) {
    return {
        pre(state) {
            // 前置操作，可选，可以用于准备一些资源
        },
        visitor: {
            ImportDeclaration(path, state) {
                const opts = state.opts // 使用时插件时，传入的参数
                const moduleList = Object.keys(opts || {}) || []

                 if (![...moduleList, DefaultOptions.defaultModuleName].includes(path.node.source.value)) {
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
                
                

                const imports  = []
                for (const spec of specs) {
                    const moduleName = path.node.source.value
                    const optObj = opts[moduleName]
                    console.log('---opts---', opts)
                    const named = '/' + spec.imported.name // 组件名： 如Button
                    const local = spec.local
                    
                    const jsDir  = optObj?.jsDir || DefaultOptions.defaultJsDir
                    const jsName = optObj?.jsName || DefaultOptions.defaultJsName
                    // js文件完整路径，如'pink-ui/dist/es/Button/index.cjs
                    const jsFilePath = `${moduleName}${jsDir}${named}/${jsName}`

                    const cssDir = optObj?.cssDir || DefaultOptions.defaultCssDir
                    const cssName = optObj?.cssName || DefaultOptions.defaultCssName
                    // css文件完整路径，如'pink-ui/dist/es/Button/index.css
                    const cssFilePath = `${moduleName}${cssDir}${named}/${cssName}`

                    imports.push(t.importDeclaration([t.importDefaultSpecifier(local)], t.stringLiteral(jsFilePath)))
                    imports.push(t.importDeclaration([], t.stringLiteral(cssFilePath)))
                }
                path.replaceWithMultiple(imports)
            }
        },
        post(state) {
            // 后置操作，可选
        }
    }
}