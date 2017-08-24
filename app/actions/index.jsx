/*
 * @author tanjizhen 2016-12-10
 * @version 1.0.0
 * action 类型
 */
import fetch from 'isomorphic-fetch'
import Alert from 'antd';
export const MYSTR='My_Str'
export const MYNum='My_Num'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
/*
 * action 创建函数
 * @method  addTodo添加新事项
 * @param  {String} text 添加事项的内容
 */
// export const setStr = (str) => {

//     return (dispatch, getState) => {
//        alert(44)
//         return {
//         type: MYSTR,
//         str,
//     };
//     };
// };
export function fetchPosts(subreddit,parma) {

  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。

  return function (dispatch) {
    // 首次 dispatch：更新应用的 state 来通知
    // API 请求发起了。

    // dispatch(requestPosts(subreddit))

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。

    // 这个案例中，我们返回一个等待处理的 promise。
    // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
      
    return fetch(`http://192.168.1.95:8066${subreddit}`,
    {
        method:'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify(parma)
    }
    )
    .then(res => {return res.json()})
    .then(json =>  dispatch(receivePosts(subreddit, json)))
    .catch(error=>alert(211));
  }
}
export function receivePosts(subreddit, json) {
   
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json,
    receivedAt: Date.now()
  }
}
export function setStr(str) {

    return {
        type: MYSTR,
        str,
    };
}
// export function setNum(str) {

//     return {
//         type: MYNum,
//         str,
//     };
// }

