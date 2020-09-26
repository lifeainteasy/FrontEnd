Getters는 저장소 객체의 상태 값에 근거해 계산된 값

```
    const one_store = new Vuex.store({
        state:{
            todos:[
                {id: 1, text: '논문 쓰기',done:true},
                {id: 2, text: '책 쓰기'; done: false}
            ]
        },
        getters:{
            doneTodos: state=>{
                return state.todos.filter(todo=> todo.done)
            }
        }
    });
```
저장소 객체에 게터를 추가한 코드입니다. 저장소 객체에 게터를 추가하려면 저장소를 생성할 때 getter 옵션에 게터 함수가 선언된 자바스크립트를 객체 옵션값으로 설정하면 됩니다.



getters 속성에 접근해서 사용할 수 있습니다.

```one_store.getters.doneTodos```

```
    var vm = new Vue({
        data: {
            localCount: 2
        },
        store: store,
        computed:{
            ...Vuex.mapGetters(['doneTodosCount'])
        }
    })
```