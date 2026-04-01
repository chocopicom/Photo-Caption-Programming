## 03. SNACK

![SNACK](image.png)

```kotlin
for (power in 0..100 step 10) {
	when(power) {
		in 0..84 -> continue
		85 -> return true
		in 86..100 -> throw Exception("Explode")
	}
}
```
