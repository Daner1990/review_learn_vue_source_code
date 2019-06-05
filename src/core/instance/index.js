import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

  // 可算找到你了呢！！Vue的入口！！！ 
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }

  // init从哪里来 一定是原型链上的定义的
  this._init(options)
}

// 初始化
// initLifecycle(vm)
// // 事件
// initEvents(vm)
// // 渲染
// initRender(vm)
// // 生命周期钩子
// callHook(vm, 'beforeCreate')
// initInjections(vm) // resolve injections before data/props
// initState(vm)
// initProvide(vm) // resolve provide after data/props
// // 生命周期钩子
// callHook(vm, 'created')
// if (vm.$options.el) {
//   // $mount 负责挂载
//   vm.$mount(vm.$options.el)
// }
initMixin(Vue)


// 初始化state
// Object.defineProperty(Vue.prototype, '$data', dataDef)
// Object.defineProperty(Vue.prototype, '$props', propsDef)
// Vue.prototype.$set = set
// Vue.prototype.$delete = del

// Vue.prototype.$watch = function (
stateMixin(Vue)

//$on 
//$emit 
//$off 
//$once
// $emit 触发当前组件vm的事件 ，之所以可以使用$emit通知父元素传递的事件，是相当于传递参数
// 和class bus没有本质区别
// 事件
eventsMixin(Vue)


// 生命周期
//_update !!!!!
// $forceUpdate 
// $destroy 
lifecycleMixin(Vue)


// 渲染
//$nextTick
//_render  !!!!!
renderMixin(Vue)

export default Vue
