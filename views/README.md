# aeorus

### Development

```bash
$ npm i
$ npm run serve
```

### Compiles and minifies for production
```bash
$ npm run build
```

### request API
```
this.$get/$post(url, {
	headers: {},
	data: {},
},
	res => {},
	err => {},
	loadingMessage
);
```
### UI structure API
```
//调用表单组件
this.$showForm({
	input,
	items,
	confirm,
	cancel,
	completed
});

//调用modal组件
this.$showModal({
	title = '提示',
	content = '提示内容',
	showCancel = true,
	confirm,
	cancel,
	completed
});

//调用toast组件显隐
this.$showToast(params, callback);
this.$hideToast();

//调用loading组件显隐
this.$showLoading(content = '加载中');
this.$hideLoading();
```

### other API
```
this.$isEmptyObject(object);			//检测是否为空对象
this.$checkAnimationEnd(vm, event, callback);	//监听CSS3动画是否已结束
```