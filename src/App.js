import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import moon from './red-moon.jpg'
import jet from './night-jet.jpg'
import city from './night-city.jpg'
import parcel from './output-onlinegiftools.gif'

const App = () => {
  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer 
          offset={0}
          speed={1}
          factor={1}
          style= {{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover'
          }}
          >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1} 
          speed={1.2}
          factor={1}
          style={{
            backgroundImage: `url(${jet})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2} 
          speed={0.5}
          factor={1}
          style={{
            backgroundImage: `url(${city})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <h2>Web Dev is fun</h2>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 0.5, end: 2.5}}
        >
          <img src={parcel} alt='floating parcel'/>
        </ParallaxLayer>
      </Parallax>

    </div>
  );
}

export default App;
