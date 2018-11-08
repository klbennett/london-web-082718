import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HogDetail from './HogDetail'
import HogsList from './HogsList'


const HogContainer = ({hogs, handleChange}) => {

   return (<div>
          <Switch>
              <Route path="/hogs/:slug" render={(routerProps) => {
                const hog = hogs.find(hog => hog.name.split(" ").join("-").toLowerCase() === routerProps.match.params.slug)
                return hogs.length === 0 ?
                  <div>Loading</div> :
                  hog ?
                  <HogDetail hog={hog}/> :
                  <div>Hog not found.</div>

              }}/>
              <Route path="/hogs" render={() => <HogsList hogs={hogs} handleChange={handleChange}/>}/>
          </Switch>
             </div>)
}

export default HogContainer
