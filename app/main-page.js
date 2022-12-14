import { createViewModel } from './main-view-model';
import { Observable } from '@nativescript/core';
export function onNavigatingTo(args) {
  const vm = new Observable();
  const page = args.object;
  page.bindingContext = vm;
}
export function onTap(args) {
  const vm = new Observable();
  var name = vm.get('name');
  var pass = vm.get('pass');
  console.log(name);
}
