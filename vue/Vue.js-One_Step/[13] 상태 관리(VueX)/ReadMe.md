# 상태 관리 (VueX)
웹 개발에 사용하면서 수많은 값을 효율적으로 관리하는 방법을 상태관리라고 합니다.

Vue.js 프로그램에서 상태를 관리하는 대표적인 상태 관리 라이브러리는 VueX입니다.

## VueX를 사용하는 이유
---
<br />
&nbsp  <b>V</b>Ue 인스턴스로 관리한다면 개별의 상태 값을 선언하고 사용해야 합니다.
Vue 인스턴스의 상태 값을 수정하면 바인딩된 엘리먼트의 값도 변경됩니다. <- 인스턴스의 상태값을 직접 변경하면 <b>변경 이력이 남지 않습니다</b>.
<br/>
<br/>
특정 상태를 공유하는 Vue 인스턴스가 여러개면  상태 값이 변경될 때마다 상태 값이 선언된 모든 인스턴스의 특정 상태에 수정된 값을 반영해야 합니다.
<br/>
<br/>
이러한 문제를 해결하기 위해서 Vue 객체의 data 옵션값으로 별도의 객체를 제공하는 방법이 있습니다.
하지만 데이터 옵션 객체의 상태 값만 유지될 뿐 computed속성은 추가할 수 없습니다. 이런 이유때문에 VueX를 사용합니다.
<br/>
<br/>
<details>
<summary>VueX는 이걸 보고 영감을 받아 만들었습니다.</summary>
<div markdown="1">

VueX는 Flux 아키텍처와 Elm 아키텍처에서 영감을 받아 만들었습니다.

- Flux 아키텍처
    ![](https://haruair.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)

- Elm 아키텍처
![](https://staltz.com/img/mvi-unidir-ui-arch.jpg)

</div>
</details>

VueX를 사용하는 이유입니다.

- <b>✅중앙 집중화된 상태 정보 관리가 필요하다.</b>

- 상태 정보가 변경되는 상황과 시간을 추적하고 싶다.

- 컴포넌트에서 상태 정보를 안전하게 접근하고 싶다.


# VueX의 구조
![](https://camo.githubusercontent.com/97ebfbd71308fd8d34a911565411fde83337f296/68747470733a2f2f6a6f73687561313938382e6769746875622e696f2f696d616765732f706f7374732f7765622f7675656a732f767565782d312f767565782d6469616772616d2e706e67)


VueX는 Actions, Mutations, State가 있습니다. 

- State : Vuex가 관리하는 상태 값을 담은 자바스크립트 객체

- Action : Vue 인스턴스가 호출하는 메서드

- Mutations : VueX의 상태 값이 안전하게 반영되도록 내부에서 호출하는 것
