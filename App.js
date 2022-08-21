import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
import SimpleSlider from './SimpleSlider.js';

function App() {
  return (
    <ChakraProvider className='page'>

      <div className='head'>
        <div className='menu'><HamburgerIcon 
            color='white' w={30} h={30}/>
        </div>
        <div className='name'>팀프로젝트명</div>
      </div>

      <div>
        <div className='category' id='diner'>
          맛집
          <div className='seeAll' id='ds'>
            {' '}<Link color='#4364F7' href='#'>
            모두보기</Link>
          </div>
          <SimpleSlider/>
        </div>
        <div className='category' id='schedule'>
          일정
          <div className='seeAll' id='ss'>
            {' '}<Link color='#4364F7' href='#'>
            모두보기</Link>
          </div>
          <SimpleSlider/>
        </div>
          
      </div>

    </ChakraProvider>
  );
}

export default App;