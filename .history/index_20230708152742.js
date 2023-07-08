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
            }
        },
        post(state) {
            // 后置操作，可选
        }
    }
}