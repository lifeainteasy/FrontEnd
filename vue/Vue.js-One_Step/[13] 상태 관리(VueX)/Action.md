# Action
> 저장소 객체에서 상태 값으로 특정 작업을 실행하는 로직이 있는 함수를 선언합니다. (함수 안에는 Mutations 메서드 호출을 포함합니다.)

```
    const store = new Vuex.Store({
        ...
        actions:{
            increment(context){
                Event...
            }
        }
    })
```
## context의 인자
---
- state : 저장소의 로컬 상태
- commit : 저장소 객체의 dispatch 메서드
- getters : 저장소의 getters 객체
- rootState : 최상위 모듈의 state 옵션 객체로 모든 모듈의 state를 포함
- rootGetters: 최상위 모듈의 getters 옵션을 객체로 모든 모듈의 getters를 포함
