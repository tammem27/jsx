import './App.css';
import img from './react.png'
import vid from './video.mp4'
function App() {
  return (
    <div className="App">
  <h1>hello</h1> 
  
<div style={{border:'solid 1px black',maxWidth:'100vw'}}>

 <h1 className="title">Tammem Ayadi</h1>

 <br />

 <img src="https://blog.ippon.fr/content/images/2016/04/react-javascript.png" />

 <br />

 <img src={img} />

</div>

<video width="320" height="240" controls>

 <source src={vid} type="video/mp4" />

</video>
   </div>
  );
}

export default App;
