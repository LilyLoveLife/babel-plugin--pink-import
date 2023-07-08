export default function({types: t }) {
    return {
        pre(state) {
            // 前置操作，可选，可以用于准备一些资源
        },
        visitor: {

        },
        post(state) {
            // 后置操作，可选
        }
    }
}