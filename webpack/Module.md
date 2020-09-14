# Module의 정의
---
- 프로그램을 구성하는 내부의 코드가 기능별로 나뉘어져 있는 형태


# 모듈 시스템
- 모듈을 사용하기 위해서는 모듈을 인식하는 모듈시스템과 모듈을 다르는 **키워드**가 제공되어야 한다.

# 모듈의 표준
- CommonJS(Node.js)
- ESM(SCMAScript 2015~)

# Module을 다루는 키워드
- 내보내기
    - 내보낸 값을 한 곳으로 내보내기
    - 내보낸 값을 개별적으로 내보내기
    - moudle.exports으로 내보낸다.
    ```
        module.exports = {...}
        module.exports.키_이름 = 값
        module.exports = 값
        exports.키_이름 = 값
    ```

- 가져오기
    - 모듈도 하나의 객체로 되어 있다.
    - 모듈 객체를 참조하는 형태 
    - CommonJS에서는 require을 사용해서 가져온다.
