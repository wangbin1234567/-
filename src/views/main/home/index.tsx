import React from "react"
import "antd/dist/antd.css"
import { Carousel } from 'antd';
// import {useObservable} from "mobx-react-lite"
function Example() { 
    return  <Carousel autoplay>
                <div>
                    <img src="http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg" alt=""/>
                </div>
                <div>
                    <img src="http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg" alt=""/>
                </div>
                <div>
                    <img src="http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg" alt=""/>
                </div>
            </Carousel> 
    // return useObservable( ()=> <>
    //     <Carousel autoplay>
    //         <div>
    //             <img src="http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg" alt=""/>
    //         </div>
    //         <div>
    //             <img src="http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg" alt=""/>
    //         </div>
    //         <div>
    //             <img src="http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg" alt=""/>
    //         </div>
    //     </Carousel>
    // </>)
  }

//   const Example: React.FC = () => {
//     return useObservable( ()=> <>
//         <Carousel autoplay>
//             <div>
//                 <img src="http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg" alt=""/>
//             </div>
//             <div>
//                 <img src="http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg" alt=""/>
//             </div>
//             <div>
//                 <img src="http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg" alt=""/>
//             </div>
//         </Carousel>
//     </>)
// }
  export default Example