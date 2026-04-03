## 04. ELEVATOR

![ELEVATOR](image.png)

```javascript
setTimeout(() => {
	while(true) {
		document.querySelector('button').click();
	}
}, 5000);

document.querySelector('button').click();
await new Promise(openDoor => setTimeout(openDoor, 120000));
```
