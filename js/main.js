let map, scriptPanel = scrollama(), countiesLayer;
function adjustStoryboardlSize() {  
}

async function geojsonFetch() {
  map.on('load', () => {
    scriptPanel
      .setup({
        step: ".scene", // all the scenes.
        offset: 0.33, // the location of the enter and exit trigger
        debug: false // toggler on or off the debug mode.
      })
      .onStepEnter(handleSceneEnter)
      .onStepExit(handleSceneExit);

    
    function handleSceneEnter(response) {
      var index = response.index; 
      if (index === 0) {
       
        map.flyTo({
          center: [-121.93, 47.33],
          zoom: 8,
          pitch: 0,
          speed: 0.5
        });
        // ...
      } else if (index === 1) {
      }
    }
    function handleSceneExit(response) {
      var index = response.index;
      if (index === 0) {
      } else if (index === 1) {  
      }
      
    }
  });
}

geojsonFetch();
