/* 
    index.js 파일은 폴더를 import 해서 안에 있는 자원들을
    편리하게 가져가서 사용하도록 한다.

    필요한 곳에 아래와 같이 import 로 사용 가능
    
    import {Home , About , NotFound} from 'index.js' 파일이 존재하는 폴더
*/

export {default as Home} from './Home';
export {default as About} from './About';
export {default as NotFound} from './NotFound';