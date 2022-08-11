 import { Button } from '../packages/button'
 import { topNavigator } from '../packages/menu'
 import { Table } from '../packages/table'
 import { pagination } from '../packages/pagination'
 import {
   input,
   select,
   checkbox,
   radio,
   datetimePicker,
   switchs,
   radioCascader,
   forms
 } from '../packages/form'
 import { row, col } from '../packages/layout'
 import { tree } from '../packages/tree'
 import { Report } from '../packages/report'
 const components = [
   Button,
   topNavigator,
   Table,
   tree,
   pagination,
   input,
   select,
   checkbox,
   radio,
   switchs,
   radioCascader,
   datetimePicker,
   forms,
   row,
   col,
   Report
 ]
 
 const install = Vue => {
   components.map(item => {
     Vue.component(item.name, item)
   })
 }
 
 if (typeof window !== 'undefined' && window.Vue) {
   install(window.Vue)
 }
 
 export const ctButton = {
   install(Vue) {
     Vue.component(Button.name, Button)
   }
 }
 export const ctInput = {
    install(Vue) {
        Vue.component(input.name, input)
      }
 }
 export const ctCheckbox = {
    install(Vue) {
        Vue.component(checkbox.name, checkbox)
      }
 }
 export const ctRadio = {
    install(Vue) {
        Vue.component(radio.name, radio)
      }
 }
 export const ctNav = {
    install(Vue) {
        Vue.component(topNavigator.name, topNavigator)
      }
 }
 export const ctTable = {
    install(Vue) {
        Vue.component(Table.name, Table)
      }
 }
 export const ctPagination = {
    install(Vue) {
        Vue.component(pagination.name, pagination)
      }
 }
 export const ctDate = {
    install(Vue) {
        Vue.component(datetimePicker.name, datetimePicker)
      }
 }
 export const ctSwitchs = {
    install(Vue) {
        Vue.component(switchs.name, switchs)
      }
 }
 export const ctRadioCascader = {
    install(Vue) {
        Vue.component(radioCascader.name, radioCascader)
      }
 }
 export const ctForms = {
    install(Vue) {
        Vue.component(forms.name, forms)
      }
 }
 export const ctRow = {
    install(Vue) {
        Vue.component(row.name, row)
      }
 }
 export const ctCol = {
    install(Vue) {
        Vue.component(col.name, col)
      }
 }
 export const ctTree = {
    install(Vue) {
        Vue.component(tree.name, tree)
      }
 }
 export const ctReport = {
    install(Vue) {
        Vue.component(Report.name, Report)
      }
 }
 export const ctSelect = {
    install(Vue) {
        Vue.component(select.name, select)
      }
 }