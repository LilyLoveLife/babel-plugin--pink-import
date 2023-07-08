/*
 * @Author: Lily lily.song@hrtps.com
 * @Date: 2023-07-08 11:58:50
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-07-08 11:59:26
 * @FilePath: /theseus-cooperation/Users/hrtps/Documents/Projects/babel-plugin-pink-import/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function({types: t }) {
    return {
        pre(state) {
            // 前置操作，可选，可以用于准备一些资源
          },
        visitor: {
        }
        };
        post(state) {
            // 后置操作，可选
        }
}